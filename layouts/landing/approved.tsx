import Image from "next/image";
import ApprovedImage from "@/public/approved/approved-section-01.svg"
import { FileCheck, ScanFace, Gem, FilePen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Approved() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div className="lg:max-w-md">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent">
              <FileCheck size={24} className="text-blue-600" />
            </span>
            <h1 className="mb-2 mt-8 text-pretty text-2xl font-bold lg:text-4xl">
              Professionally Designed, ATS-Friendly Templates
            </h1>
            <p className="mb-5 text-muted-foreground">
              Choose from a variety of industry-approved resume templates that are optimized for Applicant Tracking Systems (ATS). Create a resume that stands out and gets you noticed by recruiters.
            </p>
            <Button size="lg">
              Coming Soon
            </Button>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full my-7"
            ></div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <ScanFace size={24} className="text-blue-600" />
                <p className="font-bold">ATS-Optimized Templates</p>
              </li>
              <li className="flex items-center gap-3">
                <Gem size={24} className="text-blue-600" />
                <p className="font-bold">Privatized Suggestions</p>
              </li>
              <li className="flex items-center gap-3">
                <FilePen size={24} className="text-blue-600" />
                <p className="font-bold">Easy Online Editing</p>
              </li>
            </ul>
          </div>
          <Image
            width={960}
            height={960}
            src={ApprovedImage}
            alt="placeholder"
            className="max-h-96 w-full rounded-lg object-cover lg:max-h-none lg:w-1/2"
          />
        </div>
      </div>
    </section>
  );
}