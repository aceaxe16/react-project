import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [error, setError] = useState({});
  

  const authService = authServiceFactory(auth.accessToken)

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data);
    if (result.code) {
      alert(result.message);      
    } else {
      setAuth(result);
      navigate("/home");
    }
    
  };
  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...registerData } = data;
    if (confirmPassword !== registerData.password) {
      alert("Password and Confirm Password have to match");
      return;
    }
    const result = await authService.register(registerData);
    if (result.code) {
      //TODO error handle
      alert(result.message);
      console.log("Problem");
    }else {
      setAuth(result);      
      navigate("/home");
    }
  };
  const onLogout = async() => {
    await authService.logout();
    setAuth({});
  }

  

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    error,    
  };

  return(
    <>
    <AuthContext.Provider value = {context}>
        {children}
    </AuthContext.Provider>
    </>
  )
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};