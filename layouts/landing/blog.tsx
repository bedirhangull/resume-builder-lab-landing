import Image from "next/image";
export default function BlogPosts() {
    const blogPosts = [
        {
            id: 1,
            title: "10 Tips for Writing a Great Resume",
            description: "Learn how to craft a resume that stands out to employers and lands you interviews.",
            image: "/images/blog1.jpg",
        },
        {
            id: 2,
            title: "How to Tailor Your Resume for Different Jobs",
            description: "Discover the best practices for customizing your resume for specific job applications.",
            image: "/images/blog2.jpg",
        },
        {
            id: 3,
            title: "The Ultimate Guide to Resume Formats",
            description: "Understand the differences between chronological, functional, and hybrid resume formats.",
            image: "/images/blog3.jpg",
        },
    ];

    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container">
                <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6 text-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Articles</div>
                    <h1 className="text-balance text-4xl font-semibold">Master the Art of Resume Building</h1>
                    <p className="text-muted-foreground">Explore our blog for expert advice, actionable tips, and insights to create a resume that gets noticed.</p>
                    <a href="#" className="flex items-center gap-1 text-sm font-semibold">
                        See All Our Blog Posts
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-full w-4">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </a>
                </div>
                <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col">
                        <div className="relative">
                            <Image width={600} height={400} src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="placeholder" className="aspect-video w-full rounded-lg object-cover" />
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 absolute right-4 top-4 bg-background/70 px-3 py-1 text-sm backdrop-blur-sm">Tips about Resume</div>
                        </div>
                        <div className="flex h-full flex-col justify-between my-2">
                            <h2 className="mb-5 text-xl font-semibold">10 Tips for Crafting a Standout Resume</h2>
                            <div className="flex justify-between gap-6 text-sm">
                                <span className="flex items-center gap-1 text-muted-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                    September, 23, 2024
                                </span>
                                <a href="#" className="flex items-center gap-1">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-full w-3">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="relative">
                            <Image width={600} height={400} src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&amp;w=2022&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="placeholder" className="aspect-video w-full rounded-lg object-cover" />
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 absolute right-4 top-4 bg-background/70 px-3 py-1 text-sm backdrop-blur-sm">Customize Resume</div>
                        </div>
                        <div className="flex h-full flex-col justify-between my-2">
                            <h2 className="mb-5 text-xl font-semibold">How to Customize Your Resume for Different Roles</h2>
                            <div className="flex justify-between gap-6 text-sm">
                                <span className="flex items-center gap-1 text-muted-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                    April, 07, 2024
                                </span>
                                <a href="#" className="flex items-center gap-1">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-full w-3">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="relative">
                            <Image width={600} height={400} src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&amp;w=1951&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="placeholder" className="aspect-video w-full rounded-lg object-cover" />
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 absolute right-4 top-4 bg-background/70 px-3 py-1 text-sm backdrop-blur-sm">Resume Format</div>
                        </div>
                        <div className="flex h-full flex-col justify-between my-2">
                            <h2 className="mb-5 text-xl font-semibold">The Ultimate Guide to Choosing the Right Resume Format</h2>
                            <div className="flex justify-between gap-6 text-sm">
                                <span className="flex items-center gap-1 text-muted-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                    August, 31, 2024
                                </span>
                                <a href="#" className="flex items-center gap-1">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-full w-3">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}