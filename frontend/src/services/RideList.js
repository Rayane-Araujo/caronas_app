import { api } from "../hooks/useApi";

export async function getRideList() {
  const response = await api.get("ride");
  return response.data;
};