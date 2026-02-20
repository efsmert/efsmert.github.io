import { useState, useEffect, useCallback } from "react";

const navItems = [
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

    return (
        <header
            id="nav-header"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
                background: isScrolled
                    ? "oklch(0.975 0.008 75 / 0.92)"
                    : "transparent",
                backdropFilter: isScrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
                borderBottom: isScrolled
                    ? "1px solid oklch(0.88 0.015 75)"
                    : "1px solid transparent",
                padding: isScrolled ? "0.75rem 0" : "1.5rem 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 clamp(1.5rem, 4vw, 3rem)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Wordmark — strong, no logo icon */}
                <a
                    href="#"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-lg)",
                        fontWeight: 700,
                        letterSpacing: "-0.04em",
                        color: "var(--foreground)",
                        textDecoration: "none",
                    }}
                >
                    Sami Areski
                </a>

                {/* Desktop nav */}
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5rem",
                    }}
                    className="hidden md:flex"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="link-underline"
                            style={{
                                fontSize: "var(--text-sm)",
                                fontWeight: 500,
                                color: "var(--muted-foreground)",
                                letterSpacing: "0.02em",
                                textTransform: "uppercase" as const,
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--foreground)")
                            }
                            onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                                "var(--muted-foreground)")
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="btn-primary hidden md:inline-flex"
                    style={{ fontSize: "var(--text-xs)", padding: "0.6rem 1.4rem" }}
                >
                    Let's Talk
                </a>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    style={{
                        background: "none",
                        border: "none",
                        padding: "0.5rem",
                        cursor: "pointer",
                        color: "var(--foreground)",
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        {isMobileMenuOpen ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="6" y1="18" x2="18" y2="6" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className="md:hidden"
                style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    background: "oklch(0.975 0.008 75 / 0.97)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderBottom: "1px solid var(--border)",
                    padding: isMobileMenuOpen ? "1.5rem" : "0 1.5rem",
                    maxHeight: isMobileMenuOpen ? "400px" : "0",
                    overflow: "hidden",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
            >
                <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMobile}
                            style={{
                                display: "block",
                                padding: "0.75rem 0",
                                fontSize: "var(--text-lg)",
                                fontWeight: 500,
                                color: "var(--foreground)",
                                textDecoration: "none",
                                borderBottom: "1px solid var(--border)",
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={closeMobile}
                        className="btn-primary"
                        style={{
                            marginTop: "1rem",
                            justifyContent: "center",
                            textDecoration: "none",
                        }}
                    >
                        Let's Talk
                    </a>
                </nav>
            </div>
        </header>
    );
}
