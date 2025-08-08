import { Link } from "react-router";
import styles from "./Checkout.module.css"

export const Checkout = () => {
  return (
    <article className={styles.containerform}>
      <h2 className={styles.title}>Resumen de compra</h2>
      <hr className={styles.divider} />

      <div className={styles.formGroup}>
        <label className={styles.label}>Producto</label>
      </div>
      

      <div className={styles.formGroup}>
        <label className={styles.label}>Envío</label>
      </div>
      <hr className={styles.divider} />

      <div className={styles.formGroup}>
        <label className={styles.label}>Subtotal</label>
      </div>
      <hr className={styles.divider} />

      <div className={styles.formGroup}>
        <label className={styles.label1}>Pagás</label>
      </div>
      <hr className={styles.divider} />

      <div className={styles.formGroup}>
        <label className={styles.totalLabel}>Total</label>
      </div>

      <div>
        <Link to="/">
          <button className={styles.buy}>Finalizar compra</button>
        </Link>
        <Link to="/">
          <button className={styles.inicio}>Volver a inicio</button>
        </Link>
      </div>
    </article>
  );
};

export default Checkout;

//SIMULACION DE COMPRA