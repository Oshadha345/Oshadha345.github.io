import { Link } from "react-router-dom";
import { profile } from "../../data/site";

export default function Footer() {
  return <footer className="footer shell">
    <span>Oshadha Samarakoon</span>
    <div><a href={`mailto:${profile.email}`}>Email</a><a href={profile.cv} target="_blank" rel="noreferrer">CV</a><Link to="/book-sunday">Reading notes</Link></div>
  </footer>;
}
