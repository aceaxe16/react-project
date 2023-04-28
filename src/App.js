import { Routes, Route } from "react-router-dom";


import {AuthProvider} from './contexts/AuthContext';
import { MangaProvide } from "./contexts/MangaContext";


import { Header } from "./components/Header/Header";
import { Home } from "./components/HomePage/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Catalog } from "./components/Catalog/Catalog";
import { Profile } from "./components/Profile/Profile";
import { Logout } from "./components/Logout/Logout";
import { AddManga } from "./components/AddManga/AddManga";
import { MangaDetails } from "./components/MangaDetails/MangaDetails";
import { EditManga } from "./components/EditManga/EditManga";



function App() {
 

  return (
    <AuthProvider>
      <MangaProvide>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-manga" element={<AddManga/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/catalog/:mangaId" element={<MangaDetails/>} />
          <Route path="/catalog/:mangaId/edit" element={<EditManga/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
      </MangaProvide>
    </AuthProvider>
  );
}

export default App;
