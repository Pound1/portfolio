import React from 'react';
import styles from './NeumorphicButtonStyles.module.css';
// import LinkedInIcon from '../assets/LinkedInIcon';

const NeuButton = ({imageColour, Icon}) => {
    return (   
        <div className={styles.neumorphicButton} style={{color: imageColour}}>
            {/* <img src={LinkedInIcon} alt="icon" /> */}
            {/* <LinkedInIcon colour='purple' /> */}
            {Icon && <Icon color='red'/>}
        </div>
     );
}
 
export default NeuButton;

// get it to work with an image, then transform the image to a prompt, then pass the image