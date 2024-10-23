"use client";

import React, { useEffect, useState } from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "../lib/convertToSubcurrency";

const CheckoutPage = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    // State variables
    const [errorMessage, setErrorMessage] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(""); // New state for user_id
    const [submittedUserId, setSubmittedUserId] = useState(""); // State to store submitted user_id

    // Fetch the client secret from your server
    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [amount]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        // Store the submitted user_id
        setSubmittedUserId(userId);

        const { error: submitError } = await elements.submit();

        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `http://localhost:3000/payment-success?amount=${amount}`,
            },
        });

        if (error) {
            // Show error to your customer
            setErrorMessage(error.message);
        } else {
            // Payment successful
            // You can handle additional logic here if needed
        }

        setLoading(false);
    };

    if (!clientSecret || !stripe || !elements) {
        return (
            <div className="flex items-center justify-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-black"
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md">
            {clientSecret && <PaymentElement />}

            {/* User ID Input Field */}
            <label htmlFor="user_id" className="block mt-4">
                User ID:
            </label>
            <input
                type="text"
                id="user_id"
                name="user_id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />

            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}

            <button
                disabled={!stripe || loading}
                className="text-white w-full p-3 bg-blue-600 mt-4 rounded-md font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {!loading ? `Pay $${amount}` : "Processing..."}
            </button>

            {/* Display the submitted user_id */}
            {submittedUserId && (
                <div className="mt-4 text-green-600">
                    <p>User ID submitted: {submittedUserId}</p>
                </div>
            )}
        </form>
    );
};

export default CheckoutPage;
