import { BrowserRouter, Route, Routes } from "react-router";
import Product from "./Pages/Product";
import Homepage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import PageNoteFound from "./Pages/PageNoteFound";
import Applayout from "./Pages/Applayouot";
import Login from "./Pages/Login";
import CitiesList from "./components/CitiesList";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8000";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchingCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("fetching problem");
      } finally {
        setIsLoading(false);
      }
    }

    fetchingCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<Applayout />}>
          <Route index element={<CitiesList cities = {cities} isLoading = {isLoading}/>} />
          <Route path="cities" element={<CitiesList cities = {cities} isLoading ={isLoading} />} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="Form" element={<p>Form</p>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
    </BrowserRouter>
  );
}
