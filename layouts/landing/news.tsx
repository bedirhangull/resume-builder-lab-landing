import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MailIcon,
  BookOpenIcon,
  BriefcaseIcon,
  LightbulbIcon,
  HeartIcon,
  GlobeIcon,
} from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-4 md:py-12 lg:py-16">
      <div className="relative overflow-hidden">
        <div className="container py-24 lg:py-32">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Subscribe to Our Newsletter
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Get the latest insights, tips, and updates delivered straight to your inbox.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* Newsletter Signup Form */}
              <form>
                <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                  <div className="flex-[1_0_0%]">
                    <Label htmlFor="email" className="sr-only">
                      Your email address
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      className="h-full"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Button type="submit" size={"icon"}>
                      <MailIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </form>
              {/* End Newsletter Signup Form */}

              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-blue-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}

              {/* SVG Element */}
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-green-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>

            {/* Newsletter Categories */}
            <div className="mt-10 sm:mt-20 flex flex-wrap gap-2 justify-center">
              <Button variant={"outline"}>
                <BriefcaseIcon className="flex-shrink-0 w-4 h-auto mr-2" />
                Career Tips
              </Button>
              <Button variant={"outline"}>
                <LightbulbIcon className="flex-shrink-0 w-4 h-auto mr-2" />
                Productivity
              </Button>
              <Button variant={"outline"}>
                <HeartIcon className="flex-shrink-0 w-4 h-auto mr-2" />
                Wellbeing
              </Button>
              <Button variant={"outline"}>
                <GlobeIcon className="flex-shrink-0 w-4 h-auto mr-2" />
                Global Trends
              </Button>
              <Button variant={"outline"}>
                <BookOpenIcon className="flex-shrink-0 w-4 h-auto mr-2" />
                Industry News
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}