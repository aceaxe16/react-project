import { useNavigate } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { mangaServiceFactory } from "../../services/mangaService";

export const DeleteBtn = ({ mangaId }) => {
  const navigate = useNavigate();
  const mangaService = useService(mangaServiceFactory);

  const onDeleteMnagaClick = (id) => {
    mangaService.deleteManga(id);
  };

  const onClick = () => {
    onDeleteMnagaClick(mangaId);
    navigate("/catalog");
  };
  return (
    <button className="button" onClick={onClick}>
      Delete
    </button>
  );
};
