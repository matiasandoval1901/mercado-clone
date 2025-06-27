import './App.css';
import ProductCard from './components/ProductCard';
import ProductCardContainer from './components/ProductCardContainer';
import CoverImage from './components/CoverImage'
import Navbar from './components/navbar';
import { useState } from 'react';

type Product = {
  id: number;
  src: string;
  titulo: string;
  precio: string;
  metodo: string;

};

//aca se define la estructura que debe tener el objeto response
type Response = {
  productrecommended: {
    categorytitle: string;
    product: Product []
  };
  
  mostsoldout:{
    categorytitle: string;
    product: Product[]
  };

  offers:{
    categorytitle: string;
    product: Product[]
  };

  searches:{
    categorytitle: string;
    product: Product[]
  };

};

//objeto response que tiene la estructura del type response
const response: Response = {

  productrecommended: {
    categorytitle: 'PRODUCTOS RECOMENDADOS',
    product: [
      {
        id: 1,
        src: 'https://cdn.laredoute.com/products/2/b/c/2bcc4c3ff093b1f58e18ccc5355c31e4.jpg',
        titulo: 'Zapatilla Astir negro Adidas Original',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 2 ,
        src: 'https://www.manelsanchez.com/uploads/media/images/AB3909-manelsanchez.jpg',
        titulo: 'Mochila Adidas',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 3,
        src: 'https://bizweb.dktcdn.net/100/427/145/products/tui-adidas-mini-airliner-black-it7598-3.jpg?v=1709279391240',
        titulo: 'Cartera Adidas',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 4,
        src: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/3eb03c725a0f45d3ac56a98c0123f2ff_9366/campera-de-presentacion-sereno-19.jpg',
        titulo: 'Campera Adidas Masculina',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 5,
        src: 'https://i.pinimg.com/originals/b4/97/fd/b497fdd048b223d7a5782cf62e8146c5.jpg',
        titulo: 'Chaqueta Adidas Roja',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 6,
        src: 'https://images.journeys.com/images/products/1_658939_ZM.JPG',
        titulo: 'Mochila Adidas',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 7,
        src: 'https://rossettiar.vtexassets.com/arquivos/ids/1649982-800-auto?v=638440292672500000&width=800&height=auto&aspect=true',
        titulo: 'Top rosado deportivo Adidas',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
    ],
  },

  mostsoldout: {
    categorytitle: 'LOS MAS VENDIDOS',
    product: [
      {
        id: 8,
        src: 'https://images.fravega.com/f1000/2a4fef940c3e998a12ae312ca215c373.jpg',
        titulo: 'Caloventor electrico Winco',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 9,
        src: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4d35da51-8ac2-4bff-ad0d-034d4f3190c7.055d780cf00dc974f5c7342c807f7a79.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
        titulo: 'Aspiradora 16 galones',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 10,
        src: 'https://images-na.ssl-images-amazon.com/images/I/71Oggg6st6L._AC_SL1200_.jpg',
        titulo: 'Guantes para moto de Invierno',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 11,
        src: 'https://familiaconfort.com.ar/wp-content/uploads/2020/10/SECARROPA.jpg',
        titulo: 'Secarropa de Acero inoxidable',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 12,
        src: 'https://images.fravega.com/f1000/7921c30a19428c4c62f9a622ccdb76ab.jpg',
        titulo: 'Lavarropas Longvie',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 13,
        src: 'https://selexhogar.com.ar/wp-content/uploads/2021/10/PAVA-ELECTRICA-HD9368-90-NEGRA-PHILIPS.jpg',
        titulo: 'Pava Electrica',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 14,
        src: 'https://hard-digital.com.ar/files/Parlante%20Jbl%20Flip5%20Negro/1.jpg',
        titulo: 'Parlante JBL',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
    ],
  },

  offers: {
    categorytitle: 'OFERTAS 50% OFF',
    product: [
      {
        id: 15,
        src: 'https://th.bing.com/th/id/R.c42eea1aeb3d275c91a85c118e151bf6?rik=3lk7DyD%2bl%2b7WHQ&pid=ImgRaw&r=0',
        titulo: 'Toallas de baño',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 16,
        src: 'https://charmingdreams.com.ar/wp-content/uploads/2022/12/AcolchadoWinter_con_Corderito-verde.png',
        titulo: 'Acolchado de Invierno 2 plazas',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 17,
        src: 'https://ae01.alicdn.com/kf/H38906706be4947d6a2df62722885f2e8y/Bufanda-de-Cachemira-c-lida-para-hombre-pa-uelo-cl-sico-de-negocios-a-rayas-bufanda.jpg',
        titulo: 'Bufandas de Cachemira',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 18,
        src: 'https://f.fcdn.app/imgs/803f2d/terrano.com.uy/terauy/3aaa/original/catalogo/2009_028_1/2000-2000/botella-termica-con-pico-950ml-rosado.jpg',
        titulo: 'Botella Termica',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 19,
        src: 'https://th.bing.com/th/id/OIP.VYR1uiHS_IX7ifPmLGNwWgHaJg?rs=1&pid=ImgDetMain',
        titulo: 'Mouse Gamer',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 20,
        src: 'https://fashionpoint.com.py/wp-content/uploads/2022/11/2f05102d-8332-4138-80ab-82effcf831d5-1024x1024.jpg',
        titulo: 'Remeras basicas',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 21,
        src: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_800/https://playboxmx.com/wp-content/uploads/2023/12/GAR158-BK-1-800x800.jpg',
        titulo: 'Bateria portatil',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
    ],
  },

  searches: {
    categorytitle: 'SEGUN TUS BUSQUEDAS',
    product: [
      {
        id: 22,
        src: 'https://cdnx.jumpseller.com/la-materia-chile/image/31136332/Termo_Stanley_Mate_System_Classic_Negro_1.2.jpg?1674524139',
        titulo: 'Termo Stanley',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 23,
        src: 'https://mrstoreperu.com/wp-content/uploads/2018/10/billetera-larga-doble-cierre-cuero-genuino-capacidad-negro-bl036.jpg',
        titulo: 'Billetera de cuero',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 24,
        src: 'https://comercializadoratdtt.com/wp-content/uploads/2024/03/tdtt_producto-termo_vaso_termo_stanley_gris_oscuro.jpg',
        titulo: 'Vaso Termico 1Lt',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 25,
        src: 'https://images-na.ssl-images-amazon.com/images/I/61wlWcrFd4L._SL1100_.jpg',
        titulo: 'Cartera ',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 26,
        src: 'https://kaspi.cl/wp-content/uploads/2022/03/b-461_cinturon_mujer_hebilla_rectangular_resina_negro.jpg',
        titulo: 'Cinto de Vestir Mujer',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 27,
        src: 'https://th.bing.com/th/id/OIP.7e2e1SWkR5pyyBKxN280-QHaHa?rs=1&pid=ImgDetMain',
        titulo: 'Remera de Boca Junior',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
      {
        id: 28,
        src: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw89585172/products/NI_SX7676-964/NI_SX7676-964-1.JPG',
        titulo: 'Medias Nike',
        precio: '65.999',
        metodo: 'Cuota Simple en 6 cuotas de $12.546'
      },
    ],
  },
};


function App() {

  const [allproducts, setAllproducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countproduct, setCountproduct]= useState(0);

  const categories = [
    {title: response.productrecommended.categorytitle,product: response.productrecommended.product},
    {title: response.mostsoldout.categorytitle,product: response.mostsoldout.product},
    {title: response.offers.categorytitle,product: response.offers.product},
    {title: response.searches.categorytitle,product: response.searches.product},
  ];//object destructuring

  return(
    <div>
      <Navbar 
       allproducts={allproducts} 
       setAllproducts={setAllproducts}
       total={total} setTotal={setTotal}
       countproduct={countproduct} 
       setCountproduct={setCountproduct}/>
      <CoverImage/>
      {categories.map((category) => (
        <ProductCardContainer key= {category.title} title= {category.title}>
          {category.product.map((product) => {
            return (
              <ProductCard

              key= {product.id}
              title= {product.titulo}
              price= {product.precio}
              methods={product.metodo}
              src={product.src} 
              allproducts ={allproducts} 
              setAllproducts={setAllproducts}
              total={total} setTotal={setTotal}
              countproduct={countproduct} 
              setCountproduct={setCountproduct}
              >

              </ProductCard>
            )
          })}
        </ProductCardContainer>

      ))}
        

    </div>
  )
  
}

export default App
