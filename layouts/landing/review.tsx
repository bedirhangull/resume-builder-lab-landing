'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Star, Quote, Smile, ThumbsUp, CheckCircle, Award } from 'lucide-react';

export default function ImprovedReview() {
    const [shuffledPositions, setShuffledPositions] = useState<number[]>([]);

    // Sample customer data (6 customers)
    const customers = [
        {
            name: "Emily Carter",
            role: "Software Engineer",
            review: "This resume builder was a lifesaver! The templates are sleek and professional, and the AI tips helped me tailor my resume for a role at Amazon. I got the job!",
            avatar: "/customers/customer_5.png", // Man
            rating: 5,
        },
        {
            name: "James Thompson",
            role: "Product Manager",
            review: "The AI suggestions were incredibly insightful. I updated my resume in under an hour and landed an interview at a top tech firm. Highly recommend!",
            avatar: "/customers/customer_4.jpg", // Man
            rating: 5,
        },
        {
            name: "Charlotte Wilson",
            role: "Data Scientist",
            review: "The ATS optimization feature is brilliant. I went from no responses to multiple interview requests within a week. This tool is a must-have!",
            avatar: "/customers/customer_2.jpg", // Woman
            rating: 5,
        },
        {
            name: "Oliver Harris",
            role: "UX Designer",
            review: "As a designer, I loved the modern templates. They saved me so much time, and I was able to focus on showcasing my portfolio. Got a job offer within two weeks!",
            avatar: "/customers/customer_6.jpg", // Man
            rating: 4,
        },
        {
            name: "Amelia Clark",
            role: "Marketing Specialist",
            review: "The customization options are fantastic. I created a resume that perfectly matched the job description, and it helped me stand out in a competitive field.",
            avatar: "/customers/customer_1.jpg", // Woman
            rating: 5,
        },
        {
            name: "William Taylor",
            role: "Graphic Designer",
            review: "The design templates are stunning and helped me land multiple freelance projects. I’ve never had such a quick response from employers before!",
            avatar: "/customers/customer_3.jpg", // Man
            rating: 5,
        }
    ];

    const shuffleArray = (array: number[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        const positions = Array.from({ length: 12 }, (_, i) => i);
        setShuffledPositions(shuffleArray(positions));
    }, []);

    return (
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Title and Description */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Hear from our satisfied customers who have successfully landed their dream jobs using our resume builder.
                    </p>
                </div>

                {/* Icon Blocks Section */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 mb-10">
                    {/* Icon Block 1: Customer Happiness */}
                    <a
                        className="group flex flex-col justify-between hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 transition-all duration-300"
                        href="#"
                    >
                        <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                            <Smile className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="mt-5 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">Customer Happiness</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                95% of our customers are satisfied with our resume builder.
                            </p>
                        </div>
                    </a>
                    {/* Icon Block 2: Success Stories */}
                    <a
                        className="group flex flex-col justify-between hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 transition-all duration-300"
                        href="#"
                    >
                        <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                            <ThumbsUp className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="mt-5 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">Success Stories</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Read how our customers landed their dream jobs.
                            </p>
                        </div>
                    </a>
                    {/* Icon Block 3: More Interviews */}
                    <a
                        className="group flex flex-col justify-between hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 transition-all duration-300"
                        href="#"
                    >
                        <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                            <CheckCircle className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="mt-5 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">More Interviews</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                40% of users report more interview calls after using our tool.
                            </p>
                        </div>
                    </a>
                    {/* Icon Block 4: Higher Pay */}
                    <a
                        className="group flex flex-col justify-between hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 transition-all duration-300"
                        href="#"
                    >
                        <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                            <Award className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="mt-5 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">Higher Pay</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Users report an 8% increase in salary offers.
                            </p>
                        </div>
                    </a>
                </div>

                {/* Randomly Positioned Customer Reviews */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto">
                    {shuffledPositions.map((position, index) => {
                        const customer = customers[position % customers.length];
                        const isCustomerSquare = position < customers.length;

                        return (
                            <div
                                key={index}
                                className="aspect-square w-14 h-14 sm:w-16 sm:h-16"
                            >
                                {isCustomerSquare ? (
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <div className="w-full h-full flex items-center justify-center bg-white rounded-lg ring-2 ring-gray-200 cursor-pointer overflow-hidden hover:ring-indigo-500 transition-all duration-300 transform hover:scale-105">
                                                <Image
                                                    src={customer.avatar}
                                                    alt={`Customer ${position + 1}`}
                                                    width={64}
                                                    height={64}
                                                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover object-center rounded-lg"
                                                />
                                            </div>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-72 sm:w-96">
                                            <div className="flex flex-col space-y-3">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                                        <Image
                                                            src={customer.avatar}
                                                            alt={customer.name}
                                                            width={40}
                                                            height={40}
                                                            className="w-full h-full object-cover object-center rounded-full"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900">{customer.name}</h4>
                                                        <p className="text-xs text-gray-600">{customer.role}</p>
                                                    </div>
                                                </div>
                                                {/* Review Text */}
                                                <p className="text-xs sm:text-sm text-gray-700">
                                                    <Quote className="inline-block w-4 h-4 text-blue-600 mb-1" /> {customer.review}
                                                </p>
                                                {/* Rating */}
                                                <div className="flex items-center">
                                                    {[...Array(customer.rating)].map((_, i) => (
                                                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                ) : (
                                    <div className="w-full h-full bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-300 ring-2 ring-gray-100"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}