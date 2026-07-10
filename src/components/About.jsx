import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

export default function About({ t }) {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="image-glow"></div>

        <div className="image-wrapper">
          <img src={profile} alt="Faezeh" />
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="section-title">{t.aboutTitle}</span>

        <h2>
          
          <span>{t.name}</span>
        </h2>

        <h3>{t.aboutJob}</h3>

        <p>
          {t.aboutDescription}
        </p>

        <div className="about-cards">

          <div className="card">
            <h4>🎓 {t.education}</h4>
            <p>{t.degree}</p>
            <span>{t.engineer}</span>
          </div>

          <div className="card">
            <h4>💻 {t.frontend}</h4>
            <p>React • Three.js</p>
            <span>HTML • CSS • JavaScript</span>
          </div>

          <div className="card">
            <h4>🎮 {t.gameDev}</h4>
            <p>Unity</p>
            <span>{t.gameDesc}</span>
          </div>

        </div>

        <button className="primary-btn1">
          {t.download}
        </button>

      </motion.div>

    </section>
  );
}