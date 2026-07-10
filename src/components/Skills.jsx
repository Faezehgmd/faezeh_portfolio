import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "Three.js", level: 75 },
  { name: "Unity", level: 70 },
  { name: "Git & GitHub", level: 80 },
];

export default function Skills({ t }) {
  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-title">{t.skills}</p>

        <h2>{t.skillsTitle}</h2>

        {skills.map((skill, index) => (
          <div className="skill" key={index}>

            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width:` ${skill.level}% `}}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>

          </div>
        ))}

      </motion.div>
    </section>
  );
}