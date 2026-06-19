import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Articles.jsx";
import Products from "./pages/Products/Products";
import Supplements from "./pages/Supplements/Supplements";
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos" element={<Articles />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/suplementos" element={<Supplements />} />
        <Route path="/contacto" element={<Contact />} />
       <Route path="/perfil" element={<Profile />} />
      </Routes>

        <Footer />

    </BrowserRouter>
  );
}

export default App;