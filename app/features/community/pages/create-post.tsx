import type { MetaFunction } from "react-router";


export const meta: MetaFunction = () => {
  return [
    { title: "Create Post | wemake Community" },
    {
      name: "description",
      content: "Share your thoughts with the wemake community",
    },
  ];
};

export function loader() {
  return {};
}

export function action() {
  // Handle post creation
  return { success: true };
}

export default function CreatePost() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Create New Post
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Share your thoughts with the wemake community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Post Title
              </label>
              <input
                type="text"
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select a category</option>
                <option value="general">General Discussion</option>
                <option value="tech">Technology</option>
                <option value="career">Career</option>
                <option value="startup">Startup</option>
                <option value="design">Design</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <textarea
                placeholder="Write your post content here..."
                rows={10}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Publish Post
              </button>
              <button
                type="button"
                className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
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
