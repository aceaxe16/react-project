import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";

import { Header } from "./components/Header/Header";
import { Home } from "./components/HomePage/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Catalog } from "./components/Catalog/Catalog";
import { Profile } from "./components/Profile/Profile";
import { AddManga } from "./components/AddManga/AddManga";
import { useState } from "react";


function App() {
  const [auth, setAuth] = useState({});

  const onLoginSubmit = async (data) => {
    
    console.log(data);
  };

  return (
    <AuthContext.Provider value = {{onLoginSubmit}}>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-manga" element={<AddManga />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
