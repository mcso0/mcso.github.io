import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "Explore the categories of products",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a product",
        description: "Submit a product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "Promote a product to our community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find a remote job",
        to: "/jobs?location=remote", // 이 코드는 URL 경로를 지정하는 부분입니다.
        // '/jobs' 페이지로 이동하면서 'location=remote' 라는 쿼리 파라미터를 추가합니다.
        // 예: www.example.com/jobs?location=remote
        // 이를 통해 원격 근무 jobs만 필터링해서 보여줄 수 있습니다.
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time job",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs   ",
        description: "Find a freelance job",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "Find an internship",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a job",
        description: "Submit a job to our community",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create a post",
        description: "Create a post in our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export function Navigation() {
  return (
    <nav
      className="flex px-20 h-16 items-center justify-between
    backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50"
    >
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold text-lg tracking-tight text-primary">
          wemake
        </Link>
        <div className="w-px h-6 mx-4 bg-gray-600/50"></div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {menus.map(menu => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger className="cursor-pointer">
                        {menu.name}
                      </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map(item => (
                          <NavigationMenuItem key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
