import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ResumePreviewProps {
  personalDetails: {
    fullName: string;
    phone: string;
    address: string;
  };
  professionalSummary: string;
  socialMediaLinks: { name: string; link: string }[];
  employmentHistory: Employment[];
  education: Education[];
  skills: string[];
  courses: Course[];
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  personalDetails,
  professionalSummary,
  socialMediaLinks,
  employmentHistory,
  education,
  skills,
  courses,
}) => {
  return (
    <div className="w-full h-[80vh] overflow-y-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16">
          <AvatarImage src="" alt={personalDetails.fullName} />
          <AvatarFallback>{personalDetails.fullName[0] || "👤"}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{personalDetails.fullName || "Your Name"}</h1>
          <p className="text-muted-foreground">{personalDetails.phone}</p>
          <p className="text-muted-foreground">{personalDetails.address}</p>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-muted-foreground">
          {professionalSummary || "Add a professional summary to highlight your career goals and achievements."}
        </p>
      </div>

      {/* Social Media Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>
        <div className="flex flex-wrap gap-2">
          {socialMediaLinks.length > 0 ? (
            socialMediaLinks.map((link, index) => (
              <Badge key={index} variant="outline">
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </Badge>
            ))
          ) : (
            <p className="text-muted-foreground">No social media links added.</p>
          )}
        </div>
      </div>

      {/* Employment History */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Employment History</h2>
        {employmentHistory.length > 0 ? (
          employmentHistory.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-muted-foreground">
                {job.company} • {job.startDate} - {job.endDate}
              </p>
              <p className="text-muted-foreground">{job.description}</p>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">No employment history added.</p>
        )}
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">
                {edu.institution} • {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">No education added.</p>
        )}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <Badge key={index} variant="outline">
                {skill}
              </Badge>
            ))
          ) : (
            <p className="text-muted-foreground">No skills added.</p>
          )}
        </div>
      </div>

      {/* Courses and Certificates */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Courses and Certificates</h2>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="text-muted-foreground">{course.date}</p>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">No courses or certificates added.</p>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;