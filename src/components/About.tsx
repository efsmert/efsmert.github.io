import { useReveal } from "../hooks/useReveal";

export function About() {
    const leftRef = useReveal();
    const rightRef = useReveal<HTMLDivElement>();

    return (
        <section
            id="about"
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
            }}
        >
            <hr className="section-rule" style={{ marginBottom: "2rem" }} />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "clamp(3rem, 6vw, 6rem)",
                    alignItems: "start",
                }}
            >
                {/* Left — Editorial text */}
                <div ref={leftRef} className="reveal">
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
                        About
                    </p>
                    <h2
                        style={{
                            fontSize: "var(--text-3xl)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1,
                            color: "var(--foreground)",
                            marginBottom: "2rem",
                        }}
                    >
                        A developer who
                        <br />
                        cares about{" "}
                        <em
                            style={{
                                fontFamily: "var(--font-serif)",
                                fontStyle: "italic",
                                fontWeight: 400,
                            }}
                        >
                            craft.
                        </em>
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.25rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "var(--text-base)",
                                color: "var(--muted-foreground)",
                                lineHeight: 1.75,
                            }}
                        >
                            I'm drawn to the intersection of technology and design — where
                            clean code meets thoughtful user experience. My journey started
                            with curiosity about how things work, and it evolved into a
                            dedication to building software that people genuinely enjoy using.
                        </p>
                        <p
                            style={{
                                fontSize: "var(--text-base)",
                                color: "var(--muted-foreground)",
                                lineHeight: 1.75,
                            }}
                        >
                            From modern web applications to immersive browser games,
                            I thrive on projects that push creative boundaries. I believe
                            in shipping work that's both technically sound and visually
                            compelling.
                        </p>
                    </div>
                </div>

                {/* Right — Quick facts, no fake terminal */}
                <div ref={rightRef} className="reveal" style={{ paddingTop: "3.5rem" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0",
                        }}
                    >
                        {[
                            { label: "Location", value: "United States" },
                            { label: "Focus", value: "Full Stack & Game Dev" },
                            { label: "Education", value: "Computer Science" },
                            { label: "Currently", value: "Available for projects" },
                        ].map((item, i) => (
                            <div
                                key={item.label}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "120px 1fr",
                                    gap: "1rem",
                                    padding: "1rem 0",
                                    borderBottom: "1px solid var(--border)",
                                    borderTop: i === 0 ? "1px solid var(--border)" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "var(--text-xs)",
                                        fontWeight: 600,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase" as const,
                                        color: "var(--muted-foreground)",
                                    }}
                                >
                                    {item.label}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "var(--text-sm)",
                                        fontWeight: 500,
                                        color: "var(--foreground)",
                                    }}
                                >
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Interests */}
                    <div style={{ marginTop: "2rem" }}>
                        <p
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-xs)",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase" as const,
                                color: "var(--muted-foreground)",
                                marginBottom: "0.75rem",
                            }}
                        >
                            Interests
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {[
                                "Open Source",
                                "Creative Coding",
                                "Game Design",
                                "Typography",
                                "New Technologies",
                            ].map((interest) => (
                                <span key={interest} className="tag">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
