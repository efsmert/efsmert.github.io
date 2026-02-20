export function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: "Work", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 clamp(1.5rem, 4vw, 3rem) clamp(2rem, 4vw, 4rem)",
            }}
        >
            <hr
                className="section-rule--wide section-rule"
                style={{ maxWidth: "100%", marginBottom: "clamp(2rem, 4vw, 4rem)" }}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "clamp(2rem, 4vw, 3rem)",
                    marginBottom: "clamp(3rem, 5vw, 5rem)",
                }}
            >
                {/* Brand */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-lg)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            color: "var(--foreground)",
                            marginBottom: "0.75rem",
                        }}
                    >
                        Sami Areski
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "var(--text-sm)",
                            color: "var(--muted-foreground)",
                            lineHeight: 1.65,
                            maxWidth: "280px",
                        }}
                    >
                        Developer & maker. Building digital experiences
                        with intention and care.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase" as const,
                            color: "var(--muted-foreground)",
                            marginBottom: "1rem",
                        }}
                    >
                        Navigation
                    </p>
                    <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="link-underline"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-sm)",
                                    color: "var(--muted-foreground)",
                                    textDecoration: "none",
                                    width: "fit-content",
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
                    </nav>
                </div>

                {/* Connect */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase" as const,
                            color: "var(--muted-foreground)",
                            marginBottom: "1rem",
                        }}
                    >
                        Connect
                    </p>
                    <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
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
                                    color: "var(--muted-foreground)",
                                    textDecoration: "none",
                                    width: "fit-content",
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
                    </nav>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: "1px solid var(--border)",
                    padding: "1.5rem 0",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        color: "var(--muted-foreground)",
                        letterSpacing: "0.02em",
                    }}
                >
                    © {currentYear} Sami Areski
                </p>
                <p
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        color: "var(--muted-foreground)",
                        letterSpacing: "0.02em",
                    }}
                >
                    Built with React & Bun
                </p>
            </div>
        </footer>
    );
}
