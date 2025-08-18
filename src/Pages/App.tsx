import './App.css';
import ProductCard from '../components/ProductCard';
import ProductCardContainer from '../components/ProductCardContainer';
import CoverImage from '../components/CoverImage'

import { response } from '../data/data';


function App() {
 

  const categories = [
    {title: response.productrecommended.categorytitle,product: response.productrecommended.product},
    {title: response.mostsoldout.categorytitle,product: response.mostsoldout.product},
    {title: response.offers.categorytitle,product: response.offers.product},
    {title: response.searches.categorytitle,product: response.searches.product},
  ];//object destructuring

  return(
    <div>
      <CoverImage/> 
      {categories.map((category) => (
        <ProductCardContainer key= {category.title} title= {category.title}>
          {category.product.map((product) => {
            return (
              <ProductCard

              id= {product.id}
              title= {product.titulo}
              price= {product.precio}
              methods={product.metodo}
              src={product.src} 
              >

              </ProductCard>
            ) //a cada productCard se le pasa las props y estados/funciones globales
          })}
        </ProductCardContainer>

      ))}
        

    </div>
  )
  
}

export default App
