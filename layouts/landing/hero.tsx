import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, FileText, CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="py-4 md:py-12 lg:py-16">
            <div className="container">
                {/* Top Section with Border */}
                <div className="px-4 py-20 md:px-16">
                    <div className="mx-auto max-w-3xl">
                        {/* AI-powered Badge */}
                        <a href="#" className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                AI-powered
                            </div>
                            <span>Solutions for your career growth</span>
                            <ArrowRight className="inline size-4" />
                        </a>

                        {/* Heading */}
                        <h1 className="my-4 mb-6 text-center text-3xl font-semibold lg:text-6xl">
                            Build Your Perfect Resume with AI
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground lg:text-xl">
                            Create professional resumes tailored to job ads, optimized for ATS, and reviewed by humans.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col justify-center gap-2 sm:flex-row">
                            <Button className="h-11 rounded-md px-8 w-full gap-2 sm:w-auto lg:mt-10">
                                <Sparkles className="size-4" />
                                Coming Soon
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Stats */}
                <div className="relative grid border-x border-dashed md:grid-cols-3">
                    {/* Stats */}
                    <div className="flex items-center gap-6 p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
                            <FileText className="w-5 lg:w-6" />
                        </span>
                        AI-Powered Resume Suggestions
                    </div>
                    <div className="flex items-center gap-6 border-x border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
                            <Shield className="w-5 lg:w-6" />
                        </span>
                        Safe Storage & Privacy
                    </div>
                    <div className="flex items-center gap-6 border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
                            <CheckCircle className="w-5 lg:w-6" />
                        </span>
                        HR-Approved Templates
                    </div>
                </div>
            </div>
        </section>
    );
}