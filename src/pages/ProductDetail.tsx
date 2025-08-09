// src/Pages/ProductDetail.tsx
import { useParams, Link } from "react-router-dom";
import { response } from "../data/data";
import type { Product } from "../types/typeProducts";

function ProductDetail() {
  //useparams devuelve un objeto con los parámetros de la URL. en este caso product/:id
  const { id } = useParams<{ id: string }>();

  // Buscar el producto en los datos locales
  const allProducts: Product[] = [
    ...response.productrecommended.product,
    ...response.mostsoldout.product,
    ...response.offers.product,
    ...response.searches.product,
  ];

  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  //funcion para agregar los productos al carrito
  const onAddProduct = () => {};
  return (
    <div style={{ padding: "2rem" }}>
      <img src={product.src} alt={product.titulo} width="200" />
      <h1>{product.titulo}</h1>
      <h3>${product.precio}</h3>

      {/* hay que agregar una funcion para agregarlo al carrito al presionar*/}
      <Link to="/cart">
        <button  onClick={onAddProduct}>Agregar al carrito</button>
      </Link>
    </div>
  );
};
export default ProductDetail;



 //aca dejo el codigo de la funcionalidad del boton de agregar al carrito


//funcion para agregar los productos al carrito
    //const onAddProduct = () => {
    //console.log("before", countproduct);
      //crea un nuevo producto
    // const newProduct = {
//id: Date.now(), //crea un nuevo id usando la hora actual
    //   title, //props
    //   price,
    //   methods,
    //   src,
    //   quantity: 1, //el producto comienza con una unidad
    // };
       //actualizar el estado del carrito
    // setAllproducts([...allproducts, newProduct]); //el spread (...) copia los productos existentes
    // //actualizar el estado de countproduct, que va sumando en 1
    // setCountproduct(countproduct + 1);
    // console.log("after", countproduct + 1);
  // };

   //detecta si el producto ya esta en el carrito 
   //const existingProduct = allproducts.find((p) => p.title === title);
   //si existe entonces mostrar -|+

   //para aumentar la cantidad especifica de un producto
   //se pasa un argumento (title) se recorre la array de productos, si hay coincidencias, se le suma 1
   //const handleIncrease = (title: string) => {
      //const updated = allproducts.map((product) => {
      // if (product.title === title) {
      //   return { ...product, quantity: product.quantity + 1 };
      //  }
     //  return product; //si no hay coincidencias devuelve el valor inicial
     //});
     //setAllproducts(upd//ated); //se actualiza el estado
     //setCountproduct(countproduct + 1); //se actuliza la cantidad
    //};
     //disminuir la cantidad o eliminarla
     //se busca el producto en el carrito
    //const handleDecrease = (title: string) => {
    //  const product = allproducts.find((p) => p.title === title);
    //  if (!product) return;
         //si el producto es 1 y se resta, este se emilina del carrito con filter
    //  if (product.quantity === 1) {
    //    const filtered = allproducts.filter((p) => p.title !== title);
    //    setAllproducts(filtered); //se actualiza el estado
    //  } else {
    //    const updated = allproducts.map((p) =>
    //      p.title === title ? { ...p, quantity: p.quantity - 1 } : p
    //    ); //si es mayor a 1, se resta 1
    //    setAllproducts(updated);
    //  }

    //  setCountproduct(countproduct - 1); //se resta al contador y se actualiza
    //};
   


        //<button onClick={onAddProduct} className={styles.button}>
        //  Añadir al carrito
        //</button>
