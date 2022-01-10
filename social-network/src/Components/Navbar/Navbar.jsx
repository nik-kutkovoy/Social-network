import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
  return (
    <div className={s.navbar}>
      <ul className={s.navbar_ul}>
        <li>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? s.active : "")}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={(navData) => (navData.isActive ? s.active : "")}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? s.active : "")}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? s.active : "")}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? s.active : "")}
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <Sidebar sidebar={props.state} />
    </div>
  );
};

export default Navbar;
