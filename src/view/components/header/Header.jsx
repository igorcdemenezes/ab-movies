import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "/Logo.svg";
import Logout from "/Logout.svg";
import Popcorn from "/Popcorn.svg";
import FilmSlate from "/FilmSlate.svg";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <Link to="/explore" className="">
          <img src={Logo} className={styles.logo} />
        </Link>
        <div className={styles.navMid}>
          <div className={styles.navExp}>
            <Link to="/explore" className={styles.navExpLink}>
              <img src={Popcorn} className={styles.popcornIcon} />
              <p>Explorar</p>
            </Link>
          </div>
          <div className={styles.navMyMovies}>
            <img src={FilmSlate} className={styles.FilmSlateIcon} />
            <Link to="/my-movies">Meus Filmes</Link>
          </div>
        </div>
        <div className={styles.user}>
          <p>Olá, Igor</p>
          <div className={styles.avatar}>
            <img
              src="https://avatars.githubusercontent.com/u/109683955?v=4"
              alt="Imagem usuário"
            />
          </div>
          <div className={styles.logout}>
            <a>
              <img src={Logout} className={styles.logoutIcon} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
