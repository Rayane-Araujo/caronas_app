import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RideList } from "./pages/RideList";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Login />}  /> 
        <Route path="/register" element={<Register />} />
        <Route path="/ride-list" element={<RideList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  );
};

export default AppRoutes;
