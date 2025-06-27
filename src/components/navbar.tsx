import styles from "./Navbar.module.css";
import  React  from "react";

type NavbarProps = {
  allproducts: any[];
  setAllproducts: (arr: any[]) => void;
  total: number;
  setTotal: (value: number) => void;
  countproduct: number;
  setCountproduct: (count: number) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  allproducts,
  setAllproducts,
  total,
  setTotal,
  countproduct,
  setCountproduct,
}) => {
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
          <input type="text" placeholder="Buscar productos, marcas y más..." />
          <button>Buscar</button>
        </div>
        <div className={styles.userSection}>
          <img className={styles.publicity} src='https://http2.mlstatic.com/D_NQ_779354-MLA82788204133_022025-OO.webp'/>
          <p>
            <a className={styles.loginsection} href="#">Creá tu cuenta</a>
            <a className={styles.loginsection} href="#">Ingresa</a>
           <button onClick={() => setActive(!active)}>
             <span className={styles.countproduct} id="contador_productos">{countproduct}</span>
             <img  className={styles.cart} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"/>
            </button>
          </p>
        </div>
      
      </div>

      <div className={styles.bottomRow}>
        <a href="#">Categorías</a>
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
