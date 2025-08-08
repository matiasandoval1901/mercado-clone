import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

//Props reibidas del componente Padre
type ProductCardProps = {
  id: number;
  title: string;
  price: number;
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
