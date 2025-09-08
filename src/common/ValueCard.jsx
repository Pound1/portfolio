import styles from './ValueCardStyles.module.css';
import React from 'react';

function ValueCard ({ img, title, description }) {
  return (
    <div className={styles.value} >
      <img src= {img} alt={`${title} icon`}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ValueCard;