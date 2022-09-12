import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <text src="/netliheart.svg" alt=" fuad1877" className={styles.logo} /> for you
      </footer>
    </>
  )
}
