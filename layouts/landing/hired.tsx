'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Hired() {
    const companies = [
        { logo: "/icons/google.svg", alt: "Google" },
        { logo: "/icons/pwc.svg", alt: "PwC" }, // Big 4
        { logo: "/icons/microsoft.svg", alt: "Microsoft" },
        { logo: "/icons/deloitte.svg", alt: "Deloitte" }, // Big 4
        { logo: "/icons/apple.svg", alt: "Apple" },
        { logo: "/icons/netflix.svg", alt: "Netflix" },
        { logo: "/icons/ey.svg", alt: "EY" }, // Big 4
        { logo: "/icons/amazon.svg", alt: "Amazon" },
        { logo: "/icons/ups.svg", alt: "UPS" }, // Cargo
        { logo: "/icons/kpmg.svg", alt: "KPMG" }, // Big 4
        { logo: "/icons/fedex.svg", alt: "FedEx" }, // Cargo 
        { logo: "/icons/facebook.svg", alt: "Facebook" },
    ];

    return (
        <section className="py-6 md:py-16 lg:py-24">
            <div className="container  px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                    Our customers have been hired at these companies
                </h2>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={6}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full"
                >
                    {companies.map((company, index) => (
                        <SwiperSlide
                            key={index}>
                            <div className="flex items-center justify-center w-64 h-64">
                                <Image
                                    src={company.logo}
                                    alt={company.alt}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}