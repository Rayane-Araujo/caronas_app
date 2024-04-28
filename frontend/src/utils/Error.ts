import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface ErrorResponse {
  msg: string;
}

export const handleError = (error: unknown) => {
  const axiosErr = error as AxiosError<ErrorResponse>;

  let errorMessage = "Erro";
  if (
    axiosErr?.response?.data?.msg &&
    Array.isArray(axiosErr.response.data.msg)
  ) {
    errorMessage = axiosErr.response.data.msg.join("\n");
  } else if (typeof axiosErr?.response?.data?.msg === "string") {
    errorMessage = axiosErr.response.data.msg;
  }

  console.error("Detalhes do erro:", axiosErr.response || error);
  toast.error(errorMessage);
};