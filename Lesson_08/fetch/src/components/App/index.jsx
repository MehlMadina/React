import { getProducts } from "../../requests/products";
import { useState, useEffect } from "react";
import { Context } from "../../context";
import ProductsContainer from "../ProductsContainer";
import Form from "../Form";

function App() {
  // getProducts();

  const [ products, setProducts ] = useState([]);

  const createProduct = product => setProducts(prev => [...prev, product])

  useEffect(() => {
    getProducts(setProducts)
  }, [])

console.log(products)

  return (
    <div>
      <Context.Provider value={{ products, createProduct }}>
        <Form />
        <ProductsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
