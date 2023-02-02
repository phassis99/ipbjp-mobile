import HamburgerMenu from "../hamburguer-menu/hamburguer-menu.component";
import "./header.component.scss";

const Header = () => {
  return (
    <header className="header-bar">
      <HamburgerMenu />
      <h1>IPB Jardim da Penha</h1>
      <button>
        <i className="fa-duotone fa-user"></i>
      </button>
    </header>
  );
};

export default Header;
