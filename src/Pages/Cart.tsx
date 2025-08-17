import { useCart } from '../Context/cartContext';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom'; // ← CORREGIDO: era 'react-router', debe ser 'react-router-dom'

function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <>
      <div className={styles.containerCart}>

        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>El carrito está vacío.</p>
        ) : (
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img
                  src={item.src}
                  alt={item.titulo}
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <h3 className={styles.productName}>{item.titulo}</h3>
                  <div className={styles.row}>
                    <span className={styles.quantity}>Cantidad: {item.quantity}</span>
                    <span className={styles.price}>${item.precio}</span>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                    <Link
                      to="/buy"
                      state={{
                        product: item,
                      }}
                    >
                      <button className={styles.buybutton}>Comprar</button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
         {cart.length > 0 && (
          <div className={styles.totalContainer}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalAmount}>${total.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <Link className={styles.backButton} to="/">
          Volver
        </Link>
      </div>
    </>
  );
}

export default Cart;
