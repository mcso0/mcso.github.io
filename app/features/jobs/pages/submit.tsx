import type { MetaFunction } from "react-router";
import type { Route } from "./+types/submit";

interface JobFormData {
  company: string;
  title: string;
  description: string;
  requirements: string;
  salaryMin: string;
  salaryMax: string;
  employmentType: string;
  workType: string;
  location: string;
  applicationMethod: string;
  applicationContact: string;
  deadline: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit a Job | wemake" },
    { name: "description", content: "Submit a job to our community" },
  ];
};

export function loader() {
  return {
    employmentTypes: [
      "Full-time",
      "Part-time",
      "Contract",
      "Internship",
      "Freelance",
    ],
    workTypes: ["Remote", "On-site", "Hybrid", "Flexible"],
    applicationMethods: [
      "Email",
      "Application Link",
      "Company Website",
      "LinkedIn",
    ],
  };
}

export function action({ request }: Route.ActionArgs) {
  // Handle form submission
  // In a real app, this would save to database
  return { success: true, message: "Job posted successfully!" };
}

export default function SubmitJob({ loaderData }: Route.ComponentProps) {
  const { employmentTypes, workTypes, applicationMethods } =
    loaderData as unknown as {
      employmentTypes: string[];
      workTypes: string[];
      applicationMethods: string[];
    };

  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Submit a Job
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Submit a job to our community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form method="post" className="space-y-8">
            {/* Company Information */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Company Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="e.g., wemake Inc."
                    className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g., Seoul, Korea"
                    className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Job Information */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Job Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g., Senior Frontend Developer"
                  className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Employment Type *
                  </label>
                  <select
                    name="employmentType"
                    required
                    className="w-full px-4 py-3 border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select employment type</option>
                    {employmentTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Work Type *
                  </label>
                  <select
                    name="workType"
                    required
                    className="w-full px-4 py-3 border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select work type</option>
                    {workTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Job Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={6}
                  placeholder="Describe the role, responsibilities, and what makes this position exciting..."
                  className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Requirements *
                </label>
                <textarea
                  name="requirements"
                  required
                  rows={4}
                  placeholder="List the required skills, experience, and qualifications..."
                  className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Compensation */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Compensation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Salary Range (Min) *
                  </label>
                  <input
                    type="text"
                    name="salaryMin"
                    required
                    placeholder="e.g., $60,000"
                    className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Salary Range (Max) *
                  </label>
                  <input
                    type="text"
                    name="salaryMax"
                    required
                    placeholder="e.g., $80,000"
                    className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Application Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Application Method *
                  </label>
                  <select
                    name="applicationMethod"
                    required
                    className="w-full px-4 py-3 border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select application method</option>
                    {applicationMethods.map(method => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    className="w-full px-4 py-3 border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Application Contact *
                </label>
                <input
                  type="text"
                  name="applicationContact"
                  required
                  placeholder="e.g., careers@wemake.com or https://apply.wemake.com"
                  className="w-full px-4 py-3 border bg-background text-foreground placeholder:text-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground py-3 px-8 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Post Job
              </button>
              <button
                type="button"
                className="border text-foreground py-3 px-8 rounded-lg font-semibold hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Save Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
