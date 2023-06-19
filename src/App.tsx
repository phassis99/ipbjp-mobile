import styles from "./App.module.scss";

import Header from "./components/header/header.component";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
