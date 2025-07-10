import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Teams | wemake" },
    { name: "description", content: "Find teams or start building together" },
  ];
}

export function loader() {
  return {
    teams: Array.from({ length: 9 }, (_, index) => ({
      id: `team-${index + 1}`,
      leaderName: [
        "Alex",
        "Sarah",
        "Mike",
        "Emma",
        "David",
        "Lisa",
        "John",
        "Anna",
        "Tom",
      ][index],
      leaderAvatarUrl: `https://github.com/${
        [
          "octocat",
          "defunkt",
          "mojombo",
          "pjhyett",
          "wycats",
          "technoweenie",
          "evanphx",
          "vanpelt",
          "wayneeseguin",
        ][index]
      }.png`,
      leaderAvatarFallback: ["A", "S", "M", "E", "D", "L", "J", "A", "T"][
        index
      ],
      positions: [
        ["React Developer", "Backend Developer"],
        ["ML Engineer", "Data Scientist", "Full-stack Developer"],
        ["Blockchain Developer", "Security Engineer", "Mobile Developer"],
        ["Game Developer", "3D Artist", "Sound Designer"],
        ["Healthcare Developer", "Medical Advisor", "Compliance Manager"],
        ["Frontend Developer", "Education Specialist", "QA Engineer"],
        ["DevOps Engineer", "Cloud Architect"],
        ["UI/UX Designer", "Product Manager"],
        ["iOS Developer", "Android Developer", "React Native Developer"],
      ][index],
      projectDescription: [
        "a new social media platform",
        "an AI-powered productivity tool",
        "a decentralized finance platform",
        "an indie multiplayer game",
        "a telemedicine application",
        "an online learning platform",
        "a cloud infrastructure tool",
        "a design collaboration platform",
        "a cross-platform mobile app",
      ][index],
    })),
  };
}

export default function Teams() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Teams
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find teams or start building together
          </p>
        </div>
      </div>
    </div>
  );
}
