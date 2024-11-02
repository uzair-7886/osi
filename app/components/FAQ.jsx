'use client'
import React from 'react'
import FAQAccordion from './shared/FAQAccordion'
import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'

function FAQ() {
    const [faqSections, setFaqSections] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                setLoading(true)
                const query = `*[_type == "faqSection"] | order(order asc) {
                    sectionTitle,
                    subtitle,
                    description,
                    faqs[] {
                        question,
                        answer
                    },
                    order
                }`
                const data = await client.fetch(query)
                setFaqSections(data)
            } catch (err) {
                console.error('Error fetching FAQs:', err)
                setError('Failed to load FAQs. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchFAQs()
    }, [])

    if (loading) {
        return (
            <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row gap-12 animate-pulse">
                <div className="lg:w-1/3 py-8">
                    <div className="space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-24"></div>
                        <div className="h-10 bg-gray-200 rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 space-y-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-center">
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-200 rounded-full w-4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
    }

    if (error) {
        return (
            <div className="w-full max-w-6xl mx-auto px-4 py-16 text-center text-red-600">
                {error}
            </div>
        )
    }

    return (
        <>
            <div className="w-full max-w-6xl mx-auto px-4 py-16">
                {faqSections && faqSections.map((section, index) => (
                    <div key={index}>
                        <div className={`${index > 0 ? 'mt-16' : ''}`}>
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-1/3 py-8">
                                    <div>
                                        <h2 className="text-4xl md:text-[22px] text-orange font-semibold mb-4">
                                            {section.sectionTitle}
                                        </h2>
                                        <h3 className="text-3xl md:text-[40px] font-semibold mb-4">
                                            {section.subtitle}
                                        </h3>
                                        <p className="text-grey">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <FAQAccordion faqs={section.faqs || []} />
                                </div>
                            </div>
                        </div>
                        
                        {index === 1 && (
                            <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen mt-16">
                                <section className="w-full bg-[#12243E] bg-opacity-10 py-16 md:py-24">
                                    <div className="max-w-6xl mx-auto px-4 text-center">
                                        <h2 className="text-4xl md:text-[22px] text-orange font-semibold mb-4">
                                            Eligibility
                                        </h2>
                                        <p className="text-3xl md:text-[40px] font-semibold mb-4">
                                            Are there any age restrictions for participants?
                                        </p>
                                        <p className="mt-4">
                                            Yes, students are divided into age groups:
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            <li className="">Juniors: Ages 13-15</li>
                                            <li className="">Senior: Ages 16-18</li>
                                            <li className="">University Students: 18+</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default FAQ