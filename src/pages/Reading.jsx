import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import Img from "../components/common/Img";
import { PageHeader } from "../components/common/SiteBlocks";
import { books } from "../data/site";

export default function Reading() {
  return (
    <>
      <SEO title="Reading notes" description="Book Sunday: notes on books about mathematics, intelligence, and formal systems." />
      <div className="shell page narrow">
        <PageHeader kicker="Reading notes" title="Book Sunday">A small record of books I want to think about more carefully.</PageHeader>
        {books.map((book) => (
          <Link key={book.slug} className="book-row" to={`/reading/${book.slug}`}>
            <Img src={book.cover} alt={`${book.title} cover`} />
            <div><h2>{book.title}</h2><p>{book.summary}</p></div>
          </Link>
        ))}
      </div>
    </>
  );
}
