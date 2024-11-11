"use client";

import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubcurrency from "../lib/convertToSubcurrency";
import { logEvent } from "../lib/analytics"; // Import the batching analytics utility
import { client } from "@/sanity/lib/client";

const CheckoutPage = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    // State variables
    const [errorMessage, setErrorMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState("");

    // Log 'open_checkout_page' event when the component loads
    useEffect(() => {
        if (userId) {
            logEvent("open_checkout_page", { page: "/checkout", amount }, userId);
        }
    }, [amount, userId]);

    // Retrieve userId from local storage
    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }
        else{
            setUserId('new user');
        }
    }, []);

    // Fetch the client secret from your server
    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                const response = await fetch("/api/create-payment-intent", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
                });
                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error("Error fetching client secret:", error);
            }
        };

        fetchClientSecret();
    }, [amount]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            setErrorMessage("Stripe is not loaded yet. Please try again later.");
            return;
        }

        setLoading(true);

        try {
            // Call elements.submit() immediately before stripe.confirmPayment()
            const { error: submitError } = await elements.submit();

            if (submitError) {
                setErrorMessage(submitError.message);
                logEvent("payment_failed", { reason: submitError.message }, userId);
                setLoading(false);
                return;
            }

            // Now call stripe.confirmPayment()
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: `http://localhost:3000/payment-success?amount=${amount}`,
                },
                redirect: "if_required",
            });

            if (error) {
                setErrorMessage(error.message);
                logEvent("payment_failed", { reason: error.message }, userId);
                setLoading(false);
                return;
            }

            if (paymentIntent && paymentIntent.status === "succeeded") {
                // Payment successful
                logEvent("payment_success", {
                    paymentIntentId: paymentIntent.id,
                    amount,
                    currency: paymentIntent.currency,
                }, userId);

                // Store successful payment in Sanity
                await client.create({
                    _type: "payment",
                    userId: userId,
                    amount: amount,
                    timestamp: new Date().toISOString(),
                });

                // Remove the user ID from localStorage after a successful payment
                localStorage.removeItem("userId");

                // Redirect to success page
                window.location.href = `/payment-success?amount=${amount}`;
            } else if (paymentIntent && paymentIntent.status === "requires_action") {
                // Additional authentication is required
                logEvent("payment_requires_action", {
                    paymentIntentId: paymentIntent.id,
                    amount,
                }, userId);
            } else {
                // Handle other statuses
                setErrorMessage("Payment failed. Please try again.");
                logEvent("payment_failed", { status: paymentIntent?.status || "unknown" }, userId);
                setLoading(false);
            }
        } catch (error) {
            setErrorMessage("An unexpected error occurred. Please try again.");
            logEvent("payment_failed", { error: error.message }, userId);
            console.error("Error during payment processing:", error);
        } finally {
            setLoading(false);
        }
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
        </form>
    );
};

export default CheckoutPage;
