import DownloadIcon from '../../assets/DownloadIcon';
import ActionButton from '../../common/ActionButton';
import styles from './HeaderStyles.module.css';
import { NavLink } from 'react-router-dom';
import CV from '../../assets/files/Lachy_Pound_Resume_2025.pdf';

function Header() {
  const navStyle = ({isActive}) => {
    return {
      color: isActive ? '#BC572A' : '#54230D',
      textDecoration: isActive ? 'underline' : 'none'
    };
  };
  return (
    <section id="header" className={styles.container}>
        
    <div className={styles.menuButtons}>
        <NavLink style={navStyle} to="/">Home</NavLink>
        <NavLink style={navStyle} to="/history">History</NavLink>
        <NavLink style={navStyle} to="/gallery">Gallery</NavLink>
        <NavLink style={navStyle} to="/contact">Contact</NavLink>
    </div>
    <a className={styles.resumeButton} href={CV} target="_blank" rel="noreferrer">
        <ActionButton label="Resumé" Icon={DownloadIcon} />
    </a>

    </section>
  );
}

export default Header;