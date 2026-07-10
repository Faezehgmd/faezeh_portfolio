import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { text } from "./translations/language";
import "./App.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


function Home({ language, setLanguage, theme, setTheme, t }) {
  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        t={t}
      />

      <Hero
        t={t}
        theme={theme}
      />

      <About t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}


function App() {

  const [loading, setLoading] = useState(true);

  const [language, setLanguage] = useState("en");

  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    document.body.classList.toggle("fa", language === "fa");
  }, [language]);


  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);


  const t = text[language];


  if (loading) {
    return <Loader />;
  }


  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              language={language}
              setLanguage={setLanguage}
              theme={theme}
              setTheme={setTheme}
              t={t}
            />
          }
        />


        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;