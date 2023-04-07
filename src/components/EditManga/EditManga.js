import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { mangaServiceFactory } from "../../services/mangaService";
import { useMangaContext } from "../../contexts/MangaContext";

export const EditManga = () => {
  const { onMangaEditSubmit } = useMangaContext();

  const { mangaId } = useParams();
  const mangaService = useService(mangaServiceFactory);
  const { values, changeHandler, onSubmit, validateValues } = useForm(
    {
      _id: "",
      title: "",
      genre: "",
      iamgeUrl: "",
      summary: "",
      author: "",
      status: "",
    },
    onMangaEditSubmit
  );

  useEffect(() => {
    mangaService.getOne(mangaId).then((result) => {
      validateValues(result);
    });
  }, [mangaId]);

  return (
    <section id="edit-page" className="auth">
      <form id="edit" method="post" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Manga title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={changeHandler}
          />

          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={values.genre}
            onChange={changeHandler}
          />

          <label htmlFor="manga-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
          />

          <label htmlFor="author">Image:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={values.author}
            onChange={changeHandler}
          />

          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={values.status}
            onChange={changeHandler}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={changeHandler}
          ></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
};
