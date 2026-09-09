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
}

export interface TechItem {
  label: string;
}

export const typingWords: string[] = ["TypeScript", "Python", "Go", "Pixi.js", "Godot", "vLLM"];

export const strengths: Strength[] = [
  {
    title: "Game Development",
    description: " I build games and intercative experiences with Pixi.js and Godot.",
    tags: ["Pixi.js", "TypeScript", "Godot", "WebGPU", "WebGL"],
  },
  {
    title: "Local AI & LLM Serving",
    description: "I run and serve open-source LLMs locally, optimized and exposed via vLLM.",
    tags: ["vLLM", "Python", "HuggingFace", "Self-hosted"],
  },
];

export const projects: Project[] = [
  // Placeholder
  {
    title: "Project",
    description: "One-liner describing the project.",
    tags: ["TypeScript"],
    href: "https://github.com/kevin-ratschinski",
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
  { label: "Pixi.js" },
  { label: "Godot" },
  { label: "Go" },
  { label: "Python" },
  { label: "vLLM" },
  { label: "llama.cpp" },
];
