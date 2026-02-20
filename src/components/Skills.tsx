import { useReveal } from "../hooks/useReveal";

interface SkillCategory {
    title: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Bun", "Python", "PostgreSQL", "Redis"],
    },
    {
        title: "Game Dev",
        skills: ["Three.js", "WebGL", "GLSL Shaders", "Physics Engines"],
    },
    {
        title: "Design & Tools",
        skills: ["Figma", "UI/UX", "Git", "Docker", "macOS"],
    },
    {
        title: "Other",
        skills: ["WebSockets", "REST APIs", "Chrome Extensions", "Swift", "Animation"],
    },
];

export function Skills() {
    const headerRef = useReveal();
    const gridRef = useReveal<HTMLDivElement>();

    return (
        <section
            id="skills"
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
            }}
        >
            {/* Header */}
            <div ref={headerRef} className="reveal">
                <hr className="section-rule" style={{ marginBottom: "2rem" }} />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "1rem",
                        marginBottom: "clamp(3rem, 5vw, 5rem)",
                        maxWidth: "600px",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase" as const,
                            color: "var(--primary)",
                        }}
                    >
                        Capabilities
                    </p>
                    <h2
                        style={{
                            fontSize: "var(--text-3xl)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1,
                            color: "var(--foreground)",
                        }}
                    >
                        Tools & Technologies
                    </h2>
                    <p
                        style={{
                            fontSize: "var(--text-base)",
                            color: "var(--muted-foreground)",
                            lineHeight: 1.7,
                        }}
                    >
                        A diverse toolkit spanning frontend, backend, game development,
                        and creative tools. Always expanding.
                    </p>
                </div>
            </div>

            {/* Skills — horizontal list per category, no cards */}
            <div
                ref={gridRef}
                className="reveal-stagger"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                }}
            >
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "140px 1fr",
                            gap: "1rem",
                            alignItems: "baseline",
                            padding: "1.25rem 0",
                            borderBottom: "1px solid var(--border)",
                        }}
                    >
                        {/* Category label */}
                        <h3
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-sm)",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                color: "var(--foreground)",
                            }}
                        >
                            {category.title}
                        </h3>

                        {/* Skills — inline tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {category.skills.map((skill) => (
                                <span key={skill} className="tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
