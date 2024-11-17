import styles from "./Header.module.css";
import Logo from "/Logo.svg";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <a className="">
          <img src={Logo} className={styles.logo} />
        </a>
        <div className={styles.navMid}>
          <div className={styles.navExp}>
            <img />
            <a src="">Explorar</a>
          </div>
          <a src="">Meus Filmes</a>
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
