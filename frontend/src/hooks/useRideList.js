import { useQuery } from "@tanstack/react-query";
import { getRideList } from "../services/RideList";

export function useRideList() {
  const query = useQuery({
    queryFn: getRideList,
    queryKey: ["ride-list"],
  });

  return query;
}