import SEO from "../components/common/SEO";
import AlbumMosaic from "../components/common/AlbumMosaic";
import { FilterChips, PageHeader, useFilterParam } from "../components/common/SiteBlocks";
import { albumsNewestFirst, categories } from "../data/gallery";

export default function Gallery() {
  const [category, setCategory] = useFilterParam("category", categories.map((c) => c.id));
  const options = [{ id: "all", label: "All" }, ...categories.filter((c) => albumsNewestFirst.some((a) => a.category === c.id))];
  const visible = albumsNewestFirst.filter((album) => category === "all" || album.category === category);
  return (
    <>
      <SEO title="Gallery" description="Photos from conferences, programming competitions, and research events." />
      <div className="shell page">
        <PageHeader kicker="Moments" title="Gallery">Conferences, competitions and research events.</PageHeader>
        <FilterChips label="Filter albums by category" options={options} value={category} onChange={setCategory} />
        <div className="album-stack">{visible.map((album) => <AlbumMosaic key={album.slug} album={album} index={albumsNewestFirst.indexOf(album)} headingLevel={2} eager={visible.indexOf(album) === 0} />)}</div>
      </div>
    </>
  );
}
