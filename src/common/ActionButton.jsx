import styles from './ActionButtonStyles.module.css'

const ActionButton = ({label, Icon, link}) => {
    return ( 
        <div className={styles.container} href={link}>
                {label}
                {Icon && <Icon />} 
        </div>
     );
}
 
export default ActionButton;