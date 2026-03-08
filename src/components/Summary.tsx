import { personalInfo } from '../data/resume'
import styles from './Summary.module.css'

export default function Summary() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>소개</h2>
      <ul className={styles.list}>
        {personalInfo.summary.map((line, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.bullet} />
            {line}
          </li>
        ))}
      </ul>
    </section>
  )
}
