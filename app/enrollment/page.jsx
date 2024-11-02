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
    const [loading2, setLoading2] = useState(false);
    const [formStarted, setFormStarted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'form_opened');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (!formStarted) {
            setFormStarted(true);
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'filling_form');
            }
        }
    };

    const handleEnrollSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const uniqueUserId = uuidv4();

        try {
            await client.create({
                _type: 'enrolledUser',
                userId: uniqueUserId,
                ...formData,
            });

            // Store the userId in localStorage for the checkout page
            localStorage.setItem('userId', uniqueUserId);
            
            // Send email to enrolled user and admin
            await sendEmail('enroll', uniqueUserId);

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
            await sendEmail('prospect', uniqueUserId);

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
            await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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
            <form onSubmit={handleEnrollSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
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
                    className={`w-full py-2 mt-4 text-white font-semibold rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {loading ? 'Submitting...' : 'Enroll Now'}
                </button>

                <button
                    type="button"
                    onClick={handleProspectSubmit}
                    disabled={loading2}
                    className="w-full py-2 mt-2 text-white font-semibold rounded-md bg-gray-500 hover:bg-gray-600"
                >
                    {loading2 ? 'Submitting...' : 'Prospect'}
                </button>
            </form>
        </div>
    );
}
