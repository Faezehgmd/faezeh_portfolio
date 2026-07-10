import { motion } from "framer-motion";
import Scene from "../models/Scene";

export default function Hero({ t, theme }) {
  return (
    <section className="hero" id="home">

      {/* متن سمت چپ */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hello">{t.hello}</p>

        <h1>{t.name}</h1>

        <h2>{t.job}</h2>

        <p className="description">
          {t.description}
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            {t.projectsBtn}
          </button>

          <button className="secondary-btn">
            {t.contact}
          </button>
        </div>

        <div className="socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </motion.div>

      {/* پروانه سه‌بعدی */}
      <motion.div
        className="hero-model"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Scene theme={theme} />
      </motion.div>

    </section>
  );
}