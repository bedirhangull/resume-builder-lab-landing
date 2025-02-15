import StepOne from "@/public/step/step-01.svg";
import StepSecond from "@/public/step/step-02.svg";
import StepThird from "@/public/step/step-03.svg";
import Image from "next/image";

export default function HumanReview() {
    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-screen-md flex-col justify-center gap-7 md:text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Get Expert Resume Feedback</h2>
                    <p className="text-sm text-muted-foreground md:text-base">
                        Enhance your resume with personalized feedback from our HR specialists. We simplify the process of improving your resume, ensuring it stands out to potential employers.
                    </p>
                    <p className="text-sm text-muted-foreground md:text-base">
                        *Feedback is provided within 2-3 business days.
                    </p>
                </div>
                <div className="mx-auto mt-14 flex max-w-screen-lg flex-col gap-4 lg:px-16">
                    {/* Step 1: Upload Your Resume */}
                    <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
                        <div className="flex gap-4 min-[960px]:max-w-md">
                            <div className="flex flex-col items-center justify-between gap-1">
                                <span className="h-20 shrink-0"></span>
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">1</span>
                                <span className="h-20 w-[3px] shrink-0 bg-gradient-to-b from-transparent to-primary opacity-70"></span>
                            </div>
                            <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                                <h3 className="text-xl min-[960px]:text-2xl">Upload Your Resume</h3>
                                <p className="text-sm text-muted-foreground min-[960px]:text-base">
                                    Start by uploading your current resume. Our system will securely store it for review by our HR specialists.
                                </p>
                            </div>
                        </div>
                        <Image
                            width={960}
                            height={960}
                            src={StepOne}
                            alt="Upload Resume"
                            className="z-10 aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
                        />
                    </div>

                    {/* Step 2: HR Specialist Review */}
                    <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
                        <div className="flex gap-4 min-[960px]:max-w-md">
                            <div className="relative flex flex-col items-center justify-between gap-1">
                                <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                                <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">2</span>
                                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                            </div>
                            <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                                <h3 className="text-xl min-[960px]:text-2xl">HR Specialist Review</h3>
                                <p className="text-sm text-muted-foreground min-[960px]:text-base">
                                    Our HR specialists will thoroughly review your resume, identifying areas for improvement and providing actionable feedback.
                                </p>
                            </div>
                        </div>
                        <Image
                            width={960}
                            height={960}
                            src={StepSecond}
                            alt="HR Review"
                            className="z-10 max-h-56 w-full rounded-xl border object-cover min-[960px]:aspect-video min-[960px]:w-auto"
                        />
                    </div>

                    {/* Step 3: Receive Feedback */}
                    <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
                        <div className="flex gap-4 min-[960px]:max-w-md">
                            <div className="flex flex-col items-center justify-between gap-1">
                                <span className="h-20 w-[3px] shrink-0 bg-gradient-to-t from-transparent to-primary opacity-70"></span>
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">3</span>
                                <span className="h-20 shrink-0"></span>
                            </div>
                            <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                                <h3 className="text-xl min-[960px]:text-2xl">Receive Feedback</h3>
                                <p className="text-sm text-muted-foreground min-[960px]:text-base">
                                    Within 2-3 days, you'll receive detailed feedback on how to improve your resume, ensuring it's ready to make a great impression.
                                </p>
                            </div>
                        </div>
                        <Image
                            width={960}
                            height={960}
                            src={StepThird}
                            alt="Receive Feedback"
                            className="z-10 max-h-56 w-full rounded-xl border object-cover min-[960px]:aspect-video min-[960px]:w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}