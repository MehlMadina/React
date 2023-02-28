import { getProducts } from "../../requests/products";
import { useState, useEffect } from "react";
import { Context } from "../../context";
import ProductsContainer from "../ProductsContainer";
import Form from "../Form";

function App() {
  // getProducts();

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts(setProducts)
  }, [])

console.log(products)

  return (
    <div>
      <Context.Provider value={{ products }}>
        <Form />
        <ProductsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
