import Navbar from "../components/Navbar/Navbar";
import CoverImage from "../components/CoverImage/CoverImage";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductCardContainer from "../components/ProductCardContainer/ProductCardContainer";
import { response } from "../data/data";
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../contex/DataContex";
import { Link } from "react-router-dom";

function Home() {
  const {
    allproducts,
    setAllproducts,
    total,
    setTotal,
    countproduct,
    setCountproduct,
  } = useContext(dataContext);
  
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const categories = [
    { title: response.productrecommended.categorytitle, product: response.productrecommended.product },
    { title: response.mostsoldout.categorytitle, product: response.mostsoldout.product },
    { title: response.offers.categorytitle, product: response.offers.product },
    { title: response.searches.categorytitle, product: response.searches.product },
  ];

  const allProducts = categories.flatMap((cat) =>
    cat.product.map((product) => ({
      ...product,
      category: cat.title,
    }))
  );

  const productosFiltrados = allProducts.filter((product) => {
    const coincideBusqueda = product.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === "" || product.category === categoriaSeleccionada;
    return coincideBusqueda && coincideCategoria;
  });

  useEffect(() => {
    setBusqueda("");
  }, [categoriaSeleccionada]);

  return (
    <>
      <Navbar
        allproducts={allproducts}
        setAllproducts={setAllproducts}
        total={total}
        setTotal={setTotal}
        countproduct={countproduct}
        setCountproduct={setCountproduct}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
      />
      <CoverImage />
      // filtrado por categorias y busqueda del usuario
      {busqueda !== "" || categoriaSeleccionada !== "" ? (
        productosFiltrados.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          <ProductCardContainer title="Resultados">
            {productosFiltrados.map((product) => (
              <Link key={product.id} to={`/producto/${product.id}`}>
                <ProductCard
                  title={product.titulo}
                  price={product.precio}
                  methods={product.metodo}
                  src={product.src}
                  allproducts={allproducts}
                  setAllproducts={setAllproducts}
                  total={total}
                  setTotal={setTotal}
                  countproduct={countproduct}
                  setCountproduct={setCountproduct}
                />
              </Link>
            ))}
          </ProductCardContainer>
        )
      ) : (
        categories.map((category) => (
          <ProductCardContainer key={category.title} title={category.title}>
            {category.product.map((product) => (
              <Link key={product.id} to={`/producto/${product.id}`}>
                <ProductCard
                  title={product.titulo}
                  price={product.precio}
                  methods={product.metodo}
                  src={product.src}
                  allproducts={allproducts}
                  setAllproducts={setAllproducts}
                  total={total}
                  setTotal={setTotal}
                  countproduct={countproduct}
                  setCountproduct={setCountproduct}
                />
              </Link>
            ))}
          </ProductCardContainer>
        ))
      )}
    </>
  );
}

export default Home;
