export interface Social {
  label: string;
  href: string;
}

export interface Strength {
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  /** Set to true to turn the project card into a link using href. */
  linkEnabled?: boolean;
}

export interface TechItem {
  label: string;
}

export const typingWords: string[] = ["TypeScript", "Python", "Go", "PixiJS", "Godot", "vLLM"];

export const tagline: string = "Software Engineer | Love for Code, Games, and Creative Challenges";

export const strengths: Strength[] = [
  {
    title: "Game Development",
    description:
      "I build interactive games and reusable frameworks, with experience spanning PixiJS frontends and Java backends. My focus is on creating a shared technical foundation that makes new games easier to develop.",
    tags: ["PixiJS", "TypeScript", "Java", "Godot"],
  },
  {
    title: "AI Infrastructure & Integration",
    description:
      "I bring AI into practical use by hosting language models, managing API access, and connecting AI applications to company data and workflows. My work covers local inference, load balancing, and monitoring.",
    tags: ["vLLM", "LiteLLM", "MCP", "Grafana"],
  },
  {
    title: "Internal Tools & Automation",
    description:
      "I turn everyday business processes into focused applications-from access approvals and visitor registration to dedicated kiosk interfaces. I build across frontend, backend, and database to deliver tools that fit the way people work.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Electron"],
  },
];

export const projects: Project[] = [
  {
    title: "Slot Game Framework",
    description: "A reusable frontend framework built on PixiJS, providing a shared foundation for developing slot games.",
    tags: ["TypeScript", "PixiJS"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "Slot Game Development",
    description: "A range of slot games spanning interactive TypeScript and PixiJS frontends and Java backends.",
    tags: ["TypeScript", "PixiJS", "Java"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "Access & Approval Management",
    description: "An internal application for managing user permissions and guiding access requests through a structured approval workflow.",
    tags: ["TypeScript", "Node.js"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "Visitor Registration Terminal",
    description: "A visitor check-in application that records company visits and gives reception staff a clear overview of registered visitors.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "Electron Kiosk Applications",
    description:
      "Desktop wrappers that turn web applications into dedicated kiosk experiences, with restricted permissions and controlled access to web content.",
    tags: ["Electron", "Kiosk Mode"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "Local LLM Hosting",
    description: "Self-hosted language models served through vLLM, making AI inference available on local infrastructure.",
    tags: ["vLLM", "LLMs", "Self-hosted"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "AI Gateway with LiteLLM",
    description:
      "A central gateway for AI APIs, combining user management and load balancing through LiteLLM with a Grafana dashboard for tracking LLM metrics.",
    tags: ["LiteLLM", "Grafana", "AI APIs", "Load Balancing"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "MCP Servers for Business Tools",
    description: "Custom MCP servers that connect AI applications to company data and workflows, making internal tools available through a shared protocol.",
    tags: ["MCP", "AI Integration"],
    href: "",
    linkEnabled: false,
  },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/kevin-ratschinski" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kevin-ratschinski-58b6b221a" },
];

export const techStack: TechItem[] = [
  { label: "TypeScript" },
  { label: "Vue" },
  { label: "React" },
  { label: "Tailwind CSS" },
  { label: "PixiJS" },
  { label: "Godot" },
  { label: "Go" },
  { label: "Python" },
  { label: "vLLM" },
  { label: "llama.cpp" },
];
