import Header from "../Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ height: "calc(100vh - 150px)" }}>{<Outlet />}</main>
      <footer style={{ borderTop: "2px solid lightgrey" }}>
        <h1>2024</h1>
      </footer>
    </>
  );
};