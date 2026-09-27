import { Link } from "react-router-dom";
import { profile } from "../../data/site";

const find = (label) => profile.links.find(([name]) => name === label)[1];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <nav aria-label="Footer">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={find("Google Scholar")} target="_blank" rel="noreferrer">Scholar</a>
          <a href={find("GitHub")} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.cv} target="_blank" rel="noreferrer">CV</a>
          <Link to="/reading">Reading notes</Link>
        </nav>
      </div>
    </footer>
  );
}
