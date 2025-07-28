import type { Route } from "./+types/job";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { DotIcon } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Job Detail | wemake" },
    { name: "description", content: "Job details" },
  ];
};

export default function JobPage() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg"></div>
      <div className="grid grid-cols-6 gap-20 items-start -mt-20">
        <div className="col-span-4 space-y-8">
          {/* Company Logo */}
          <div className="size-40 bg-white overflow-hidden rounded-full relative left-10 overflow-hidden">
            <img
              src="https://github.com/facebook.png"
              alt="facebook logo"
              className="relative object-cover size-full"
            />
          </div>
          {/* Job Title and Company */}
          <div className="flex flex-col gap-2 items-start space-y-4">
            <div className="flex flex-col gap-2 items-start">
              <h1 className="text-4xl font-bold">Software Engineer</h1>
              <h4 className="text-sm text-muted-foreground">Meta.Inc</h4>
            </div>
            {/* Job Type */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Full-time</Badge>
              <Badge variant="secondary">Remote</Badge>
            </div>
          </div>
          {/* Overview */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-xl font-bold">Overview</h4>
            <p className="text-sm text-muted-foreground">
              We are looking for a Full-time Remote Software Engineer to join
              our team. You will be responsible for building and maintaining our
              web application.
            </p>
          </div>
          {/* Responsibilities */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-xl font-bold">Responsibilities</h4>
            <ul className="text-sm list-disc list-inside space-y-2.5 text-muted-foreground">
              {[
                "Build and maintain our web application",
                "Implement new features and improve existing ones",
                "Optimize the application for maximum speed and scalability",
                "Ensure the security and reliability of the application",
                "Collaborate with other developers and stakeholders to deliver high-quality software",
              ].map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
          {/* Qualifications */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-xl font-bold">Qualifications</h4>
            <ul className="text-sm list-disc list-inside space-y-2.5 text-muted-foreground">
              {[
                "Bachelor's degree in Computer Science or a related field",
                "3+ years of experience in software development",
                "Strong understanding of web development technologies",
                "Experience with React and Node.js",
                "Experience with TypeScript and JavaScript",
              ].map((qualification, idx) => (
                <li key={idx}>{qualification}</li>
              ))}
            </ul>
          </div>
          {/* Benefits */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-xl font-bold">Benefits</h4>
            <ul className="text-sm list-disc list-inside space-y-2.5 text-muted-foreground">
              {[
                "Health insurance",
                "Dental insurance",
                "Vision insurance",
                "401(k) plan",
                "Paid time off",
              ].map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
          {/* Skills */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-xl font-bold">Skills</h4>
            <ul className="text-sm list-disc list-inside space-y-2.5 text-muted-foreground">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Git",
                "Docker",
                "Kubernetes",
              ].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Sidebar */}
        <div className="col-span-2 mt-32 sticky top-28 p-6 border rounded-lg self-start space-y-6">
          {/* Salary */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Avg. Salary</span>
            <span className="text-xl font-medium">$100,000 - $120,000</span>
          </div>
          {/* Location */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-xl font-medium">Remote</span>
          </div>
          {/* Job Type */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Job Type</span>
            <span className="text-xl font-medium">Full-time</span>
          </div>
          {/* Company Description */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              Company Description
            </span>
            <span className="text-xl font-medium">
              We are a software development company that specializes in building
              web applications.
            </span>
          </div>
          {/* Posted Date */}
          <div className="flex flex-wrap gap-0.5 items-center">
            <small className="text-sm text-muted-foreground">
              Posted 2 days ago
            </small>
            <DotIcon className="size-4 text-muted-foreground" />
            <small className="text-sm text-muted-foreground">347 views</small>
          </div>
          <Button className="w-full hover:cursor-pointer" size="lg">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
