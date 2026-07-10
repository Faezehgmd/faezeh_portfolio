import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({
  language,
  setLanguage,
  theme,
  setTheme,
  t,
}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="navbar">

        <h2 className="logo">🦋 Faezeh</h2>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li><a href="#home" onClick={()=>setMenuOpen(false)}>{t.home}</a></li>

          <li><a href="#about" onClick={()=>setMenuOpen(false)}>{t.about}</a></li>

          <li><a href="#skills" onClick={()=>setMenuOpen(false)}>{t.skills}</a></li>

          <li><a href="#projects" onClick={()=>setMenuOpen(false)}>{t.projects}</a></li>

          <li><a href="#contact" onClick={()=>setMenuOpen(false)}>{t.contact}</a></li>

        </ul>

        <div className="nav-actions">

          <button
            className="lang-btn"
            onClick={changeLanguage}
          >
            {language === "en" ? "🇮🇷" : "🇺🇸"}
          </button>

          <button
            className="theme-btn"
            onClick={changeTheme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button className="nav-btn">
            {t.talk}
          </button>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </nav>
    </motion.div>
  );
}