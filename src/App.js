import { Routes, Route, useNavigate } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";
import * as authServices from './services/AuthServices';

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
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    
    const result = await authServices.Login(data);
    if(result.code){
      //TODO error handle
      console.log("Problem");
    }else{
      setAuth(result);
      navigate('/home');
    }   
  };

  const onRegisterSubmit = async(data) => {
    const {confirmPassword, ...registerData} = data;
    if(confirmPassword !== registerData.password){
      //TODO password and confirm password must match error handle
      return
    }
    const result = await authServices.Register(registerData);
    if(result.code){
      //TODO error handle
      console.log("Problem");
    }else{
      setAuth(result);
      navigate('/home');
    }   
  }

  const onLogout = async() => {
    //TODO authorized logout
    //await authServices.Logout();

    setAuth({});
  }

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken    
  };

  return (
    <AuthContext.Provider value = {context}>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-manga" element={<AddManga />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
