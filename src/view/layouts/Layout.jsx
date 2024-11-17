import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <div className="layout">
        <Header />
        <main className="mainContent">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
