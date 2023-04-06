import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { mangaServiceFactory } from "../../services/mangaService";

import Button from "react-bootstrap/Button";
import { DeleteBtn } from "./DeleteBtn";

export const MangaDetails = () => {
    const {mangaId} = useParams();
    const {userId, isAuthenticated} = useAuthContext(); //isAuthenticated
    const [manga, setManga] = useState({});
    const mangaService = useService(mangaServiceFactory);

    useEffect(() => {
        mangaService.getOne(mangaId)
        .then(state => setManga(state));
    }, [mangaId]);

    const isOwner = manga._ownerId === userId;

    // const findRemoveUserId = (userArr,userId) => {
    //   const index = userArr.indexOf(userId);
    //   userArr.splice(index, 1);
    //   return userArr
    // }

    // const likeFunction = (manga) => {
    //   if(manga.likes["users"].includes(userId)){
    //     const data = {...manga, likes:{
    //       count: manga.likes.count -1,
    //       users: findRemoveUserId(manga.likes["users"], userId),
    //     }};
    //     return data;
    //   }else{
    //     const data = {...manga, likes:{
    //       count: manga.likes.count +1,
    //       users: [...manga.likes["users"], userId],
    //     }};
    //     return data;
    //   }    
    // }

  //   const onClick = async() => {
  //   await mangaService.edit(mangaId, likeFunction(manga));
  //   setManga(manga);
  // };

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
        <div>
          {isAuthenticated && (
            <Button variant="primary" >
              Like
            </Button>
          )}
          <span>88</span>
        </div>

        {isOwner && (
          <div className="buttons">
            <Link to={`/catalog/${manga._id}/edit`} className="button">
              Edit
            </Link>
            <DeleteBtn mangaId = {mangaId}/>
          </div>
        )}
      </div>

      {/* {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} */}
    </section>
  );
};
