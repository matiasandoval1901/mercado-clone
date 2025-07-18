import { Link } from "react-router-dom";


const ProductDetail = () => {
    return (
        <>
        <Link to={"/"}>Volver</Link>
        <Link to={"/cart"}>
          <button>Añadir al carrito</button>
        </Link>
        </>
    )
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

