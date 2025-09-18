import styles from './ValueCardStyles.module.css';
import React from 'react';

function ValueCard ({ title, description, iconColour, Icon }) {
  return (
    <div className={styles.value} style={{color: iconColour}} >
      <div className={styles.indent}>
              {Icon && <Icon/>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ValueCard;