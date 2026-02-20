export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: 'web' | 'game' | 'tool' | 'other';
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Alpha Kappa Sigma Website",
    description: "A modern, sleek fraternity website built with Next.js 14 featuring a sophisticated design with fluid animations and comprehensive member directory.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/projects/aks-preview.png",
    featured: true,
    category: "web",
    liveUrl: "https://aks-shad.vercel.app",
    githubUrl: "https://github.com/efsmert/aks-shad",
  },
  {
    id: "project-2",
    title: "Three.js Flight Simulator",
    description: "An immersive flight simulator game using Three.js with third-person camera, realistic flight physics, and dynamic environments.",
    technologies: ["Three.js", "JavaScript", "WebGL", "GLSL Shaders"],
    featured: true,
    category: "game",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Battle Royale Prototype",
    description: "A Fortnite-style battle royale prototype featuring player movement, building system, and multiplayer mechanics.",
    technologies: ["Three.js", "JavaScript", "WebSockets", "Node.js"],
    featured: true,
    category: "game",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "Music Visualizer",
    description: "High-performance music visualizer using Python and ModernGL with real-time audio analysis and GPU-accelerated rendering.",
    technologies: ["Python", "ModernGL", "GLSL", "PyAudio"],
    featured: false,
    category: "tool",
    githubUrl: "#",
  },
  {
    id: "project-5",
    title: "Chrome String Swap Extension",
    description: "A Chrome web extension that performs search and replace operations on web page content with customizable rules.",
    technologies: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
    featured: false,
    category: "tool",
    githubUrl: "#",
  },
  {
    id: "project-6",
    title: "WASD Arrow Key Toggle",
    description: "A macOS utility that maps WASD keys to arrow keys with a global keyboard shortcut toggle.",
    technologies: ["Swift", "macOS", "Accessibility APIs"],
    featured: false,
    category: "tool",
    githubUrl: "#",
  },
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'game', label: 'Games' },
  { id: 'tool', label: 'Tools' },
] as const;
