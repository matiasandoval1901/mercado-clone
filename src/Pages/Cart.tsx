import { useContext } from 'react';
import { dataContext } from '../Context/dataContext';
import { Link } from 'react-router';

const Cart = () => {
  const { allproducts, total, countproduct, setAllproducts, setTotal, setCountproduct } = useContext(dataContext);

  const handleRemove = (id: number) => {
    const updated = allproducts.filter(item => item.id !== id);
    const removed = allproducts.find(item => item.id === id);
    const newTotal = removed ? total - parseFloat(removed.precio.replace('.', '')) : total;

    setAllproducts(updated);
    setTotal(newTotal);
    setCountproduct(countproduct - 1);
  };

  return (
    <>
    <div style={{ padding: '2rem' }}>
      <h1>Carrito</h1>
      <p>Total de productos: {countproduct}</p>

      {allproducts.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {allproducts.map((item) => (
            <li key={item.id}>
              {item.titulo} - ${item.precio}
              <button onClick={() => handleRemove(item.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Total: ${total.toLocaleString()}</h2>
    </div>
    <Link to="/buy"> Comprar
    </Link>
    <Link to= "/">
        Volver
    </Link>
    </>
  );
};

export default Cart;
