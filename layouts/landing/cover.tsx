import { Button } from "@/components/ui/button"
import { Sparkle, Fullscreen, FileClock, Handshake } from "lucide-react"
export default function Cover() {
    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container">
                <div className="grid items-center gap-20 md:grid-cols-2">
                    <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
                        <h1 className="text-3xl font-bold md:text-5xl">Craft the Perfect Cover Letter with Ease</h1>
                        <p className="text-muted-foreground md:text-lg">Generate tailored cover letters instantly with AI or customize them manually.</p>
                        <Button size="lg">
                            Coming Soon
                        </Button>
                        <div className="grid grid-cols-2 justify-between gap-4 pt-10 text-left md:gap-20">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-3xl font-semibold md:text-5xl">85%</h2>
                                <p className="text-muted-foreground md:text-lg">Success Rate</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-3xl font-semibold md:text-5xl">25k+</h2>
                                <p className="text-muted-foreground md:text-lg">Happy Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden  sm:grid gap-4 md:gap-7 lg:grid-cols-2">
                        <div className="pointer-events-none relative lg:hidden" role="region" aria-roledescription="carousel">
                            <div className="overflow-hidden">
                                <div className="flex -mt-4 flex-col max-h-[600px]" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4" style={{ transform: 'translate3d(0px, 1472px, 0px)' }}>
                                        <div className="flex flex-col rounded-xl border p-5 md:p-7">
                                            <Handshake width={24} height={24} />
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">User-Friendly</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">We make sure that our platform is easy to use.</p>
                                        </div>
                                    </div>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4" style={{ transform: 'translate3d(0px, 1472px, 0px)' }}>
                                        <div className="flex flex-col rounded-xl border p-5 md:p-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-auto w-8 md:w-12">
                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                            </svg>
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">Fast Generation</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">Generate cover letters in seconds, not hours.</p>
                                        </div>
                                    </div>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4" style={{ transform: 'translate3d(0px, 1472px, 0px)' }}>
                                        <div className="flex flex-col rounded-xl border p-5 md:p-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-messages-square h-auto w-8 md:w-12">
                                                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path>
                                                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                                            </svg>
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">24/7 Support</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">We are always here to help you. Reach out to us.</p>
                                        </div>
                                    </div>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4" style={{ transform: 'translate3d(0px, 1472px, 0px)' }}>
                                        <div className="flex flex-col rounded-xl border p-5 md:p-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search h-auto w-8 md:w-12">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">Job Advert Analysis</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">Our AI analyzes job adverts to create relevant cover letters.</p>
                                        </div>
                                    </div>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4">
                                        <div className="flex flex-col rounded-xl border p-5 md:p-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-auto w-8 md:w-12">
                                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">Secure</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">We take security seriously. Your data is safe with us.</p>
                                        </div>
                                    </div>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4">
                                        <div className="flex flex-col rounded-xl border p-5 md:p-7">
                                            <Sparkle width={48} height={48} />
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">AI-Powered</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">Generate cover letters tailored to each job advert using AI.</p>                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
                        </div>
                        <div className="pointer-events-none relative hidden lg:block" role="region" aria-roledescription="carousel">
                            <div className="overflow-hidden">
                                <div className="flex -mt-4 flex-col max-h-[600px]" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4">
                                        <div className="flex flex-col rounded-xl border p-4 md:p-7">
                                            <Sparkle width={48} height={48} />
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">AI-Powered</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">Generate cover letters tailored to each job advert using AI.</p>
                                        </div>
                                    </div>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4">
                                        <div className="flex flex-col rounded-xl border p-4 md:p-7">
                                            <FileClock width={48} height={48} />
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">Fast Generation</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">Generate cover letters in seconds, not hours.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
                        </div>
                        <div className="pointer-events-none relative hidden lg:block" role="region" aria-roledescription="carousel">
                            <div className="overflow-hidden">
                                <div className="flex -mt-4 flex-col max-h-[600px]" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4">
                                        <div className="flex flex-col rounded-xl border p-4 md:p-7">
                                            <Fullscreen width={48} height={48} />
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">Job Advert Analysis</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">Our AI analyzes job adverts to create relevant cover letters.</p>
                                        </div>
                                    </div>
                                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pt-4">
                                        <div className="flex flex-col rounded-xl border p-4 md:p-7">
                                            <Handshake width={48} height={48} />
                                            <h3 className="mb-2.5 mt-5 font-semibold md:text-xl">User-Friendly</h3>
                                            <p className="text-sm text-muted-foreground md:text-base">We make sure that our platform is easy to use.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}