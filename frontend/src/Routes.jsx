import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RideList } from "./pages/RideList";
import NotFound from "./pages/NotFound";
import { RideCreate } from "./pages/RideCreate";
import { RideDetails } from "./pages/RideDetails";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />}  /> 
        <Route path="/register" element={<Register />} />
        <Route path="/ride-create" element={<RideCreate />} />
        <Route path="/ride-list" element={<RideList />} />
        <Route path="/ride-details" element={<RideDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRoutes;
