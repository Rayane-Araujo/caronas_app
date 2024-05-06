import { api } from "../hooks/useApi";

export async function RideCreate({ origin, destiny, time, date, type, user_id, observation }) {
  const response = await api.post("ride", {
    origin,
    destiny,
    time,
    date,
    type,
    user_id,
    observation
  });
  return response.data;
}

