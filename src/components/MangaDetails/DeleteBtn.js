import { useNavigate } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { mangaServiceFactory } from "../../services/mangaService";

import { useMangaContext } from "../../contexts/MangaContext";

import './Details.css';

export const DeleteBtn = ({
   mangaId,
   }) => {

  const navigate = useNavigate();
  const mangaService = useService(mangaServiceFactory);
  const {onMangaDelete} = useMangaContext();
  

  const onClick = () => {
    onMangaDelete(mangaId)
    navigate("/catalog");
  };

  return (
    <button className="button" onClick={onClick}>
      Delete
    </button>
  );
};
