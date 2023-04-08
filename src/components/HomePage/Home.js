import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { useMangaContext } from "../../contexts/MangaContext";
import { useState } from "react";
import { useService } from "../../hooks/useService";
import { mangaServiceFactory } from "../../services/mangaService";
import { Link } from "react-router-dom";

export const Home = () => {
  const { mangas } = useMangaContext(); 
  const [showMangas, setShowMangas] = useState(mangas);
  const mangaService = useService(mangaServiceFactory);   

  const onOngoingClick = () => {
    mangaService.getAll()
    .then((state) => {
      const ongoingMangas = state.filter(x => x.status == "ongoing");
      setShowMangas(ongoingMangas)
    });    
  }

  const onCompletedClick = () => {
    mangaService.getAll()
    .then((state) => {
      const completedMangas = state.filter(x => x.status == "completed"); 
      setShowMangas(completedMangas);
    });    
  }

  const onAllClick = () => {
    mangaService.getAll().then((state) => setShowMangas(state));
  }

  return (
    <>
      {/* <h1>Top 5 manga</h1> */}
      <Button variant="primary" onClick = {onAllClick}>All</Button>
      <Button variant="primary" onClick = {onOngoingClick}>Ongoing</Button>
      <Button variant="primary" onClick = {onCompletedClick}>Completed</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Manga</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {showMangas.map((x) => (
            <tr key={x._id} {...x}>
              <Link to ={`/catalog/${x._id}`}>{x.title}</Link>
              <td>{x.author}</td>
              <td>{x.status}</td>
            </tr>
          ))}
          {(showMangas.length == 0 || showMangas[0] == "404") && (
            <h3 className="no-content">No mangas have been added yet</h3>
          )}
        </tbody>
      </Table>
    </>
  );
};
