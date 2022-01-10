import s from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
  let sidebarElements = props.sidebar.names.map((el) => {
    return <SidebarItem name={el.name} />;
  });

  return (
    <div className={s.sidebar}>
      <h2>Friends</h2>
      <div>
        <ul>{sidebarElements}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
