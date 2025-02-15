import React from 'react';
import PageWrapper from '@/components/ui/wrapper';
import Features from "@/layouts/landing/feature";
import Hero from "@/layouts/landing/hero";
import Hired from "@/layouts/landing/hired";
import Review from "@/layouts/landing/review";
import Human from "@/layouts/landing/human";
import Approved from "@/layouts/landing/approved";
import Integration from "@/layouts/landing/integration";
import Cover from "@/layouts/landing/cover";
import Resume from "@/layouts/landing/resume";
import Faq from "@/layouts/landing/faq";
import Stats from "@/layouts/landing/stats";
import Footer from "@/layouts/landing/footer";
import { Navbar } from "@/components/ui/navbar";

export default function Page() {
  return (
    <PageWrapper landing={true}>
      <Navbar />
      <Hero />
      <Hired />
      <Review />
      <Features />
      <Approved />
      <Human />
      <Cover />
      <Integration />
      <Resume />
      {/* <Blog /> */}
      <Faq />
      {/* <News /> */}
      <Stats />
      <Footer />
    </PageWrapper>
  );
}