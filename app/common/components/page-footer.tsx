import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  MessageCircle,
  Mail,
  ExternalLink,
  Github,
  Twitter,
  Icon,
} from "lucide-react";

const footerSections = [
  {
    title: "Products",
    links: [
      { name: "Leaderboards", href: "/products/leaderboards" },
      { name: "Categories", href: "/products/categories" },
      { name: "Search", href: "/products/search" },
      { name: "Submit Product", href: "/products/submit" },
      { name: "Promote", href: "/products/promote" },
    ],
  },
  {
    title: "Jobs",
    links: [
      { name: "Remote Jobs", href: "/jobs?location=remote" },
      { name: "Full-Time", href: "/jobs?type=full-time" },
      { name: "Freelance", href: "/jobs?type=freelance" },
      { name: "Internships", href: "/jobs?type=internship" },
      { name: "Submit Job", href: "/jobs/submit" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "All Posts", href: "/community" },
      { name: "Top Posts", href: "/community?sort=top" },
      { name: "New Posts", href: "/community?sort=new" },
      { name: "Create Post", href: "/community/create" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Discord",
    href: "https://discord.com",
    icon: MessageCircle,
  },
  {
    name: "Email",
    href: "mailto:hello@wemake.dev",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-transparent dark:bg-transparent border-t border-neutral-200 dark:border-neutral-800">
      <div className="w-full mx-auto">
        {/* 메인 Footer 사이트맵 섹션 */}
        <div className="w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* 브랜드 섹션 */}
            <div className="flex col-span-2 md:col-span-3 lg:col-span-1 lg:flex-col lg:gap-4 lg:mr-8">
              <Link
                to="/"
                className="font-bold text-xl tracking-tight text-black dark:text-white hover:opacity-80 transition-opacity"
              >
                wemake
              </Link>
            </div>

            {/* 링크 섹션들 */}
            {footerSections.map(section => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-sm text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 여기는 사이트 맵과 소셜 미디어 링크 사이의 줄입니다. */}
        {/* <Separator className="bg-neutral-200 dark:bg-neutral-800" /> */}

        {/* 하단 저작권 섹션 */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} wemake. All rights reserved.
          </div>

          {/* 소셜 미디어 링크 */}
          <div className="flex items-center gap-2">
            {socialLinks.map(social => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
