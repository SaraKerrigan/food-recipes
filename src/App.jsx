import { useState } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Contacts from "./Pages/Contacts";
import CategoryPage from "./Pages/Category-page/CategoryPage";
import Recipe from "./Pages/Recipe/Recipe";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/category/:name" element={<CategoryPage />}></Route>
            {/* :name - двоеточие - значение "name" может меняться */}
            <Route path="/category/:name/:idMeal" element={<Recipe />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
