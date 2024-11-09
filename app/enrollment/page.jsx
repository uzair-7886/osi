"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { v4 as uuidv4 } from "uuid";

export default function EnrollmentForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [formStarted, setFormStarted] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "form_opened");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (!formStarted) {
            setFormStarted(true);
            if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "filling_form");
            }
        }
    };

    const handleEnrollSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const uniqueUserId = uuidv4();

        try {
            await client.create({
                _type: "enrolledUser",
                userId: uniqueUserId,
                ...formData,
            });

            // Store the userId in localStorage for the checkout page
            localStorage.setItem("userId", uniqueUserId);

            // Send email to enrolled user and admin
            await sendEmail("enroll", uniqueUserId);

            // Redirect to checkout page
            window.location.href = `/checkout`;
        } catch (error) {
            console.error("Error enrolling user:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleProspectSubmit = async () => {
        setLoading2(true);
        const uniqueUserId = uuidv4();

        try {
            // Send email to admin and user indicating consideration
            await sendEmail("prospect", uniqueUserId);

            alert("Your interest has been noted! An email has been sent to the admin.");
            window.location.href = `/thank-you`;
        } catch (error) {
            console.error("Error sending prospect email:", error);
        } finally {
            setLoading2(false);
        }
    };

    const sendEmail = async (type, userId) => {
        try {
            await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type,
                    userId,
                    formData,
                }),
            });
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleEnrollSubmit}
                className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-md"
            >
                <div className="text-center mb-8">
                    <h2 className="text-blue-900 font-semibold text-2xl">ENROLLMENT FORM</h2>
                </div>
                <div className="space-y-8">
                    <section>
                        <h3 className="text-orange font-bold text-lg mb-4">
                            1. PERSONAL DETAILS
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-gray-700 font-medium mb-1"
                                >
                                    First Name :
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your first name"
                                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-200 rounded-md focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="secondName"
                                    className="block text-gray-700 font-medium mb-1"
                                >
                                    Surname :
                                </label>
                                <input
                                    type="text"
                                    id="secondName"
                                    name="secondName"
                                    value={formData.secondName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your surname"
                                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-200 rounded-md focus:ring focus:ring-blue-200"
                                />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-orange font-bold text-lg mb-4">
                            2. CONTACT DETAILS
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-1"
                                >
                                    Email Id :
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="info@xyz.com"
                                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-200 rounded-md focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 font-medium mb-1"
                                >
                                    Mobile No. :
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 - 98596 58000"
                                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-200 rounded-md focus:ring focus:ring-blue-200"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex justify-between items-center mt-8 space-x-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 text-white font-semibold rounded-md ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        {loading ? "Submitting..." : "Enroll Now"}
                    </button>
                    <button
                        type="button"
                        onClick={handleProspectSubmit}
                        disabled={loading2}
                        className="w-full py-2 text-white font-semibold rounded-md bg-gray-500 hover:bg-gray-600"
                    >
                        {loading2 ? "Submitting..." : "Prospect"}
                    </button>
                </div>
            </form>
        </div>
    );
}
