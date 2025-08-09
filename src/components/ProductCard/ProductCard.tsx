import styles from './ProductCard.module.css';

type ProductCardProps = {
  title: string;
  price: string;
  methods: string;
  src: string;
  allproducts: any[];
  setAllproducts: (products: any[]) => void;
  countproduct: number;
  setCountproduct: (count: number) => void;
  total: number;
  setTotal: (total: number) => void;
}

function ProductCard ( {
    title,
    price,
    methods,
    src,
    allproducts,
    setAllproducts,
    countproduct,
    setCountproduct,
  }: ProductCardProps) {

    const onAddProduct = () => {
      console.log("before", countproduct);
     const newProduct = {
       id: Date.now(),
       title,
       price,
       methods,
       src,
       quantity: 1,
     };

     setAllproducts([...allproducts, newProduct]);
     setCountproduct(countproduct + 1);
     console.log("after", countproduct + 1);
   };

   //detecta si el producto ya esta en el carrito 
   const existingProduct = allproducts.find((p) => p.title === title);
   //si existe entonces mostrar -|+

   //funciones para sumar y restar productos 
   const handleIncrease = (title: string) => {
      const updated = allproducts.map((product) => {
       if (product.title === title) {
         return { ...product, quantity: product.quantity + 1 };
        }
       return product;
     });
     setAllproducts(updated);
     setCountproduct(countproduct + 1);
    };

    const handleDecrease = (title: string) => {
      const product = allproducts.find((p) => p.title === title);
      if (!product) return;

      if (product.quantity === 1) {
        const filtered = allproducts.filter((p) => p.title !== title);
        setAllproducts(filtered);
      } else {
        const updated = allproducts.map((p) =>
          p.title === title ? { ...p, quantity: p.quantity - 1 } : p
        );
        setAllproducts(updated);
      }

      setCountproduct(countproduct - 1);
    };
   

  return (
    <article className= {styles.container}>
      <img className={styles.image} src={src}></img>
      <div className={styles.content}>
        <h2 className= {styles.title}>{title}</h2>
        <p className={styles.price}>${price}</p>
        <p className={styles.methods}>{methods} </p>
        {existingProduct ? (
         <div className={styles.prueba2}>
           <button className={styles.button2} onClick={() => handleDecrease(title)}>-</button>
           <span className={styles.prueba}>{existingProduct.quantity}</span>
           <button  className={styles.button2} onClick={() => handleIncrease(title)}>+</button>
         </div>
        ) : (
        <button onClick={onAddProduct} className={styles.button}>
          Añadir al carrito
        </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
