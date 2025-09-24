import DownloadIcon from '../../assets/DownloadIcon';
import ActionButton from '../../common/ActionButton';
import styles from './HeaderStyles.module.css';

function Header() {
  return (
    <section id="header" className={styles.container}>
        
    <div className={styles.menuButtons}>
        <a href="/">Home</a>
        <a href="/history">History</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
    </div>
    <div className={styles.resumeButton}>
        <ActionButton label="Resume" Icon={DownloadIcon} />
    </div>

    </section>
  );
}

export default Header;