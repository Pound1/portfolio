import NeuButton from '../../common/NeumorphicButton';
import styles from './ContactStyles.module.css';
import GmailIconSVG from '../../assets/GmailIconSVG';
import PhoneIconSVG from '../../assets/PhoneIconSVG';
import LinkedInIcon from '../../assets/LinkedInIcon';


const Contact = () => {
    return ( 
        <section id="contact" className={styles.content}>
            <div className={styles.typewriter}>
                <div>
                    <h1>Let's connect.</h1>
                </div>
            </div>
            <div className={styles.contactButton}>
                <NeuButton Icon={GmailIconSVG} />    
                <NeuButton imageColour='#8db600' Icon={PhoneIconSVG} />    
                <NeuButton imageColour='#0072b1' Icon={LinkedInIcon} />
            </div>
            <div className={styles.contactDetails}>
                
                <p></p>
                <a href="mailto:lachy.pound@gmail.com">lachy.pound@gmail.com</a>
                <p>+614 00 867 142</p>
                <a href="https://www.linkedin.com/in/lachlan-henricus-pound-103a78a0/" target="_blank" rel="noopener noreferrer">linkedin.com/in/lachlan-pound/</a>
            </div>
        </section>
     );
}
 
export default Contact;