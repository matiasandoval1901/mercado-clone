import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

<<<<<<< HEAD:src/components/ProductCard/ProductCard.tsx
=======
//Props reibidas del componente Padre
>>>>>>> d5489381cae879ef3198dde6a47219d5ed1b6420:src/components/ProductCard.tsx
type ProductCardProps = {
  id: number;
  title: string;
  price: string;
  methods: string;
  src: string;
}

function ProductCard ( {id, title, price, methods, src}: ProductCardProps) {

  return (
    <article className= {styles.container}>
      <img className={styles.image} src={src}></img>
      <div className={styles.content}>
        <h2 className= {styles.title}>{title}</h2>
        <p className={styles.price}>${price}</p>
        <p className={styles.methods}>{methods} </p>
       
        <Link to={`/products/${id}`}>
          <button className={styles.button}>Ver Producto</button>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
