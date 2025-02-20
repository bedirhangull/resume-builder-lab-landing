"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ConsentBanner() {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
        // Add your cookie acceptance logic here
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in fade-in-0 slide-in-from-bottom-16 duration-300">
            <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-background p-4 shadow-lg ring-1 ring-foreground/10">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-foreground">
                                We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                            </p>
                            <Link
                                href="/cookie-policy"
                                className="text-sm underline underline-offset-4 hover:text-primary"
                            >
                                Learn more
                            </Link>
                        </div>

                        <div className="flex w-full items-center gap-2 md:w-auto">
                            <Button
                                variant="outline"
                                className="w-full md:w-auto"
                                onClick={() => console.log('Manage preferences')}
                            >
                                Preferences
                            </Button>
                            <Button
                                className="w-full md:w-auto"
                                onClick={handleAccept}
                            >
                                Accept all
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsentBanner;