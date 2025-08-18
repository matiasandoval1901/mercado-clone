<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DataProvider from './contex/DataContex.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>,
)
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';
import Layout from './components/Layout'; 
import DataProvider from './Context/dataContext';
import Checkout from './Pages/Checkout'

createRoot(document.getElementById('root')!).render(
  <DataProvider>

   <StrictMode>
     <BrowserRouter>
       <Routes>
         <Route element={<Layout />}>
           <Route path='/' element={<App />} />
           <Route path='/cart' element={<Cart />} />
           <Route path='/products/:id' element={<ProductDetail />} />
           <Route path='/buy' element={<Checkout/>}/>
           <Route path='*' element={<NotFound />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </StrictMode>
  </DataProvider>
);

// mati hace la interfaz de detalle del producto donde estara el boton de agregar al carrito o comprar
//que te lleva a la interfaz del carrito donde podes sumar o restar el mismo producto y aparece un total
//codigo que tengo en productcard button 
//yo debo hacer la interfaz de simulacion de compra .
>>>>>>> d5489381cae879ef3198dde6a47219d5ed1b6420
