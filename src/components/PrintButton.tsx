import styles from './PrintButton.module.css'

export default function PrintButton() {
  return (
    <button
      className={styles.btn}
      onClick={() => window.print()}
      aria-label="이력서 인쇄"
    >
      🖨️ 인쇄 / PDF 저장
    </button>
  )
}
