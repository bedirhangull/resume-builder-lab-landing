import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path based on your project structure

export default function Faq() {
    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container">
                <div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs font-medium">
                        FAQ
                    </div>
                    <h1 className="mt-4 text-4xl font-semibold">Common Questions & Answers</h1>
                    <p className="mt-6 font-medium text-muted-foreground">
                        Find out all the essential details about our platform and how it can serve your needs.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {/* FAQ Item 1 */}
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is the Free Professional Resume Builder with AI?</AccordionTrigger>
                            <AccordionContent>
                                The Free Professional Resume Builder with AI is a powerful tool designed to help you create professional, ATS-friendly resumes and cover letters in minutes. It uses AI to provide tailored suggestions, optimize your resume for Applicant Tracking Systems (ATS), and ensure your application stands out to employers.
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ Item 2 */}
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How does the AI-powered resume builder work?</AccordionTrigger>
                            <AccordionContent>
                                Our AI analyzes your skills, experience, and job preferences to generate a polished resume. It also provides personalized suggestions based on job descriptions from platforms like LinkedIn, Indeed, and Glassdoor. This ensures your resume is tailored to each job application and optimized for ATS.
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ Item 3 */}
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Are the resume templates ATS-friendly?</AccordionTrigger>
                            <AccordionContent>
                                Yes, all our resume templates are designed to be ATS-friendly. They are optimized to ensure your resume passes through Applicant Tracking Systems and reaches recruiters. Our templates are also professionally designed to make your resume visually appealing.
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ Item 4 */}
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can I customize my resume after using the AI builder?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely! Our platform allows you to fully customize your resume after the AI generates it. You can edit the content, choose different templates, and make adjustments to ensure your resume perfectly matches your needs.
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ Item 5 */}
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is my data safe with your resume builder?</AccordionTrigger>
                            <AccordionContent>
                                Yes, your data is completely safe. We use advanced encryption to protect your personal information and resumes. Your data is never shared with third parties without your consent.
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ Item 6 */}
                        <AccordionItem value="item-6">
                            <AccordionTrigger>How can I get expert feedback on my resume?</AccordionTrigger>
                            <AccordionContent>
                                You can upload your resume to our platform, and our HR specialists will review it. Within 2-3 business days, you'll receive detailed feedback on how to improve your resume and make it stand out to employers.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Contact Section */}
                <div data-orientation="horizontal" role="none" className="shrink-0  w-full my-12"></div>
                <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
                    <div className="lg:col-span-2">
                        <h1 className="mt-4 text-2xl font-semibold">Still have questions?</h1>
                        <p className="mt-6 font-medium text-muted-foreground">
                            We're here to provide clarity and assist with any queries you may have.
                        </p>
                    </div>
                    <div className="flex md:justify-end">
                        <a href="#" className="flex items-center gap-2 hover:underline">
                            Contact Support
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-right h-auto w-4"
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}