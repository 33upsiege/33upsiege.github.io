import { personalInfo } from '../data/resume'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <span className={styles.tagline}>{personalInfo.tagline}</span>
        </div>
        <ul className={styles.contactList}>
          <li>
            <span className={styles.icon}>📞</span>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          </li>
          <li>
            <span className={styles.icon}>✉️</span>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </li>
          {/*<li>*/}
          {/*  <span className={styles.icon}>🔗</span>*/}
          {/*  <a href={personalInfo.portfolio} target="_blank" rel="noreferrer">*/}
          {/*    Portfolio*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
      </div>
    </header>
  )
}
