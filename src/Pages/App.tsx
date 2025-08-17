import './App.css';
import ProductCard from '../components/ProductCard';
import ProductCardContainer from '../components/ProductCardContainer';
import CoverImage from '../components/CoverImage'

import { categories } from '../data/data';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../data/service';
import type { Product } from '../Types/typeProduct';
import styles from '../components/ProductCardContainer.module.css'

function App() {
  const {data: productsDB, isLoading, error} = useQuery<Product[]> ({ 
    queryKey : ['productsDB'], 
    queryFn: () => productService.getAllProducts(),
  });

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) {
    console.error("error:", error);
    return <p>Error al cargar productos</p>;
  }

  return(
    <div>
      <CoverImage/> 
      {categories.map((category) => {
        const filteredProducts = productsDB?.filter (
          (product) => product.category === category.id
        );

        return (

         <ProductCardContainer key= {category.id} title= {category.name}>
           { filteredProducts && filteredProducts.map((product) => (
            <div className={styles.productcard} key={product.id}>
              <ProductCard
               key= {product.id}
 
               id= {product.id}
               title= {product.titulo}
               price= {product.precio}
               methods={product.metodo}
               src={product.src} 
              >
              </ProductCard>
            </div>
            ))}
         </ProductCardContainer>
        );
        
      })}
    </div>
  );
  
}

export default App
