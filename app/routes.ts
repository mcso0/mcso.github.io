import {
  index,
  layout,
  route,
  prefix,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home.tsx"),
  route("users", "features/users/pages/users.tsx"),
  // Products
  ...prefix("products", [
    route("/", "features/products/pages/products.tsx"),
    route("/leaderboards", "features/products/pages/leaderboards.tsx"),
    route("/categories", "features/products/pages/categories.tsx"),
    route("/search", "features/products/pages/search.tsx"),
    route("/submit", "features/products/pages/submit.tsx"),
    route("/promote", "features/products/pages/promote.tsx"),
  ]),
  // Jobs
  ...prefix("jobs", [
    route("/", "features/jobs/pages/jobs.tsx"),
    // route("/remote", "features/jobs/pages/remote-jobs.tsx"),
    // route("/full-time", "features/jobs/pages/full-time-jobs.tsx"),
    // route("/freelance", "features/jobs/pages/freelance-jobs.tsx"),
    // route("/internship", "features/jobs/pages/internship-jobs.tsx"),
    route("/submit", "features/jobs/pages/submit.tsx"),
  ]),
  // Community
  ...prefix("community", [
    route("/", "features/community/pages/community.tsx"),
    route("/top", "features/community/pages/top-posts.tsx"),
    route("/new", "features/community/pages/new-posts.tsx"),
    route("/create", "features/community/pages/create-post.tsx"),
  ]),
  // Ideas
  ...prefix("ideas", [route("/", "features/ideas/pages/ideas.tsx")]),
  // Teams
  ...prefix("teams", [
    route("/", "features/teams/pages/teams.tsx"),
    route("/create", "features/teams/pages/create-team.tsx"),
  ]),
] satisfies RouteConfig;
