import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors">
              PreChurn
            </Link>
            <span className="text-body-sm text-muted-foreground">
              Built for SaaS & AI tools
            </span>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-body-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PreChurn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
