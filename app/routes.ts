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
    index("features/products/pages/products.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboards.tsx"),
      route("/yearly/:year", "features/products/pages/yearly-leaderboards.tsx"),
      route("/monthly/:year/:month", "features/products/pages/monthly-leaderboards.tsx"),
      route("/weekly/:year/:week", "features/products/pages/weekly-leaderboards.tsx"),
      route("/daily/:year/:month/:day", "features/products/pages/daily-leaderboards.tsx"),
      route("/:period", "features/products/pages/leaderboards-redirection.tsx"),
    ]),
    
    ...prefix("categories", [
      index("features/products/pages/categories.tsx"),
      route("/:category", "features/products/pages/category.tsx"),
    ]),
    route("/search", "features/products/pages/search.tsx"),
    route("/submit", "features/products/pages/submit.tsx"),
    route("/promote", "features/products/pages/promote.tsx"),
  ]),
  // Jobs
  ...prefix("jobs", [
    index("features/jobs/pages/jobs.tsx"),
    // route("/remote", "features/jobs/pages/remote-jobs.tsx"),
    // route("/full-time", "features/jobs/pages/full-time-jobs.tsx"),
    // route("/freelance", "features/jobs/pages/freelance-jobs.tsx"),
    // route("/internship", "features/jobs/pages/internship-jobs.tsx"),
    route("/submit", "features/jobs/pages/submit.tsx"),
  ]),
  // Community
  ...prefix("community", [
    index("features/community/pages/community.tsx"),
    route("/top", "features/community/pages/top-posts.tsx"),
    route("/new", "features/community/pages/new-posts.tsx"),
    route("/create", "features/community/pages/create-post.tsx"),
  ]),
  // Ideas
  ...prefix("ideas", [index("features/ideas/pages/ideas.tsx")]),
  // Teams
  ...prefix("teams", [
    index("features/teams/pages/teams.tsx"),
    route("/create", "features/teams/pages/create-team.tsx"),
  ]),
] satisfies RouteConfig;
