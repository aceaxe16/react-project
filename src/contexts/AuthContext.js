import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useLocalStorage("auth", {});

  const authService = authServiceFactory(auth.accessToken)

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data);
    if (result.code) {
      //TODO error handle
      console.log("Problem");
    } else {
      setAuth(result);
      navigate("/home");
    }
  };
  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...registerData } = data;
    if (confirmPassword !== registerData.password) {
      //TODO password and confirm password must match error handle
      return;
    }
    const result = await authService.register(registerData);
    if (result.code) {
      //TODO error handle
      console.log("Problem");
    } else {
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
    isAuthenticated: !!auth.accessToken    
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