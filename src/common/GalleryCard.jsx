import styles from './GalleryCardStyles.module.css';

const GalleryCard = ( { img, title, subtitle, p }) => {
    return ( 
        <div className={styles.container}>
            <img className={styles.imageBox} src={img} alt="Gallery content" />
            <div className={styles.infoBox}>
                <h2>{title}</h2>
                <h3 className={styles.subtitle}>{subtitle} </h3>
                <p>{p}</p>
            </div>
        </div>
     );
}
 
export default GalleryCard; 