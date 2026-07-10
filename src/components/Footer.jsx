import { motion } from "framer-motion";

export default function Footer({ t }) {
  return (
    <footer className="footer">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        🦋 Faezeh
      </motion.h2>

      <p>
        {t.footerText1}
        <br />
        {t.footerText2}
      </p>

      <div className="footer-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Telegram</a>
      </div>

      <div className="footer-bottom">

        <span>
          © 2026 Faezeh Golmohamadi
        </span>

        <a href="#home">
          ↑ {t.backTop}
        </a>

      </div>

    </footer>
  );
}