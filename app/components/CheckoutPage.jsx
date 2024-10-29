"use client";

import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubcurrency from "../lib/convertToSubcurrency";
import { client } from "@/sanity/lib/client";

const CheckoutPage = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    // State variables
    const [errorMessage, setErrorMessage] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState("");

    // Trigger 'open_checkout_page' event when the component loads
    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag) {
            console.log("Triggering 'open_checkout_page' event");
            window.gtag("event", "open_checkout_page");
        }
    }, []);

    useEffect(() => {
        // Retrieve userId from local storage
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

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

        if (!stripe || !elements) {
            return;
        }

        // Call elements.submit() immediately before stripe.confirmPayment()
        const { error: submitError } = await elements.submit();

        if (submitError) {
            setErrorMessage(submitError.message);
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
            // Show error to your customer
            setErrorMessage(error.message);
            setLoading(false);
            return;
        }

        if (paymentIntent && paymentIntent.status === "succeeded") {
            // Payment successful
            // Trigger 'payment_complete' event
            if (typeof window !== "undefined" && window.gtag) {
                console.log("Triggering 'payment_complete' event");
                window.gtag("event", "payment_complete", {
                    value: amount,
                    currency: "USD",
                });
            } else {
                console.error("Google Analytics is not loaded yet.");
            }

            // Store successful payment in Sanity
            await client.create({
                _type: 'payment',
                userId: userId,
                amount: amount,
                timestamp: new Date().toISOString(),
            });

            // Redirect to success page
            window.location.href = `/payment-success?amount=${amount}`;
        } else if (paymentIntent && paymentIntent.status === "requires_action") {
            // Additional authentication is required
            // Stripe will handle the redirect to the return_url
        } else {
            // Handle other statuses
            setErrorMessage("Payment failed. Please try again.");
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
