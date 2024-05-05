import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './components/App';
import { ProductPage } from './components/ProductPage';

interface CartItem {
  id: number;
  title: string;
  size: string;
  price: number;
}

const addToCart = (item: CartItem) => {
  console.log('Item added to cart:', item);
};

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<ProductPage addToCart={addToCart} />} />
  </Route>
);

export const router = createBrowserRouter(routes);