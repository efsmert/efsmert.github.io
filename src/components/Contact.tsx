import { useState, useCallback } from "react";
import { useReveal } from "../hooks/useReveal";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/efsmert",
        detail: "@efsmert",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        detail: "Connect with me",
    },
    {
        label: "Email",
        href: "mailto:your.email@example.com",
        detail: "your.email@example.com",
    },
];

export function Contact() {
    const headerRef = useReveal();
    const formRef = useReveal<HTMLFormElement>();
    const linksRef = useReveal<HTMLDivElement>();

    const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setFormState("sending");
        // Simulate — in production this would be an API call
        setTimeout(() => setFormState("sent"), 1200);
        setTimeout(() => setFormState("idle"), 4000);
    }, []);

    return (
        <section
            id="contact"
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
            }}
        >
            <hr className="section-rule" style={{ marginBottom: "2rem" }} />

            {/* Header */}
            <div
                ref={headerRef}
                className="reveal"
                style={{ marginBottom: "clamp(3rem, 5vw, 5rem)" }}
            >
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
                    Contact
                </p>
                <h2
                    style={{
                        fontSize: "var(--text-3xl)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        color: "var(--foreground)",
                        maxWidth: "500px",
                    }}
                >
                    Let's build something{" "}
                    <em
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontStyle: "italic",
                            fontWeight: 400,
                        }}
                    >
                        together.
                    </em>
                </h2>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "clamp(3rem, 6vw, 6rem)",
                    alignItems: "start",
                }}
            >
                {/* Contact form — clean, no card wrapper */}
                <form
                    ref={formRef}
                    className="reveal"
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.25rem",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1rem",
                        }}
                    >
                        <div>
                            <label
                                htmlFor="contact-name"
                                style={{
                                    display: "block",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: 600,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase" as const,
                                    color: "var(--muted-foreground)",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                required
                                placeholder="Your name"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 1rem",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-sm)",
                                    border: "1px solid var(--border)",
                                    borderRadius: 0,
                                    background: "var(--background)",
                                    color: "var(--foreground)",
                                    transition: "border-color 0.2s",
                                }}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="contact-email"
                                style={{
                                    display: "block",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: 600,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase" as const,
                                    color: "var(--muted-foreground)",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                Email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                required
                                placeholder="you@email.com"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 1rem",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-sm)",
                                    border: "1px solid var(--border)",
                                    borderRadius: 0,
                                    background: "var(--background)",
                                    color: "var(--foreground)",
                                    transition: "border-color 0.2s",
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="contact-subject"
                            style={{
                                display: "block",
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-xs)",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase" as const,
                                color: "var(--muted-foreground)",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Subject
                        </label>
                        <input
                            id="contact-subject"
                            type="text"
                            required
                            placeholder="What's this about?"
                            style={{
                                width: "100%",
                                padding: "0.75rem 1rem",
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-sm)",
                                border: "1px solid var(--border)",
                                borderRadius: 0,
                                background: "var(--background)",
                                color: "var(--foreground)",
                                transition: "border-color 0.2s",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact-message"
                            style={{
                                display: "block",
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-xs)",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase" as const,
                                color: "var(--muted-foreground)",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            required
                            rows={6}
                            placeholder="Tell me about your project…"
                            style={{
                                width: "100%",
                                padding: "0.75rem 1rem",
                                fontFamily: "var(--font-serif)",
                                fontSize: "var(--text-sm)",
                                border: "1px solid var(--border)",
                                borderRadius: 0,
                                background: "var(--background)",
                                color: "var(--foreground)",
                                resize: "vertical",
                                minHeight: "140px",
                                transition: "border-color 0.2s",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={formState === "sending"}
                        style={{
                            opacity: formState === "sending" ? 0.6 : 1,
                            alignSelf: "flex-start",
                            marginTop: "0.5rem",
                        }}
                    >
                        {formState === "idle" && "Send Message →"}
                        {formState === "sending" && "Sending…"}
                        {formState === "sent" && "Sent ✓"}
                    </button>
                </form>

                {/* Social links — clean list, no cards */}
                <div ref={linksRef} className="reveal" style={{ paddingTop: "0.5rem" }}>
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-sm)",
                            fontWeight: 600,
                            color: "var(--foreground)",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Or reach out directly
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0",
                        }}
                    >
                        {socialLinks.map((link, i) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "80px 1fr auto",
                                    gap: "1rem",
                                    alignItems: "center",
                                    padding: "1rem 0",
                                    borderBottom: "1px solid var(--border)",
                                    borderTop: i === 0 ? "1px solid var(--border)" : "none",
                                    textDecoration: "none",
                                    transition: "opacity 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "var(--text-xs)",
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase" as const,
                                        color: "var(--muted-foreground)",
                                    }}
                                >
                                    {link.label}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "var(--text-sm)",
                                        color: "var(--foreground)",
                                        fontWeight: 500,
                                    }}
                                >
                                    {link.detail}
                                </span>
                                <span
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        color: "var(--muted-foreground)",
                                    }}
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Response time note — understated */}
                    <p
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "var(--text-sm)",
                            fontStyle: "italic",
                            color: "var(--muted-foreground)",
                            marginTop: "2rem",
                        }}
                    >
                        I typically respond within 24 hours.
                    </p>
                </div>
            </div>
        </section>
    );
}
