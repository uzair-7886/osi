"use client";

import { useState, useEffect } from 'react';
import { client } from "@/sanity/lib/client";
import { v4 as uuidv4 } from 'uuid';

export default function EnrollmentForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [formStarted, setFormStarted] = useState(false); // New state to track if the form has been started

    useEffect(() => {
        // Trigger 'form_opened' event when component mounts
        if (typeof window !== 'undefined' && window.gtag) {
            console.log("Triggering 'form_opened' event");
            window.gtag('event', 'form_opened');
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (!formStarted) {
            setFormStarted(true);
            // Trigger 'filling_form' event
            if (typeof window !== 'undefined' && window.gtag) {
                console.log("Triggering 'filling_form' event");
                window.gtag('event', 'filling_form');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Trigger 'form_submitted' event
        if (typeof window !== 'undefined' && window.gtag) {
            console.log("Triggering 'form_submitted' event");
            window.gtag('event', 'form_submitted');
        }

        setLoading(true);

        // Generate a unique user ID
        const uniqueUserId = uuidv4();

        try {
            // Create the enrolledUser document in Sanity
            await client.create({
                _type: 'enrolledUser',
                userId: uniqueUserId, // Add generated userId
                ...formData,
            });

            // Store the userId in localStorage for the checkout page
            localStorage.setItem('userId', uniqueUserId);

            // Redirect to checkout page
            window.location.href = `/checkout`;
        } catch (error) {
            console.error("Error enrolling user:", error);
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Enrollment Form</h2>

                {['firstName', 'secondName', 'email', 'phone'].map((field, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1 capitalize" htmlFor={field}>
                            {field === 'firstName' ? 'First Name' : field === 'secondName' ? 'Second Name' : field}
                        </label>
                        <input
                            type={field === 'email' ? 'email' : 'text'}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 mt-4 text-white font-semibold rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                >
                    {loading ? 'Submitting...' : 'Enroll Now'}
                </button>
            </form>
        </div>
    );
}
