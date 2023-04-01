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
import { useState } from "react";


function App() {
  const navigate = useNavigate();
  const [mangas, setMangas] = useState([]);
  const mangaService = mangaServiceFactory();
  

  const onAddMangaSubmit = async(data) => {
    const newManga = await mangaService.create(data);

    setMangas(state => [...state, newManga]);
    navigate('/catalog');
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
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
