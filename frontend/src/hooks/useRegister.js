import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./useApi";
import { toast } from "react-toastify";
import { handleError } from "../utils/Error";

export const useRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    pass: "",
    confirmPass: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const signUpUser = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const response = await api.post(`/users`, formData);
      const message = response.data.message ?? "Cadastro realizado com sucesso";
      toast.success(message);
      navigate("/login");
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, navigate]);

  useEffect(() => {
    if (!isSubmitting) return;
    signUpUser();
  }, [isSubmitting, signUpUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return {
    formData,
    handleChange,
    isSubmitting,
    handleSubmit,
  };
};