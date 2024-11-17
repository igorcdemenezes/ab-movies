import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "/Logo.svg";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <Link to="/movie" className="">
          <img src={Logo} className={styles.logo} />
        </Link>
        <div className={styles.navMid}>
          <div className={styles.navExp}>
            <img />
            <Link to="/movie">Explorar</Link>
          </div>
          <Link to="/my-movies">Meus Filmes</Link>
        </div>
        <div className={styles.user}>
          <p>Olá, Nome</p>
          <div className={styles.avatar}>
            <img
              src="https://avatars.githubusercontent.com/u/109683955?v=4"
              alt="Imagem usuário"
            />
          </div>
          <div>Logout</div>
        </div>
      </nav>
    </header>
  );
}
