import Sidenav from "../side-nav/side-nav.component";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Sidenav />
      <h1>IPB Jardim da Penha</h1>
      <button></button>
    </header>
  );
};

export default Header;
