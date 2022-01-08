import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <a href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
      </a>
    </div>
  );
};

export default Header;
