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
        <main className="flex h-screen">
            {/* Left Half */}
            <div className="w-full md:w-1/2 p-5 text-white bg-gradient-to-tr from-blue-500 to-purple-500 flex flex-col items-center justify-center">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">{courseInfo.title}</h1>
                    <h2 className="text-2xl mb-4">Instructor: {courseInfo.instructor}</h2>
                    <p className="text-lg mb-4">{courseInfo.description}</p>
                    <p className="text-lg mb-2">Schedule: {courseInfo.schedule}</p>
                    <p className="text-lg mb-2">Location: {courseInfo.location}</p>
                    <p className="text-lg font-bold mt-4">Course Fee: ${courseInfo.fee}</p>
                </div>
            </div>

            {/* Right Half */}
            <div className="w-full md:w-1/2 p-5 flex flex-col items-center justify-center">
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
        </main>
    );
}
