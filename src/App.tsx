import "./style.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/footer";

import type { Technology } from "./type/technology";

const techFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/data/technologies.json");

  const data = await res.json();

  return data;
};

function App() {
  const techPromise = techFetch();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <Navbar />

      <Hero />

      <Suspense fallback={<h2>R.A.Z.I.B.U.L...</h2>}>
        <Technologies techPromise={techPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;