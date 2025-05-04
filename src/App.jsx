import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Product from "./Pages/Product";
import Homepage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import PageNoteFound from "./Pages/PageNoteFound";
import Applayout from "./Pages/Applayouot";
import Login from "./Pages/Login";
import CitiesList from "./components/CitiesList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<Applayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNoteFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
