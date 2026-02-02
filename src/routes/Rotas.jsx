import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Funcionarios from "../pages/admin/Funcionarios";
import Cargos from "../pages/admin/Cargos";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="funcionarios" element={<Funcionarios />} />
                    <Route path="cargos" element={<Cargos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;