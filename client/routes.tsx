import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  
  import App from './components/App'
import { ProductPage } from './components/ProductPage'
  
  const routes = createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ProductPage />} />
    </Route>
  )
  
  export const router = createBrowserRouter(routes)