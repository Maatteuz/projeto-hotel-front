import { Outlet } from "react-router";
import Menu from "../components/Menu";

const AdminLayout = () => {
    return (
        <div className="flex">
            <Menu />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;