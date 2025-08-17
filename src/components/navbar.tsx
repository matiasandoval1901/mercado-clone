
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import React, { useContext} from "react";
import { dataContext } from "../Context/dataContext";

const Navbar: React.FC = () => {
  const {
    countproduct
  } = useContext(dataContext);

  const [active, setActive] = React.useState(false); 
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <img className={styles.img} src="/public/logo-mercado-clone.png" alt="Mercado Libre" />
          <div className={styles.form}>
             <img className={styles.imglocation} src='https://cdn-icons-png.flaticon.com/512/3421/3421853.png'/>
             <button className={styles.location}>
               <span className={styles.h1}>Enviar a</span>
               <br/>
               <span className={styles.h3}>Tu ubicacion</span> 
             </button>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <input type="text"
          placeholder="Buscar productos, marcas y más..."
          //value={busqueda}
          //onChange={(e) => setBusqueda(e.target.value)}
          />
          <button>Buscar</button>
        </div>
        <div className={styles.userSection}>
          <img className={styles.publicity} src='https://http2.mlstatic.com/D_NQ_779354-MLA82788204133_022025-OO.webp'/>
          <p>
            <Link to={"/Create"} className={styles.loginsection}>Haz una venta</Link>
            <a className={styles.loginsection} href="#">Ingresa</a>
           <button onClick={() => setActive(!active)}> 
             <span className={styles.countproduct} id="contador_productos">{countproduct}</span>
             <Link to={"/cart"}>
               <img  className={styles.cart} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"/>
             </Link>
            </button>
          </p>
        </div>
      
      </div>

      <div className={styles.bottomRow}>
        <select 
          >
            <option value="">Categorías</option>
            <option value="PRODUCTOS RECOMENDADOS">Productos Recomendados</option>
            <option value="LOS MAS VENDIDOS">Los Mas Vendidos</option>
            <option value="OFERTAS 50% OFF">Ofertas 50% Off</option>
            <option value="SEGUN TUS BUSQUEDAS">Según Tus Búsquedas</option>
        </select>
        <a href="#">Ofertas</a>
        <a href="#">Cupones</a>
        <a href="#">Supermercado</a>
        <a href="#">Moda</a>
        <a href="#">Vender</a>
        <a href="#">Ayuda</a>
      </div>  
    </nav>
  );
};

export default Navbar
