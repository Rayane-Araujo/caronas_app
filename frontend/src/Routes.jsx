import Login  from "./pages/Login";
import Register from "./pages/Register";
import { BrouserRouter as Router, Routes, Route } from "react-router-dom";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes;