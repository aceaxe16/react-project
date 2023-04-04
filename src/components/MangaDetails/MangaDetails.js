import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { mangaServiceFactory } from "../../services/mangaService";

export const MangaDetails = () => {
    const {mangaId} = useParams();
    const {userId, isAuthenticated} = useAuthContext();
    const [manga, setManga] = useState({});
    const mangaService = useService(mangaServiceFactory);

    useEffect(() => {
        mangaService.getOne(mangaId)
        .then(state => setManga(state));
    }, [mangaId, mangaService]);

    const isOwner = manga._ownerId === userId;


  return (
    <section id="game-details">
      <h1>Manga Details</h1>
      <div className="info-section">
        <div className="manga-header">
          <img className="manga-img" src={manga.imageUrl} alt ="" />
          <h1>{manga.title}</h1>          
          <p className="type">{manga.genre}</p>
        </div>

        <p className="text">{manga.summary}</p>
        

        {isOwner && (
          <div className="buttons">
            <Link to={`/catalog/${manga._id}/edit`} className="button">
              Edit
            </Link>
            <button className="button" >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} */}
    </section>
  );
};
