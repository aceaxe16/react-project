import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";
import * as authServices from './services/AuthServices';

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
    
    const result = await authServices.Login(data);
    if(result.code){
      console.log("Problem");
    }else{
      setAuth(result);
      console.log(result);
    }
    
    
    
    
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
