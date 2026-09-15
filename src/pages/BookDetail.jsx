import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { PageIntro } from "../components/common/SiteBlocks";

export default function BookDetail() {
  return <><SEO title="Gödel, Escher, Bach" /><article className="shell page detail"><Link className="back" to="/book-sunday">← Reading notes</Link><PageIntro eyebrow="Douglas Hofstadter · 1979" title="Gödel, Escher, Bach">Notes on strange loops, formal systems, and the links among mathematics, art, music, and intelligence.</PageIntro><section className="section prose"><h2>Why I picked it up</h2><p>The book sits directly across my interests in mathematics, intelligence, and consciousness. Its dialogues and formal arguments approach the same question from several directions: how meaning can emerge from systems that manipulate symbols.</p><h2>Ideas I am keeping</h2><p>Self-reference is not just a logical curiosity. Hofstadter uses it to connect Gödel’s incompleteness theorems, Escher’s recursive images, Bach’s musical structures, and the idea of a self. The useful part for my own work is the insistence on separating a formal mechanism from the interpretation we place on it.</p></section></article></>;
}
