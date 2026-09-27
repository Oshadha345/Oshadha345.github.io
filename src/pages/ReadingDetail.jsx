import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import { books } from "../data/site";
import NotFound from "./NotFound";

export default function ReadingDetail() {
  const { slug } = useParams();
  const book = books.find((entry) => entry.slug === slug);
  if (!book) return <NotFound />;
  return (
    <>
      <SEO title={book.title} description={book.intro} />
      <article className="shell page narrow">
        <Link className="back-link" to="/reading">← Reading notes</Link>
        <header className="page-header">
          <span className="kicker">{book.author} · {book.year}</span>
          <h1>{book.title}</h1>
          <p className="page-lede">{book.intro}</p>
        </header>
        <div className="prose">
          {book.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
        </div>
      </article>
    </>
  );
}
