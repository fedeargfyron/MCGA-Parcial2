import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Screens/Home';
import ProductForm from './Screens/ProductForm';
import Products from './Screens/Products';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/form/:id" element={<ProductForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
