import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RideCreate } from "../services/RideCreate";
import { handleError } from "../utils/Error";

export function useRideCreate() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const mutate = useMutation({
    mutationFn: RideCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ride-create"] });
      toast.success("Sucesso!");
      navigate("/ride-list")
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return mutate;
}