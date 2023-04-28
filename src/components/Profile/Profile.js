import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";


import { mangaServiceFactory } from "../../services/mangaService";
import { useService } from "../../hooks/useService";

export const Profile = () => {
  const { userId } = useContext(AuthContext);
  const [addedMangas, setAddedMangas] = useState([]);
  const mangaService = useService(mangaServiceFactory);
  
  

  useEffect(() => {
    mangaService.getUserMangas(userId).then((state) => setAddedMangas(state));
  }, [userId]);

  return (
    <main>
      {/* Start Profile Details Section */}
      <div className="profile">
        {/* Start Uploaded Photos Section */}
        <div className="pet-photos">
          {/* Link to Uploaded Pet Photo */}
          {/* {mangas.map(x =><CatalogItem key = {x._id}{...x}/>)} */}
          {addedMangas.map((manga) => (
            <Link to={`/catalog/${manga._id}`}>
              <img src={manga.imageUrl} alt="hi m8" />
            </Link>
          ))}
          {addedMangas.length === 0 && (
            <article className="not-available-photo">
              <h1>You haven't added any mangas yet</h1>
            </article>
          )}          
          
        </div>
      </div>
    </main>
  );
};
