import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RideList } from "./pages/RideList";

const AppRoutes = () => {
  return (
   
      <Routes>
        <Route path="/login" element={<Login />}  /> 
        <Route path="/register" element={<Register />} />
        <Route path="/ride-list" element={<RideList />} />
      </Routes>
   
  );
};

export default AppRoutes;
