import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("common/pages/home.tsx"),
  route("users", "features/users/pages/users.tsx"),
] satisfies RouteConfig;
