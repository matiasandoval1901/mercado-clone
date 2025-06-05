import styles from "./Navbar.module.css";

function Navbar () {
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <img src="/public/logo-mercado-clone.png" alt="Mercado Libre" />
          <p>Enviar a</p>
          <p>📍 Tu Ubicación</p>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Buscar productos, marcas y más..." />
          <button>Buscar</button>
        </div>
        <div className={styles.userSection}>
          <p>Creá tu cuenta</p>
          <p>Ingresa</p>
          <p>Tus Compras</p>
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
