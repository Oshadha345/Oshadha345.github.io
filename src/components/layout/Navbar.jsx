import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { profile } from "../../data/site";

const links = [["Education", "/education"], ["Research", "/research"], ["Projects", "/projects"], ["Awards", "/achievements"], ["Writing", "/blog"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return <header className="site-header">
    <nav className="nav shell" aria-label="Primary navigation">
      <Link className="wordmark" to="/" onClick={() => setOpen(false)}>OS</Link>
      <button className="menu" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
      <div className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, path]) => <Link key={path} className={pathname === path ? "active" : ""} to={path} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="nav-cv" href={profile.cv} target="_blank" rel="noreferrer">CV ↗</a>
      </div>
    </nav>
  </header>;
}
