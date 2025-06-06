import styles from "./Navbar.module.css";

function Navbar () {
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <img className={styles.img} src="/public/logo-mercado-clone.png" alt="Mercado Libre" />
          <h1 className={styles.h1}>Enviar a</h1>
          <button className={styles.button}>Tu ubicacion</button>
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
            <a className={styles.loginsection} href="#">Mi carrito</a>
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
}

export default Navbar
