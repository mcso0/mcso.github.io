import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home.tsx"),
    route("users", "features/users/pagse/users.tsx"),
] satisfies RouteConfig;
