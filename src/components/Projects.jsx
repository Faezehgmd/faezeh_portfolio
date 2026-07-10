import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import home from "../assets/images/projects/home.jpg";
import products from "../assets/images/projects/products.jpg";
import detail from "../assets/images/projects/detail.jpg";
import cart from "../assets/images/projects/cart.jpg";
import login from "../assets/images/projects/login.jpg";
import contact from "../assets/images/projects/contact.jpg";

export default function Projects({ t }) {

  const images = [
    home,
    products,
    detail,
    cart,
    login,
    contact,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="projects" id="projects">

      <p className="section-title">{t.projects}</p>

      <h2>{t.featuredWork}</h2>

      <div className="projects-grid">

        <motion.div
          className="featured-project"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >

          <div className="project-image">
            <img
              src={images[currentImage]}
              alt="Persian Fashion Store"
            />
          </div>

          <div className="project-content">

            <span className="featured-tag">
              ⭐ {t.featuredProject}
            </span>

            <h3>{t.storeTitle}</h3>

            <p>
              {t.storeDescription}
            </p>

            <div className="tech-stack">
              <span>PHP</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="project-buttons">
              <button className="primary-btn">
                {t.liveDemo}
              </button>

              <button className="secondary-btn">
                GitHub
              </button>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Mini Projects */}

      <div className="mini-projects">

        <motion.div
          className="mini-card"
          whileHover={{ y: -8 }}
        >
          <h3>🤖 {t.botTitle}</h3>

          <p>{t.botDescription}</p>

          <span>{t.comingSoon}</span>
        </motion.div>

        <motion.div
          className="mini-card"
          whileHover={{ y: -8 }}
        >
          <h3>🌐 {t.portfolioTitle}</h3>

          <p>{t.portfolioDescription}</p>

          <span>{t.currentProject}</span>
        </motion.div>

        <motion.div
          className="mini-card"
          whileHover={{ y: -8 }}
        >
          <h3>🎮 {t.gameTitle}</h3>

          <p>{t.gameDescription}</p>

          <span>{t.comingSoon}</span>
        </motion.div>

      </div>

    </section>
  );
}