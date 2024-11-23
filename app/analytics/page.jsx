"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as XLSX from "xlsx";

export default function AnalyticsPage() {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [summaryData, setSummaryData] = useState(null);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedRow, setExpandedRow] = useState(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Filters
    const [eventFilter, setEventFilter] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await client.fetch(`
                    *[_type == "analyticsBatch"] | order(date desc)[0...50] {
                        date,
                        events
                    }
                `);

                const deduplicatedData = deduplicateEvents(data);
                setAnalyticsData(deduplicatedData);
                setFilteredData(deduplicatedData);

                const summary = calculateSummary(deduplicatedData);
                setSummaryData(summary);

                const chartData = calculateChartData(deduplicatedData);
                setChartData(chartData);
            } catch (error) {
                console.error("Error fetching analytics data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const calculateSummary = (data) => {
        const eventCounts = {};
        const uniqueUsers = new Set();

        data.forEach((batch) => {
            batch.events.forEach((event) => {
                eventCounts[event.event] = (eventCounts[event.event] || 0) + 1;
                if (event.userId && event.userId !== " - " && event.userId !== "new user") {
                    uniqueUsers.add(event.userId);
                }
            });
        });

        return { eventCounts, uniqueUsers: uniqueUsers.size };
    };

    const calculateChartData = (data) => {
        const eventsByDate = {};

        data.forEach((batch) => {
            batch.events.forEach((event) => {
                const eventDate = new Date(event.timestamp).toLocaleDateString();

                if (!eventsByDate[eventDate]) {
                    eventsByDate[eventDate] = 0;
                }
                eventsByDate[eventDate] += 1;
            });
        });

        return Object.entries(eventsByDate).map(([date, count]) => ({
            date,
            events: count,
        }));
    };

    const deduplicateEvents = (data) => {
        return data.map((batch) => ({
            ...batch,
            events: batch.events.reduce((acc, event, idx) => {
                if (
                    idx > 0 &&
                    (event.event === "form_opened" || event.event === "registration_form_opened") &&
                    acc[acc.length - 1]?.event === event.event
                ) {
                    return acc; // Skip consecutive duplicates
                }
                return [...acc, event];
            }, []),
        }));
    };

    const applyFilters = () => {
        const startDateTime = startDate ? new Date(startDate).getTime() : null;
        const endDateTime = endDate ? new Date(endDate).getTime() : null;

        const filtered = analyticsData.map((batch) => ({
            ...batch,
            events: batch.events.filter((event) => {
                const eventTime = new Date(event.timestamp).getTime();

                const matchesEventFilter =
                    !eventFilter || event.event.toLowerCase() === eventFilter.toLowerCase();
                const matchesDateFilter =
                    (!startDateTime || eventTime >= startDateTime) &&
                    (!endDateTime || eventTime <= endDateTime);

                return matchesEventFilter && matchesDateFilter;
            }),
        }));

        setFilteredData(filtered);
        setCurrentPage(1); // Reset to the first page after filtering
    };

    const resetFilters = () => {
        setEventFilter("");
        setStartDate("");
        setEndDate("");
        setFilteredData(analyticsData);
        setCurrentPage(1); // Reset to the first page after resetting filters
    };

    const handleRowExpand = (index) => {
        setExpandedRow(index === expandedRow ? null : index);
    };

    const renderExpandedContent = (event) => {
        return (
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300 w-full">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Event Details</h3>
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <span className="font-semibold">Timestamp:</span>
                        <span className="break-words text-sm">{new Date(event.timestamp).toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <span className="font-semibold">Event:</span>
                        <span className="break-words text-sm">{event.event}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <span className="font-semibold">User ID:</span>
                        <span className="break-words text-sm">{event.userId}</span>
                    </div>
                    {event.metadata &&
                        Object.entries(event.metadata).map(([key, value]) => (
                            <div className="flex flex-col sm:flex-row justify-between" key={key}>
                                <span className="font-semibold">{key}:</span>
                                <span className="break-words text-sm">{value}</span>
                            </div>
                        ))}
                </div>
            </div>
        );
    };

    const uniqueEvents = Array.from(
        new Set(
            analyticsData.flatMap((batch) =>
                batch.events.map((event) => event.event)
            )
        )
    );

    // Pagination Logic
    const flattenedEvents = filteredData
        .flatMap((batch) => batch.events)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Descending order by timestamp

    const totalPages = Math.ceil(flattenedEvents.length / rowsPerPage);
    const paginatedEvents = flattenedEvents.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Prepare data for export
    const prepareExportData = () => {
        const metadataKeys = new Set();

        flattenedEvents.forEach((event) => {
            if (event.metadata) {
                Object.keys(event.metadata).forEach((key) => metadataKeys.add(key));
            }
        });

        const exportData = flattenedEvents.map((event) => {
            const row = {
                Timestamp: new Date(event.timestamp).toLocaleString(),
                Event: event.event,
                "User ID": event.userId,
            };

            metadataKeys.forEach((key) => {
                row[key] = event.metadata?.[key] || "-";
            });

            return row;
        });

        return exportData;
    };

    const exportToExcel = () => {
        const data = prepareExportData();
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Analytics Data");
        XLSX.writeFile(workbook, "AnalyticsData.xlsx");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Analytics Dashboard</h1>

                {/* Summary Section */}
                {summaryData && (
                    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-blue-900 mb-2">Total Events</h2>
                            <p className="text-2xl font-bold">{flattenedEvents.length}</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-green-900 mb-2">Unique Users</h2>
                            <p className="text-2xl font-bold">{summaryData.uniqueUsers}</p>
                        </div>
                        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-yellow-900 mb-2">Common Events</h2>
                            <ul className="text-gray-700 space-y-1">
                                {Object.entries(summaryData.eventCounts).map(([event, count]) => (
                                    <li key={event} className="text-lg">
                                        {event}: {count}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Line Chart */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Events Over Time</h2>
                    {loading ? (
                        <div className="text-center">
                            <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-blue-600"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={chartData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="events"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </div>

                {/* Filters Section */}
                <div className="mb-6 flex flex-wrap gap-4">
                    <select
                        className="border border-gray-300 p-2 rounded"
                        value={eventFilter}
                        onChange={(e) => setEventFilter(e.target.value)}
                    >
                        <option value="">All Events</option>
                        {uniqueEvents.map((event) => (
                            <option key={event} value={event}>
                                {event}
                            </option>
                        ))}
                    </select>

                    <input
                        type="date"
                        className="border border-gray-300 p-2 rounded"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />

                    <input
                        type="date"
                        className="border border-gray-300 p-2 rounded"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />

                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={applyFilters}
                    >
                        Apply Filters
                    </button>

                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={resetFilters}
                    >
                        Reset Filters
                    </button>
                </div>

                {/* Table */}
                <div className={`flex flex-col md:flex-row`}>
                    <div
                        className={`flex-1 overflow-x-auto transition-all duration-300 ${
                            expandedRow !== null ? "md:w-1/2 w-full" : "w-full"
                        }`}
                    >
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-blue-100 text-blue-900">
                                <tr>
                                    {expandedRow === null ? (
                                        <>
                                            <th className="p-3 border border-gray-300 text-left">
                                                Timestamp
                                            </th>
                                            <th className="p-3 border border-gray-300 text-left">
                                                Event
                                            </th>
                                            <th className="p-3 border border-gray-300 text-left">
                                                User ID
                                            </th>
                                            <th className="p-3 border border-gray-300 text-left">
                                                Action
                                            </th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="p-3 border border-gray-300 text-left">
                                                Event
                                            </th>
                                            <th className="p-3 border border-gray-300 text-left">
                                                Action
                                            </th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedEvents.map((event, index) => (
                                    <React.Fragment key={index}>
                                        <tr
                                            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                        >
                                            {expandedRow === null ? (
                                                <>
                                                    <td className="p-3 border border-gray-300">
                                                        {new Date(
                                                            event.timestamp
                                                        ).toLocaleString()}
                                                    </td>
                                                    <td className="p-3 border border-gray-300">
                                                        {event.event}
                                                    </td>
                                                    <td className="p-3 border border-gray-300">
                                                        {event.userId}
                                                    </td>
                                                </>
                                            ) : (
                                                <td className="p-3 border border-gray-300">
                                                    {event.event}
                                                </td>
                                            )}
                                            <td className="p-3 border border-gray-300">
                                                <button
                                                    className="text-blue-500 flex items-center"
                                                    onClick={() =>
                                                        handleRowExpand(index)
                                                    }
                                                >
                                                    {expandedRow === index ? (
                                                        <FaChevronUp />
                                                    ) : (
                                                        <FaChevronDown />
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Expanded View on the Right */}
                    {expandedRow !== null && (
                        <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0">
                            {renderExpandedContent(paginatedEvents[expandedRow])}
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-6">
                    <button
                        className="bg-gray-300 px-4 py-2 rounded"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="bg-gray-300 px-4 py-2 rounded"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>

                {/* Export Button */}
                <div className="mt-6 flex justify-end">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={exportToExcel}
                    >
                        Export to Excel
                    </button>
                </div>
            </div>
        </div>
    );
}
