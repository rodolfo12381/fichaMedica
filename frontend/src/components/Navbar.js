import './Navbar.css'

import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  return (
    <nav id="nav">
      <Link to="/">
        <h2>Ficha Médica Digital</h2>
      </Link>
      <ul id="nav-links">
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <BsFillPersonFill />
              </NavLink>
            </li>
            {/* <li>
              <span>Sair</span>
            </li> */}
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
      </ul>
    </nav>
  )
}

export default NavBar