import DownloadIcon from '../../assets/DownloadIcon';
import ActionButton from '../../common/ActionButton';
import styles from './HeaderStyles.module.css';
import { NavLink } from 'react-router-dom';

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
    <div className={styles.resumeButton}>
        <ActionButton label="Resumé" Icon={DownloadIcon} />
    </div>

    </section>
  );
}

export default Header;