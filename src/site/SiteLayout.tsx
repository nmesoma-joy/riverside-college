import { useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Menu, X, GraduationCap, ArrowUpRight, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "News & Events", to: "/news-events" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap container">
          <Link to="/" className="brand" aria-label="Riverside College home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark"><GraduationCap size={25} /></span>
            <span className="brand-copy"><strong>Riverside College</strong><small>Learn · Grow · Build Your Future</small></span>
          </Link>
          <button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className={`nav-link ${pathname === item.to ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link to="/admissions" className="button button-primary nav-apply" onClick={() => setMenuOpen(false)}>Apply Now <ArrowUpRight size={16} /></Link>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>

      <section className="join-strip">
        <div className="container join-inner">
          <div className="join-icon"><GraduationCap size={26} /></div>
          <div><h3>Ready to join our school?</h3><p>Take the first step towards a brighter future. Apply today!</p></div>
          <Link to="/admissions" className="button button-primary">Start your application <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark"><GraduationCap size={24} /></span>
              <span className="brand-copy"><strong>Riverside College</strong><small>Learn · Grow · Build Your Future</small></span>
            </Link>
            <p>Building curious minds, strong character, and confident futures.</p>
            <div className="socials">
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={17} /></a>
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://youtube.com" aria-label="YouTube"><Youtube size={17} /></a>
            </div>
          </div>
          <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/academics">Academics</Link><Link to="/campus-life">Campus life</Link><Link to="/news-events">News & events</Link></div>
          <div><h4>Admissions</h4><Link to="/admissions">How to apply</Link><Link to="/admissions">Entry requirements</Link><Link to="/admissions">Frequently asked questions</Link></div>
          <div className="footer-contact"><h4>Get in touch</h4><p><MapPin size={16} /> 12 Education Lane, Lagos, Nigeria</p><p><Phone size={16} /> +234 801 234 5678</p><p><Mail size={16} /> hello@riversidecollege.edu.ng</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Riverside College. All rights reserved.</span><span>Made with care for the next generation.</span></div>
      </footer>
    </>
  );
}
