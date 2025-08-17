import { Link } from "react-router-dom"; // ⚠️ también corriges el import
import { useLocation } from "react-router-dom";
import styles from "./Checkout.module.css";


const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <article className={styles.containerform}>
      <h2 className={styles.title}>Resumen de compra</h2>
      <hr className={styles.divider} />

      {product ? (
        <>
          <div className={styles.formGroup}>
            <label className={styles.label}>Producto:</label>
            <img src={product.src} alt={product.titulo} className={styles.productImage} />
            <span className={styles.productName}>{product.titulo}</span>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Envío:</label>
            <p className={styles.shipping}>$150</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.formGroup}>
            <label className={styles.label}>Subtotal:</label>
            <p className={styles.subtotal}>${product.precio}</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.formGroup}>
            <label className={styles.label1}>Pagás:</label>
            <p className={styles.pay}>${product.precio + 150}</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.formGroup}>
            <label className={styles.totalLabel}>Total:</label>
            <p className={styles.total}>${product.precio + 150}</p>
          </div>
        </>
      ) : (
        <p>No hay datos del producto. Volvé al carrito.</p>
      )}

      <div>
        <Link to="/">
          <button  className={styles.buy}>Finalizar compra</button>
        </Link>
        <Link to="/">
          <button className={styles.inicio}>Volver a inicio</button>
        </Link>
      </div>
    </article>
  );
};

export default Checkout;