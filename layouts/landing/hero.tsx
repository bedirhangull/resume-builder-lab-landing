import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, FileText, CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="py-8 md:py-12 lg:py-20">
            <div className="container px-4 sm:px-6 lg:px-8">
                {/* Top Section with Border */}
                <div className="px-4 py-12 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* AI-powered Badge */}
                        <a href="#" className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm hover:bg-muted/80">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                AI-powered
                            </div>
                            <span>Solutions for your career growth</span>
                            <ArrowRight className="inline size-4" />
                        </a>

                        {/* Heading */}
                        <h1 className="my-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Build Your Perfect Resume with AI
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            Create professional resumes tailored to job ads, optimized for ATS, and reviewed by humans.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                            <Button className="h-12 w-full rounded-lg px-8 text-base sm:w-auto">
                                <Sparkles className="mr-2 size-4" />
                                Coming Soon
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Stats */}
                <div className="relative grid border-t border-dashed sm:grid-cols-3">
                    {/* Stats */}
                    <div className="flex items-center gap-4 p-6 font-medium sm:justify-center sm:gap-6 lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
                            <FileText className="size-5 lg:size-6" />
                        </span>
                        AI-Powered Resume Suggestions
                    </div>
                    <div className="flex items-center gap-4 border-t border-dashed p-6 font-medium sm:border-t-0 sm:border-x sm:justify-center sm:gap-6 lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
                            <Shield className="size-5 lg:size-6" />
                        </span>
                        Safe Storage & Privacy
                    </div>
                    <div className="flex items-center gap-4 border-t border-dashed p-6 font-medium sm:justify-center sm:gap-6 lg:p-10 lg:text-lg">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
                            <CheckCircle className="size-5 lg:size-6" />
                        </span>
                        HR-Approved Templates
                    </div>
                </div>
            </div>
        </section>
    );
}