import { useParams, Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "../data/service";
import type { Product } from "../Types/typeProduct";
import styles from "./ProductDetail.module.css"

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
    // lógica para agregar al carritods
  };

  return (
    <article className={styles.Container}>
      <img className={styles.photo} src={product.src} alt={product.titulo} />
      <h1>{product.titulo}</h1>
      <h3>${product.precio}</h3>
      <h3>{product.stock ? "Disponible" : "Agotado"}</h3>
      <h3>{product.category}</h3>

      <Link to="/cart">
        <button onClick={onAddProduct}>Agregar al carrito</button>
      </Link>

      <button onClick={() => deleteMutation.mutate()}>Eliminar</button>
      <Link to="/">Volver al inicio</Link>
    </article>
  );
}

export default ProductDetail;
