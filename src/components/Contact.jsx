import { motion } from "framer-motion";

export default function Contact({ t }) {
  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <p className="section-title">{t.contact}</p>

        <h2>{t.contactTitle}</h2>

        <p className="contact-text">
          {t.contactDescription}
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>faezegmd@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>💻 GitHub</h3>
            <p>faeze_gmd</p>
          </div>

          <div className="contact-card">
            <h3>💼 LinkedIn</h3>
            <p>faeze-g</p>
          </div>

          <div className="contact-card">
            <h3>📱 Telegram</h3>
            <p>@faeze_gmh</p>
          </div>

        </div>

        <button className="primary-btn">
          {t.download}
        </button>

      </motion.div>

    </section>
  );
}