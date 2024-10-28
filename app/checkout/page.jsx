"use client";

import CheckoutPage from "../components/CheckoutPage";
import convertToSubcurrency from "../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
    // Static information about the university course
    const courseInfo = {
        title: "Introduction to Computer Science",
        description:
            "This course provides an overview of computer science, covering topics such as algorithms, data structures, software development, and computer systems.",
        instructor: "Dr. Jane Smith",
        schedule: "Mondays and Wednesdays, 10:00 AM - 11:30 AM",
        location: "Room 101, Science Building",
        fee: 500, // Course fee in USD
    };

    // Set the amount to the course fee
    const amount = courseInfo.fee;

    return (
        <main className="flex flex-col md:flex-row h-screen bg-gray-50">
            {/* Left Half */}
            <div className="w-full md:w-1/2 p-6 md:p-10 bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex flex-col items-center justify-center">
                <div className="mb-10 text-center max-w-lg">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{courseInfo.title}</h1>
                    <h2 className="text-xl md:text-2xl mb-4">Instructor: {courseInfo.instructor}</h2>
                    <p className="text-sm md:text-lg mb-4">{courseInfo.description}</p>
                    <p className="text-sm md:text-lg mb-2">Schedule: {courseInfo.schedule}</p>
                    <p className="text-sm md:text-lg mb-2">Location: {courseInfo.location}</p>
                    <p className="text-lg md:text-xl font-bold mt-6">Course Fee: ${courseInfo.fee}</p>
                </div>
            </div>

            {/* Right Half */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center bg-white shadow-md rounded-lg md:rounded-none overflow-hidden">
                <div className="w-full max-w-md mx-auto h-full overflow-y-auto">
                    <Elements
                        stripe={stripePromise}
                        options={{
                            mode: "payment",
                            amount: convertToSubcurrency(amount),
                            currency: "usd",
                        }}
                    >
                        <CheckoutPage amount={amount} />
                    </Elements>
                </div>
            </div>
        </main>
    );
}
