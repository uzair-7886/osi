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

export default function AnalyticsPage() {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [summaryData, setSummaryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch analytics data from Sanity
                const data = await client.fetch(`
                    *[_type == "analyticsBatch"] | order(date desc)[0...50] {
                        date,
                        events
                    }
                `);

                // Deduplicate events and update state
                const deduplicatedData = deduplicateEvents(data);
                setAnalyticsData(deduplicatedData);

                // Calculate summary data
                const summary = calculateSummary(deduplicatedData);
                setSummaryData(summary);
            } catch (error) {
                console.error("Error fetching analytics data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Function to calculate summary data
    const calculateSummary = (data) => {
        const eventCounts = {};
        const uniqueUsers = new Set();

        data.forEach((batch) => {
            let lastEvent = null;

            batch.events.forEach((event) => {
                // Deduplicate consecutive 'form_opened' events
                if (event.event === "form_opened" && lastEvent === "form_opened") {
                    return; // Skip this event
                }

                lastEvent = event.event;

                // Count event types
                eventCounts[event.event] = (eventCounts[event.event] || 0) + 1;

                // Collect unique users, excluding invalid user IDs
                if (event.userId && event.userId !== " - " && event.userId !== "new user") {
                    uniqueUsers.add(event.userId);
                }
            });
        });

        return { eventCounts, uniqueUsers: uniqueUsers.size };
    };

    // Function to deduplicate consecutive 'form_opened' events in each batch
    const deduplicateEvents = (data) => {
        return data.map((batch) => {
            const deduplicatedEvents = [];
            let lastEvent = null;

            batch.events.forEach((event) => {
                if (event.event === "form_opened" && lastEvent === "form_opened") {
                    return; // Skip this event
                }

                deduplicatedEvents.push(event);
                lastEvent = event.event;
            });

            return { ...batch, events: deduplicatedEvents };
        });
    };

    // Apply deduplication
    const deduplicatedAnalyticsData = deduplicateEvents(analyticsData);

    // Transform data for Recharts
    const chartData = deduplicatedAnalyticsData.map((batch) => ({
        date: new Date(batch.date).toLocaleDateString(),
        events: batch.events.length,
    }));

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Analytics Dashboard</h1>

                {/* Summary Section */}
                {summaryData && (
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-blue-900 mb-2">Total Events</h2>
                            <p className="text-2xl font-bold">
                                {deduplicatedAnalyticsData.flatMap((batch) => batch.events).length}
                            </p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-green-900 mb-2">Unique Users</h2>
                            <p className="text-2xl font-bold">{summaryData.uniqueUsers}</p>
                        </div>
                        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-yellow-900 mb-2">Common Events</h2>
                            <ul className="text-gray-700">
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
                    ) : analyticsData.length > 0 ? (
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
                    ) : (
                        <p className="text-gray-500">No data available for the graph.</p>
                    )}
                </div>

                {/* Table */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
                    {loading ? (
                        <div className="text-center">
                            <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-blue-600"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : analyticsData.length > 0 ? (
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-blue-100 text-blue-900">
                                <tr>
                                    <th className="p-3 border border-gray-300 text-left">Timestamp</th>
                                    <th className="p-3 border border-gray-300 text-left">Event</th>
                                    <th className="p-3 border border-gray-300 text-left">User ID</th>
                                    <th className="p-3 border border-gray-300 text-left">Metadata</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deduplicatedAnalyticsData.flatMap((batch) =>
                                    batch.events.map((event, index) => (
                                        <tr
                                            key={`${batch.date}-${index}`}
                                            className={
                                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            }
                                        >
                                            <td className="p-3 border border-gray-300">
                                                {new Date(event.timestamp).toLocaleString()}
                                            </td>
                                            <td className="p-3 border border-gray-300">{event.event}</td>
                                            <td className="p-3 border border-gray-300">{event.userId}</td>
                                            <td className="p-3 border border-gray-300">
                                                <pre className="text-sm text-gray-700">
                                                    {JSON.stringify(event.metadata, null, 2)}
                                                </pre>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500">No data available for the table.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
