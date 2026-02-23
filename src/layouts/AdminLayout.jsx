import { Outlet } from "react-router";
import Menu from "../components/Menu";

const AdminLayout = () => {
    return (
        <div className="flex">
            <Menu />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;