import {
  index,
  layout,
  route,
  prefix,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home.tsx"),
  // Products
  ...prefix("products", [
    index("features/products/pages/products.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboards.tsx"),
      route("/yearly/:year", "features/products/pages/yearly-leaderboards.tsx"),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboards.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboards.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboards.tsx"
      ),
      route("/:period", "features/products/pages/leaderboards-redirection.tsx"),
    ]),

    ...prefix("categories", [
      index("features/products/pages/categories.tsx"),
      route("/:category", "features/products/pages/category.tsx"),
    ]),

    route("/search", "features/products/pages/search.tsx"),
    route("/submit", "features/products/pages/submit.tsx"),
    route("/promote", "features/products/pages/promote.tsx"),

    ...prefix("/:productId", [
      index("features/products/pages/redirect-product.tsx"),
      layout("features/products/layouts/product-overview-layout.tsx", [
        route("/overview", "features/products/pages/product-overview.tsx"),
        ...prefix("reviews", [
          index("features/products/pages/product-reviews.tsx"),
        ]),
      ]),
    ]),
  ]),
  // Jobs
  ...prefix("/jobs", [
    index("features/jobs/pages/jobs.tsx"),
    route("/:jobId", "features/jobs/pages/job.tsx"),
    route("/submit", "features/jobs/pages/submit-job.tsx"),
  ]),
  // Community
  ...prefix("community", [
    index("features/community/pages/community.tsx"),
    route("/top", "features/community/pages/top-posts.tsx"),
    route("/new", "features/community/pages/new-posts.tsx"),
    route("/create", "features/community/pages/create-post.tsx"),
  ]),
  // Ideas
  ...prefix("/ideas", [
    index("features/ideas/pages/ideas.tsx"),
    route("/:ideaId", "features/ideas/pages/idea.tsx"),
  ]),
  // Teams
  ...prefix("/teams", [
    index("features/teams/pages/teams.tsx"),
    route("/create", "features/teams/pages/create-team.tsx"),
  ]),
] satisfies RouteConfig;
