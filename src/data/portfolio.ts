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

export const typingWords: string[] = ["TypeScript", "Python", "Go", "Docker", "PixiJS", "Vite", "Godot", "vLLM"];

export const tagline: string = "Software Engineer | Love for Code, Games, and Creative Challenges";

export const strengths: Strength[] = [
  {
    title: "Game Development",
    description:
      "I create interactive games and reusable frameworks that make game development faster, smarter, and more scalable. From PixiJS frontends to Java backends, I build the foundations that power new experiences.",
    tags: ["TypeScript", "PixiJS", "Vite", "Java", "Godot"],
  },
  {
    title: "AI Infrastructure & Integration",
    description:
      "I bring AI into practical use by hosting language models, managing API access, and connecting AI applications to company data and workflows. My work covers local inference, load balancing, and monitoring.",
    tags: ["vLLM", "llama.cpp", "LiteLLM", "MCP", "Grafana"],
  },
  {
    title: "Internal Tools & Automation",
    description:
      "I transform everyday business challenges into intuitive, purpose-built applications. From access management and visitor registration to custom kiosk experiences, I build seamless solutions across frontend, backend, and database - designed around the people who use them.",
    tags: ["TypeScript", "React", "Vue", "Node.js", "PostgreSQL", "Electron"],
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
    description: "Developed a variety of engaging slot games featuring unique mechanics, exciting features, and immersive gameplay experiences.",
    tags: ["TypeScript", "PixiJS", "Java"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "Access & Approval Management",
    description: "An internal application for managing user permissions and guiding access requests through a structured approval workflow.",
    tags: ["TypeScript", "Vue", "Node.js", "PostgreSQL"],
    href: "",
    linkEnabled: false,
  },
  {
    title: "Visitor Registration Terminal",
    description: "A visitor check-in application that records company visits and gives reception staff a clear overview of registered visitors.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
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
  { label: "Node.js" },
  { label: "Vite" },
  { label: "Docker" },
  { label: "Tailwind CSS" },
  { label: "PixiJS" },
  { label: "Godot" },
  { label: "Go" },
  { label: "Python" },
  { label: "vLLM" },
  { label: "llama.cpp" },
  { label: "LiteLLM" },
  { label: "Grafana" },
];
