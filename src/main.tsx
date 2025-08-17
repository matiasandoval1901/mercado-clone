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
import Create from './Pages/Create'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { CartProvider } from './Context/cartContext';

const queryClient = new QueryClient (); 

createRoot(document.getElementById('root')!).render(
  <DataProvider>

   <StrictMode>
    <QueryClientProvider client= {queryClient}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<App />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/products/:id' element={<ProductDetail />} />
              <Route path='/buy' element={<Checkout/>}/>
              <Route path='/create' element={<Create/>}/>
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
       </CartProvider>
    </QueryClientProvider>
   </StrictMode>
  </DataProvider>
);

