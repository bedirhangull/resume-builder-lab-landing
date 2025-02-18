// components/newsletter-sticky.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { MailIcon } from "lucide-react";
import { useState } from "react";

function NewsletterSticky() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.post("/api/mail-subscription", { email });
            toast({
                title: "Success!",
                description: "You've been subscribed to our newsletter.",
            });
            setEmail("");
        } catch (error) {
            toast({
                title: "Error",
                description:
                    axios.isAxiosError(error) && error.response?.data?.error
                        ? error.response.data.error
                        : "Failed to subscribe. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed top-14 left-0 right-0 p-4 z-50 bg-blue-600 text-background">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <p className="text-lg font-medium text-center md:text-left">
                    Subscribe to our newsletter for exclusive offers and updates! 🎉
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-64">
                        <Label htmlFor="email-sticky" className="sr-only">
                            Your email address
                        </Label>
                        <Input
                            id="email-sticky"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full placeholder:text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="secondary"
                        disabled={isLoading}
                        className="w-full md:w-auto"
                    >
                        <MailIcon className="mr-2 h-4 w-4" />
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default NewsletterSticky;