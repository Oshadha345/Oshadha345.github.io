import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/site";
import { albums } from "../../data/gallery";

const links = [
  ["Home", "/"],
  ["Publications", "/publications"],
  ["Projects", "/projects"],
  ["Research", "/research"],
  ["Writing", "/writing"],
  ...(albums.length ? [["Gallery", "/gallery"]] : []),
  ["About", "/about"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary">
        <Link className="site-name" to="/">{profile.name}</Link>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}<span className="sr-only">Menu</span>
        </button>
        <div id="nav-links" className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"}>{label}</NavLink>)}
          <a className="button primary nav-cv" href={profile.cv} target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>
    </header>
  );
}
