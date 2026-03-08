import { skills } from '../data/resume'
import styles from './Skills.module.css'

const categoryLabels: Record<keyof typeof skills, string> = {
  core: 'Core',
  state: '상태 관리',
  styling: '스타일링',
  visualization: '데이터 시각화',
  tooling: '툴링 · 협업',
}

export default function Skills() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>기술 스택</h2>
      <div className={styles.grid}>
        {(Object.keys(skills) as Array<keyof typeof skills>).map(cat => (
          <div key={cat} className={styles.category}>
            <span className={styles.categoryLabel}>{categoryLabels[cat]}</span>
            <div className={styles.tagRow}>
              {skills[cat].map(skill => (
                <span key={skill} className={`${styles.tag} ${cat === 'core' ? styles.tagCore : ''}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
