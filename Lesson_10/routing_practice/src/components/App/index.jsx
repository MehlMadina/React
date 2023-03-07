import Nav from "../Nav";
import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { vegetables } from "../../data/vegetables";
import { fruits } from "../../data/fruits";
import { Context } from "../../context";

function App() {
  const [vegCards, setVegCards] = useState(vegetables);
  const [fruitCards, setFruitCards] = useState(fruits);

  const delete_veg = (id) => setVegCards(vegCards.filter(el => el.id !== id)); 
  const delete_fruit = (id) => setFruitCards(fruitCards.filter(el => el.id !== id)); 

  return (
    <div>
      <Context.Provider value={{ vegCards, fruitCards, delete_veg, delete_fruit }}>
        <Nav />
        <Routes>
          <Route path="/fruits_page" element={<FruitsPage />} />
          <Route path="/vegetables_page" element={<VegetablesPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
