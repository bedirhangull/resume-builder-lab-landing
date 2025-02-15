"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LinkedinLogo from "@/public/job/linkedin.svg";
import IndeedLogo from "@/public/job/indeed.svg";
import GlassdoorLogo from "@/public/job/glassdoor.svg";
import { useEffect, useState } from "react";

export default function Integration() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
          >
            Revolutionize Your Job Search
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Optimize Your Resume for Every Job
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Our AI-powered platform tailors your resume to match job descriptions
            from LinkedIn, Indeed, or Glassdoor. Stand out from the crowd and
            land your dream job.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Button size="lg">
            Coming Soon
          </Button>
        </motion.div>
        <div className="mt-12 md:mt-16 relative">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {[
              { logo: IndeedLogo, name: "Indeed" },
              { logo: LinkedinLogo, name: "LinkedIn" },
              { logo: GlassdoorLogo, name: "Glassdoor" },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-lg">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    layout="fill"
                    objectFit="cover"
                    className="p-2 transition-transform hover:scale-110"
                  />
                </div>
                <span className="text-sm font-medium">{platform.name}</span>
              </motion.div>
            ))}
          </div>
          {!isMobile && <IntegrationLines />}
        </div>
      </div>
    </section>
  );
}

function IntegrationLines() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 0 50 Q 25 0, 50 50 T 100 50"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 0 50 Q 25 100, 50 50 T 100 50"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}