import styles from './FooterStyles.module.css';
import NeuButton from '../../common/NeumorphicButton';
import LinkedInIcon from '../../assets/LinkedInIcon';
import GmailIconSVG from '../../assets/GmailIconSVG';
import PhoneIconSVG from '../../assets/PhoneIconSVG';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <NeuButton imageColour='#0072b1' Icon={LinkedInIcon} />
        <NeuButton Icon={GmailIconSVG} />
        <NeuButton imageColour='#8db600' Icon={PhoneIconSVG} />
    </footer>
  );
}

export default Footer;
