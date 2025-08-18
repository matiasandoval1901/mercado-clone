import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
const Layout = () => {
  
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

//outltet renderiza las paginas
