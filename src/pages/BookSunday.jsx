import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { PageIntro } from "../components/common/SiteBlocks";

export default function BookSunday() {
  return <><SEO title="Reading notes" /><div className="shell page"><PageIntro eyebrow="Reading notes" title="Book Sunday">A small record of books I want to think about more carefully.</PageIntro><section className="section"><Link className="book-row" to="/book-sunday/godel-escher-bach"><img src="/images/books/An_Eternal_Golden_Braid.jpg" alt="Gödel, Escher, Bach cover" /><div><h2>Gödel, Escher, Bach</h2><p>Douglas Hofstadter · notes on formal systems, self-reference, and intelligence.</p></div></Link></section></div></>;
}
