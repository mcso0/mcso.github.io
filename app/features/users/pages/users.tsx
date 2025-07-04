import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Users | wemake" },
    {
      name: "description",
      content: "Browse all users in the wemake community",
    },
  ];
};

export function loader() {
  return {
    users: [
      // 예시 데이터
      {
        id: "1",
        username: "lynn",
        avatar: "https://github.com/inthetiger.png",
      },
      { id: "2", username: "alex", avatar: "https://github.com/octocat.png" },
    ],
  };
}

export default function Users() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Users
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Browse all users in the wemake community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loader().users.map((user: any) => (
            <div key={user.id} className="p-4 border rounded-lg">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-lg font-semibold mt-2">@{user.username}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
