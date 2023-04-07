import Table from "react-bootstrap/Table";
import { useMangaContext } from "../../contexts/MangaContext";

export const Home = () => {
  const { mangas } = useMangaContext();

  return (
    <>
      {/* <h1>Top 5 manga</h1> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Manga</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mangas.map((x) => (
            <tr key={x._id} {...x}>
              <td>{x.title}</td>
              <td>{x.author}</td>
              <td>{x.status}</td>
            </tr>
          ))}
          {(mangas.length == 0 || mangas[0] == "404") && (
            <h3 className="no-content">No mangas have been added yet</h3>
          )}
        </tbody>
      </Table>
    </>
  );
};
