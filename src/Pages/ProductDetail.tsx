import { useParams, Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "../data/service";
import type { Product } from "../Types/typeProduct";
import styles from "./ProductDetail.module.css"
import miImagen from "../assets/detail.jpeg"
import miImagen2 from "../assets/detail2.jpeg"
import { useCart } from "../Context/cartContext";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => productService.getProductById(String(id)),
    enabled: !!id, // evita que se ejecute si id es undefined
  });

  const deleteMutation = useMutation({
    mutationFn: () => {
      if (!productId) throw new Error("ID no válido");
      return productService.deleteProduct(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productsDB"] });
      navigate("/"); // redirige al inicio tras eliminar
    },
  });

  if (isLoading) return <p>Cargando producto...</p>;
  if (error || !product) return <p>Producto no encontrado</p>;

  

  const onAddProduct = () => {
    addToCart(product); // ✅ agrega el producto al carrito
    // opcional: mostrar una alerta, toast o feedback
  };


  return (
    <article className={styles.Container}>
      <img className={styles.photo} src={product.src} alt={product.titulo} />
      <div className={styles.Container2}>
       <p className={styles.name}>{product.titulo}</p>
       <h3 className={styles.data1}>${product.precio}</h3>
       <h3 className={styles.metodosPay}>{product.metodo}</h3>
       <img className={styles.detail} src={miImagen}></img>
       <h3 className={styles.stock}>Stock {product.stock ? "Disponible" : "Agotado"}</h3>
       <Link to="/cart">
         <button className={styles.cart} onClick={onAddProduct}>Agregar al carrito</button>
       </Link>
       <button className={styles.botones} onClick={() => deleteMutation.mutate()}>Eliminar</button>
       <Link to="/">
         <button className={styles.back}> Volver a inicio</button>
        </Link>
        
      </div>
      <div className={styles.Container3}>
        <img className={styles.commerce} src={miImagen2}></img>
      </div>


    </article>
  );
}

export default ProductDetail;
