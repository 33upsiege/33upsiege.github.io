import { useState, useEffect, useCallback } from 'react'
import { experiences, type Experience, type Project, type ProjectImage } from '../data/resume'
import styles from './Experience.module.css'

function Tag({ label }: { label: string }) {
  return <span className={styles.tag}>{label}</span>
}

function ImageGallery({ images }: { images: ProjectImage[] }) {
  const [index, setIndex] = useState<number | null>(null)

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex(i => i === null ? null : (i - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex(i => i === null ? null : (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  setIndex(i => i === null ? null : (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIndex(i => i === null ? null : (i + 1) % images.length)
      if (e.key === 'Escape')     setIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, images.length])

  return (
    <>
      <div className={styles.gallery}>
        {images.map((img, i) => (
          <button key={i} className={styles.thumbBtn} onClick={() => setIndex(i)}>
            <img src={img.thumb} alt="" className={styles.thumb} loading="lazy" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div className={styles.lightbox} onClick={() => setIndex(null)}>
          <button className={styles.lightboxClose} onClick={() => setIndex(null)}>✕</button>
          <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev}>‹</button>
          <img
            src={images[index].full}
            alt=""
            className={styles.lightboxImg}
            onClick={e => e.stopPropagation()}
          />
          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next}>›</button>
          <span className={styles.counter}>{index + 1} / {images.length}</span>
        </div>
      )}
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const openForPrint = () => setOpen(true)
    window.addEventListener('beforeprint', openForPrint)
    return () => window.removeEventListener('beforeprint', openForPrint)
  }, [])

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
          <dl className={`${styles.contributionGrid} ${!project.contribution.team ? styles.contributionGridNoTeam : ''}`}>
            {project.contribution.team && (
              <div className={styles.contributionItem}>
                <dt>참여 인원</dt>
                <dd>{project.contribution.team}</dd>
              </div>
            )}
            <div className={styles.contributionItem}>
              <dt>역할 / 기여도</dt>
              <dd>{project.contribution.ownership}</dd>
            </div>
            <div className={`${styles.contributionItem} ${styles.scopeItem}`}>
              <dt>담당 범위</dt>
              <dd>{project.contribution.scope}</dd>
            </div>
          </dl>
          <ul className={styles.highlightList}>
            {project.highlights.map((h, i) => {
              const isSub = h.startsWith('·')
              return (
                <li key={i} className={`${styles.highlightItem} ${isSub ? styles.highlightSubItem : ''}`}>
                  {isSub
                    ? <span className={styles.subDot}>·</span>
                    : <span className={styles.dash}>—</span>
                  }
                  <span>{isSub ? h.slice(1).trim() : h}</span>
                </li>
              )
            })}
          </ul>
          {project.metrics && project.metrics.length > 0 && (
            <div className={styles.detailBlock}>
              <h4 className={styles.detailTitle}>정량 성과</h4>
              <ul className={styles.metricList}>
                {project.metrics.map((metric, i) => <li key={i}>{metric}</li>)}
              </ul>
            </div>
          )}
          {project.troubleshooting && (
            <div className={`${styles.detailBlock} ${styles.troubleshootingBlock}`}>
              <h4 className={styles.detailTitle}>이슈 해결</h4>
              <dl className={styles.troubleshootingList}>
                <div><dt>문제</dt><dd>{project.troubleshooting.problem}</dd></div>
                <div><dt>대안 검토</dt><dd>{project.troubleshooting.alternatives}</dd></div>
                <div><dt>선택</dt><dd>{project.troubleshooting.decision}</dd></div>
                <div><dt>결과</dt><dd>{project.troubleshooting.result}</dd></div>
              </dl>
            </div>
          )}
          {project.images && project.images.length > 0 && (
            <ImageGallery images={project.images} />
          )}
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
            {/*<span className={`${styles.badge} ${exp.type === '정규직' ? styles.badgeFull : styles.badgeContract}`}>*/}
            {/*  {exp.type}*/}
            {/*</span>*/}
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
