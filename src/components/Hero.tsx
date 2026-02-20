export function Hero() {
    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(6rem, 12vh, 10rem) clamp(1.5rem, 4vw, 3rem) clamp(3rem, 8vh, 6rem)",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <div style={{ maxWidth: "760px" }}>
                {/* Eyebrow — small, understated, left-aligned */}
                <p
                    className="hero-enter"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "var(--primary)",
                        marginBottom: "1.5rem",
                    }}
                >
                    Developer & Maker
                </p>

                {/* Headline — large, confident, left-aligned */}
                <h1
                    className="hero-enter hero-enter-delay-1"
                    style={{
                        fontSize: "var(--text-5xl)",
                        fontWeight: 700,
                        lineHeight: 1.05,
                        letterSpacing: "-0.04em",
                        color: "var(--foreground)",
                        marginBottom: "2rem",
                    }}
                >
                    Building things
                    <br />
                    that feel{" "}
                    <em
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontStyle: "italic",
                            fontWeight: 400,
                            color: "var(--primary)",
                        }}
                    >
                        alive.
                    </em>
                </h1>

                {/* Description — serif body copy */}
                <p
                    className="hero-enter hero-enter-delay-2"
                    style={{
                        fontSize: "var(--text-lg)",
                        lineHeight: 1.7,
                        color: "var(--muted-foreground)",
                        maxWidth: "540px",
                        marginBottom: "3rem",
                    }}
                >
                    I craft web applications, immersive games, and creative developer tools.
                    Obsessed with the details that turn good software into
                    unforgettable experiences.
                </p>

                {/* Actions — editorial button style */}
                <div
                    className="hero-enter hero-enter-delay-3"
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                >
                    <a
                        href="#projects"
                        className="btn-primary"
                        style={{ textDecoration: "none" }}
                    >
                        View Work
                        <span aria-hidden="true" style={{ marginLeft: "0.25rem" }}>↓</span>
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline"
                        style={{ textDecoration: "none" }}
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Social — minimal, tucked beneath CTAs */}
                <div
                    className="hero-enter hero-enter-delay-4"
                    style={{
                        display: "flex",
                        gap: "1.75rem",
                        marginTop: "3.5rem",
                        paddingTop: "2rem",
                        borderTop: "1px solid var(--border)",
                    }}
                >
                    {[
                        { label: "GitHub", href: "https://github.com/efsmert" },
                        { label: "LinkedIn", href: "https://linkedin.com" },
                        { label: "Email", href: "mailto:your.email@example.com" },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                            className="link-underline"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-sm)",
                                fontWeight: 500,
                                color: "var(--muted-foreground)",
                                textDecoration: "none",
                                letterSpacing: "0.01em",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--foreground)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--muted-foreground)")
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
