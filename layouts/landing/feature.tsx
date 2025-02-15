import Image from 'next/image';
import { Gem, DatabaseZap, Wrench, BadgeCheck, Handshake, Sparkles, ScanEye } from "lucide-react"
import FeatureImage01 from '@/public/images/feature-post-01.svg';
import FeatureImage02 from '@/public/images/feature-post-02.svg';
import FeatureImage03 from '@/public/images/feature-post-03.svg';
import FeatureImage04 from '@/public/images/feature-post-04.svg';
import FeatureImage05 from '@/public/images/feature-post-05.svg';
import FeatureImage06 from '@/public/images/feature-post-06.svg';
import FeatureImage07 from '@/public/images/feature-post-07.svg';

export default function Features() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-bold text-3xl md:text-4xl text-zinc-900 mb-4">
              Build Your Perfect Resume with AI-Powered Features
            </h2>
            <p className="text-lg text-zinc-500">
              Create professional, ATS-friendly resumes and cover letters in minutes. Our resume builder is designed to help you land your dream job effortlessly.
            </p>
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 lg:gap-4">

            {/* Feature 1: Suggestions for Each Job Advert */}
            <article className="sm:col-span-2 flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Gem className='text-zinc-400 w-5 h-5' />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Privatized Suggestions</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Get personalized resume suggestions for each job advert from LinkedIn, Indeed, and Glassdoor.
                </p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage01} width={721} height={280} alt="Tailored Suggestions" />
              </figure>
            </article>

            {/* Feature 2: Resumes are Safe */}
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <DatabaseZap className='text-zinc-400 h-5 w-5' />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Resumes are Safe</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Your data is protected with advanced encryption. We ensure your resumes and personal information are secure and private.
                </p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage02} width={342} height={280} alt="Secure Resumes" />
              </figure>
            </article>

            {/* Feature 3: Build Easy Online Resume */}
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Wrench className='text-zinc-400 w-5 h-5' />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Easy Online Resume</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Create, edit, and download your resume online in minutes. No software or design skills required.
                </p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage07} width={342} height={280} alt="Online Resume Builder" />
              </figure>
            </article>

            {/* Feature 4: Approved Templates */}
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <BadgeCheck className='text-zinc-400 w-5 h-5' />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Approved Templates</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Choose from professionally designed, ATS-approved templates that are tailored to your industry and job role.
                </p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage03} width={342} height={280} alt="Approved Templates" />
              </figure>
            </article>

            {/* Feature 5: ATS Friendly */}
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Handshake className='text-zinc-400 h-5 w-5' />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">ATS Friendly</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Optimize your resume for Applicant Tracking Systems (ATS) to ensure it gets noticed by recruiters.
                </p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage06} width={342} height={280} alt="ATS Friendly Resumes" />
              </figure>
            </article>

            {/* Feature 6: Cover Letter Generator */}
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <Sparkles className='text-zinc-400 h-5 w-5' />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">AI Cover Letters</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Generate professional cover letters tailored to your job application using AI.
                </p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage05} width={342} height={280} alt="AI Cover Letters" />
              </figure>
            </article>

            {/* Feature 7: Review from Humans */}
            <article className="flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <div className="grow flex flex-col p-5 pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <ScanEye className='text-zinc-400 h-5 w-5' />
                  <h3 className="font-inter-tight font-semibold text-zinc-900">Expert Reviews</h3>
                </div>
                <p className="grow max-w-md text-sm text-zinc-500">
                  Get expert feedback from professional resume reviewers to ensure your resume stands out to employers.
                </p>
              </div>
              <figure>
                <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage04} width={342} height={280} alt="Expert Reviews" />
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}