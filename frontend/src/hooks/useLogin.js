import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./useApi";

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const response = await api.post("/login", formData);
      window.localStorage.setItem("userLoggedIn", response.data.userId);
      navigate("/ride-list");
    } catch (error) {
      setError("Usuário ou senha inválidos");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return {
    formData,
    isLoggingIn,
    error,
    handleInputChange,
    handleLogin,
  };
};
