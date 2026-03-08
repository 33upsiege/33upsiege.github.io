import { education, certifications } from '../data/resume'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>학력 · 교육</h2>
      <div className={styles.row}>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <span className={styles.itemName}>{education.school}</span>
            <span className={styles.itemPeriod}>{education.period}</span>
          </div>
          <span className={styles.itemSub}>{education.major} · {education.status}</span>
        </div>

        {certifications.map((cert, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.itemHeader}>
              <span className={styles.itemName}>{cert.name}</span>
              <span className={styles.itemPeriod}>{cert.date}</span>
            </div>
            <p className={styles.itemDesc}>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
