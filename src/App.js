import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Aplikasi kontak app</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
