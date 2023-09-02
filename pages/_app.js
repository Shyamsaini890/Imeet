import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
