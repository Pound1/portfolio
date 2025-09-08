import styles from './HeaderStyles.module.css';

function Header() {
  return (
    <section id="header" className={styles.container}>
        
    <div className={styles.menuButtons}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
    </div>
    <div className={styles.resumeButton}>
        <a href="#downloadResume">Resume</a>
    </div>

    </section>
  );
}

export default Header;