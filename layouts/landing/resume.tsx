import { Button } from '@/components/ui/button'; // Adjust the import path based on your project structure

export default function Resume() {

    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto">
                <div className="flex h-fit items-center gap-2.5 whitespace-nowrap text-lg">
                    <span className="size-3 shrink-0 rounded-full bg-green-500"></span>
                    Get started
                </div>
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
                    <div>
                        <h2 className="mb-11 text-3xl font-bold lg:text-5xl">Quick Resume Setup Guide</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="flex flex-col gap-1 border-l pl-4 pr-4 md:pl-8">
                                <span className="font-mono text-4xl lg:text-7xl">1</span>
                                <h3 className="text-xl font-medium">Select Your Resume Template</h3>
                                <p className="text-sm text-muted-foreground">
                                    Choose from a variety of professionally designed resume templates tailored to your industry and preferences.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 border-l pl-4 pr-4 md:pl-8">
                                <span className="font-mono text-4xl lg:text-7xl">2</span>
                                <h3 className="text-xl font-medium">Generate Your Resume</h3>
                                <p className="text-sm text-muted-foreground">
                                    Use our AI-powered tools to automatically generate a polished resume based on your skills, experience, and job preferences.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 border-l pl-4 pr-4 md:pl-8">
                                <span className="font-mono text-4xl lg:text-7xl">3</span>
                                <h3 className="text-xl font-medium">Apply to Your Dream Job</h3>
                                <p className="text-sm text-muted-foreground">
                                    Download your resume and start applying to your dream jobs with confidence. Our tools ensure your resume stands out to employers.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                Coming Soon
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}