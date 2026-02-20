import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { ProjectCard } from "./ProjectCard";
import { projects, categories } from "../data/projects";

export function Projects() {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const headerRef = useReveal();

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const featured = filteredProjects.filter((p) => p.featured);
    const rest = filteredProjects.filter((p) => !p.featured);

    return (
        <section
            id="projects"
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
            }}
        >
            {/* Section header — left-aligned, editorial */}
            <div ref={headerRef} className="reveal">
                <hr className="section-rule" style={{ marginBottom: "2rem" }} />
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        gap: "1.5rem",
                        marginBottom: "clamp(2rem, 4vw, 4rem)",
                    }}
                >
                    <div>
                        <p
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-xs)",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase" as const,
                                color: "var(--primary)",
                                marginBottom: "0.75rem",
                            }}
                        >
                            Selected Work
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
                            Projects
                        </h2>
                    </div>

                    {/* Category filter — text buttons, no cards */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.25rem",
                        }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: activeCategory === cat.id ? 700 : 500,
                                    letterSpacing: "0.04em",
                                    textTransform: "uppercase" as const,
                                    padding: "0.5rem 0.9rem",
                                    background:
                                        activeCategory === cat.id
                                            ? "var(--foreground)"
                                            : "transparent",
                                    color:
                                        activeCategory === cat.id
                                            ? "var(--background)"
                                            : "var(--muted-foreground)",
                                    border: "none",
                                    borderRadius: 0,
                                    cursor: "pointer",
                                    transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured projects — large format */}
            {featured.length > 0 && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(2rem, 4vw, 4rem)",
                        marginBottom: "clamp(3rem, 5vw, 5rem)",
                    }}
                >
                    {featured.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            layout="featured"
                        />
                    ))}
                </div>
            )}

            {/* Remaining projects — asymmetric two-column */}
            {rest.length > 0 && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "clamp(1.5rem, 3vw, 3rem)",
                    }}
                >
                    {rest.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            layout="compact"
                        />
                    ))}
                </div>
            )}

            {/* Empty state */}
            {filteredProjects.length === 0 && (
                <p
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "var(--text-lg)",
                        color: "var(--muted-foreground)",
                        fontStyle: "italic",
                        padding: "4rem 0",
                    }}
                >
                    No projects in this category yet.
                </p>
            )}
        </section>
    );
}
