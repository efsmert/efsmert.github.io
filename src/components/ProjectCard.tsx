import { useReveal } from "../hooks/useReveal";
import type { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
    layout?: "featured" | "compact";
}

export function ProjectCard({ project, layout = "compact" }: ProjectCardProps) {
    const ref = useReveal<HTMLElement>();

    if (layout === "featured") {
        return (
            <article
                ref={ref}
                className="reveal"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "0",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "clamp(2rem, 4vw, 4rem)",
                }}
            >
                {/* Image — full-width, editorial crop */}
                {project.image && (
                    <div
                        className="project-image-wrap"
                        style={{
                            aspectRatio: "16 / 9",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "top",
                                display: "block",
                            }}
                        />
                    </div>
                )}

                <div>
                    {/* Category eyebrow */}
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase" as const,
                            color: "var(--primary)",
                            marginBottom: "0.75rem",
                        }}
                    >
                        {project.category}
                    </p>

                    {/* Title */}
                    <h3
                        style={{
                            fontSize: "var(--text-2xl)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.15,
                            marginBottom: "1rem",
                            color: "var(--foreground)",
                        }}
                    >
                        {project.title}
                    </h3>

                    {/* Description — serif */}
                    <p
                        style={{
                            fontSize: "var(--text-base)",
                            color: "var(--muted-foreground)",
                            maxWidth: "560px",
                            marginBottom: "1.25rem",
                        }}
                    >
                        {project.description}
                    </p>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                        {project.technologies.map((tech) => (
                            <span key={tech} className="tag">{tech}</span>
                        ))}
                    </div>

                    {/* Links — text links, not buttons */}
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {project.liveUrl && project.liveUrl !== "#" && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-underline"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-sm)",
                                    fontWeight: 600,
                                    color: "var(--foreground)",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                }}
                            >
                                Live Demo
                                <span aria-hidden="true" style={{ fontSize: "0.8em" }}>↗</span>
                            </a>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-underline"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-sm)",
                                    fontWeight: 600,
                                    color: "var(--muted-foreground)",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                }}
                            >
                                Source
                                <span aria-hidden="true" style={{ fontSize: "0.8em" }}>↗</span>
                            </a>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    // Compact layout — used in grid
    return (
        <article
            ref={ref}
            className="reveal"
            style={{
                borderBottom: "1px solid var(--border)",
                paddingBottom: "1.5rem",
            }}
        >
            {/* Category */}
            <p
                style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "var(--primary)",
                    marginBottom: "0.5rem",
                }}
            >
                {project.category}
            </p>

            {/* Title */}
            <h3
                style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    marginBottom: "0.75rem",
                    color: "var(--foreground)",
                }}
            >
                {project.title}
            </h3>

            {/* Description */}
            <p
                style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--muted-foreground)",
                    marginBottom: "1rem",
                    fontFamily: "var(--font-serif)",
                    lineHeight: 1.65,
                }}
            >
                {project.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "1.25rem" }}>
                {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                            fontWeight: 600,
                            color: "var(--foreground)",
                            textDecoration: "none",
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.06em",
                        }}
                    >
                        Demo ↗
                    </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                            fontWeight: 600,
                            color: "var(--muted-foreground)",
                            textDecoration: "none",
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.06em",
                        }}
                    >
                        Source ↗
                    </a>
                )}
            </div>
        </article>
    );
}
