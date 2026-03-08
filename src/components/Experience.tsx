import { useState } from 'react'
import { experiences, type Experience, type Project } from '../data/resume'
import styles from './Experience.module.css'

function Tag({ label }: { label: string }) {
  return <span className={styles.tag}>{label}</span>
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(true)

  return (
    <div className={styles.projectCard}>
      <button
        className={styles.projectHeader}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <div className={styles.projectMeta}>
          <span className={styles.projectName}>{project.name}</span>
          <span className={styles.projectPeriod}>{project.period}</span>
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
      </button>

      {open && (
        <div className={styles.projectBody}>
          <ul className={styles.highlightList}>
            {project.highlights.map((h, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.dash}>—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          {project.tags && (
            <div className={styles.tagRow}>
              {project.tags.map(t => <Tag key={t} label={t} />)}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className={styles.expCard}>
      <div className={styles.expHeader}>
        <div className={styles.expLeft}>
          <h3 className={styles.companyName}>{exp.company}</h3>
          <span className={styles.role}>{exp.role}</span>
        </div>
        <div className={styles.expRight}>
          <span className={styles.period}>{exp.period}</span>
          <div className={styles.badges}>
            <span className={styles.duration}>{exp.duration}</span>
            <span className={`${styles.badge} ${exp.type === '정규직' ? styles.badgeFull : styles.badgeContract}`}>
              {exp.type}
            </span>
          </div>
        </div>
      </div>
      <p className={styles.expDesc}>{exp.description}</p>

      <div className={styles.projectList}>
        {exp.projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>경력</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  )
}
