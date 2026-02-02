import { NavLink } from "react-router";

const Menu = () => {
    return ( 
        <div>
            <nav className="flex flex-col">
                <NavLink to= "/admin">
                    dashboard 
                </NavLink>
                <NavLink to= "/admin/funcionarios">
                    funcionários
                </NavLink>
                <NavLink to= "/admin/cargos">
                    cargos
                </NavLink>
            </nav>
        </div>
     );
}
 
export default Menu;