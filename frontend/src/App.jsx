import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./Auth/Login";
import AboutUs from "./components/AboutUs";
import HowWeWork from "./components/HowWeWork";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      {pathname !== "/login" && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
