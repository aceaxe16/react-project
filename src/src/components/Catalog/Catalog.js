import { useMangaContext } from "../../contexts/MangaContext";
import { CatalogItem } from "./CatalogItem";

export const Catalog = () => {
  const {mangas} = useMangaContext();
  
  return (
    <section>
      <h1>All Mangas</h1>

      {mangas.map(x =><CatalogItem key = {x._id}{...x}/>)}
      {mangas.length === 0 && (
        <h3 className="no-content">No Mangas have been added yet</h3>
      )}
    </section>  
  );
};
