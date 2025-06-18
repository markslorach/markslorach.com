import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    title: "Invoice MCP",
    description: "A Model Context Protocol server for creating PDF invoices using natural language.",
    image: "/images/invoice-mcp.png",
    href: null,
    github: "https://github.com/markslorach/invoice-mcp.git",
    slug: "invoice-mcp",
    aria: "Link to github repository for Invoice MCP",
  },
  {
    id: crypto.randomUUID(),
    title: "Countries DB",
    description: "A modern, searchable and filterable database of countries around the world.",
    image: "/images/countries-db.png",
    href: null,
    github: "https://github.com/markslorach/countries-db.git",
    slug: "countries-db",
    aria: "Link to github repository for Countries DB",
  },
  {
    id: crypto.randomUUID(),
    title: "Pomodoro",
    description: "A customisable Pomodoro timer designed for Notion embeds, the web and macOS.",
    image: "/images/pomodoro.png",
    href: null,
    github: "https://github.com/markslorach/pomodoro.git",
    slug: "pomodoro",
    aria: "Link to github repository for Pomodoro",
  },
];
