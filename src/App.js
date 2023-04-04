import { Routes, Route, useNavigate } from "react-router-dom";


import {AuthProvider} from './contexts/AuthContext';
import {mangaServiceFactory} from './services/mangaService';

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
import { useEffect, useState } from "react";


function App() {
  const navigate = useNavigate();
  const [mangas, setMangas] = useState([]);
  const mangaService = mangaServiceFactory();
  
  useEffect(() => {
    mangaService.getAll()
    .then(state => setMangas(state));
  }, [mangaService]);


  const onAddMangaSubmit = async(data) => {
    const newManga = await mangaService.create(data);

    setMangas(state => [...state, newManga]);
    navigate('/catalog');
  };

  const onMangaEditSubmit = async(values) => {
    const result = await mangaService.edit(values._id, values);
    setMangas(state => state.map(x => x._id === values._id ? result : x));

    navigate(`/catalog/${values._id}`);
  }

 

  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-manga" element={<AddManga onAddMangaSubmit = {onAddMangaSubmit}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog mangas = {mangas}/>} />
          <Route path="/catalog/:mangaId" element={<MangaDetails/>} />
          <Route path="/catalog/:mangaId/edit" element={<EditManga onMangaEditSubmit ={onMangaEditSubmit}/>} />
          <Route path="/profile" element={<Profile mangas = {mangas}/>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
