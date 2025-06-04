import styles from "./Navbar.module.css";

function Navbar () {
  return (
    <nav className={styles.navContainer}>
        <div className={styles.imgContainer}>
            <img 
              src="/mercado-libre-logo.png" 
              alt="Mercado Libre" 
            />
        </div> 
        
        <div className={styles.locationContainer}>
            <div> Enviar a </div>
            <div> Tu ubicación</div>
        </div>

          <div className={styles.inputContainer}>
            <div>
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
              />
              <button>
               Buscar    
              </button>
            </div>
          </div>

          <div className={styles.linkRigth}>
            <a href="#">Creá tu cuenta</a>
            <a href="#">Ingresá</a>
            <a href="#">Mis Compras</a>
            {/* icono carrito */}
          </div>
          <div className={styles.linkContainer}>
            <a href="#">Categorías</a>
            <a href="#">Ofertas</a>
            <a href="#">Historial</a>
            <a href="#">Vender</a>
            <a href="#">Ayuda</a>
          </div>
    </nav>
  );
}

export default Navbar
