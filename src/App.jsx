import { BrowserRouter, Route, Routes } from "react-router";
import Product from "./Pages/Product";
import Homepage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import PageNoteFound from "./Pages/PageNoteFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
    </BrowserRouter>
  );
}
