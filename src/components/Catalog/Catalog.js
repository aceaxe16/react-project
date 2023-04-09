import { useMangaContext } from "../../contexts/MangaContext";
import { CatalogItem } from "./CatalogItem";

import './Catalog.css';

export const Catalog = () => {
  const {mangas} = useMangaContext();  
  
  
  return (
    <section className="page">
      <h1 className="page-name">All Mangas</h1>

      {mangas.map(x =><CatalogItem key = {x._id}{...x} />)}
      {(mangas.length == 0 || mangas[0] == "404") && (
        <h3 className="no-content">No mangas have been added yet</h3>
      )}
    </section>  
  );
};
