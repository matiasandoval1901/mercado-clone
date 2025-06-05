import styles from './ProductCard.module.css';


type ProductCardProps = {
  title: string;
  price: string;
  methods: string;
  src: string;
}

function ProductCard (props: ProductCardProps) {
  const {
    title,
    price,
    methods,
    src,
  } = props;
  return (
    <article className= {styles.container}>
      <img className={styles.image} src={src}></img>
      <div className={styles.content}>
        <h2 className= {styles.title}>{title}</h2>
        <p className={styles.price}>${price}</p>
        <p className={styles.methods}>{methods} </p>
        
        <button className={styles.button}>Comprar</button>
      </div>
    </article>
  );
};

export default ProductCard;
