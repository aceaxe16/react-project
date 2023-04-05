import Table from "react-bootstrap/Table";

export const Home = () => {
  return (
    <>
      <h1>Top 5 manga</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Manga</th>
            <th>Released since</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vagabond</td>
            <td>2005</td>
            <td>Ongoing</td>
          </tr>
          <tr>
            <td>Fairy tail</td>
            <td>2007</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
