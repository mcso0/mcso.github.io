import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Create Team | wemake" },
    { name: "description", content: "Start building your dream team" },
  ];
}

export function loader() {
  return {};
}

export function action() {
  // Handle team creation
  return { success: true };
}

export default function CreateTeam() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Create New Team
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Start building your dream team for your next project
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Name
              </label>
              <input
                type="text"
                placeholder="What's your project called?"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Description
              </label>
              <textarea
                placeholder="Describe your project idea..."
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Looking For
              </label>
              <input
                type="text"
                placeholder="Frontend Developer, UI Designer, Backend Engineer..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Separate roles with commas
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Category
              </label>
              <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select a category</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="ai">AI/ML</option>
                <option value="blockchain">Blockchain</option>
                <option value="gaming">Gaming</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Stage
              </label>
              <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select current stage</option>
                <option value="idea">Just an idea</option>
                <option value="planning">Planning phase</option>
                <option value="development">In development</option>
                <option value="testing">Testing phase</option>
                <option value="launch">Ready to launch</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create Team
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
