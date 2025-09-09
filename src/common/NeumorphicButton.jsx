import React from 'react';
import styles from './NeumorphicButtonStyles.module.css';

const NeuButton = ({imageColour, Icon}) => {
    return (   
        <div className={styles.neumorphicButton} style={{color: imageColour}}>
            {/* <img src={LinkedInIcon} alt="icon" /> */}
            {/* <LinkedInIcon colour='purple' /> */}
            {Icon && <Icon />}
        </div>
     );
}
 
export default NeuButton;
