import styles from './SkillCardStyles.module.css';

const SkillCard = ({title, subTitle, p, onClick}) => {
    const firstLetter = getInitials(title);

    // const handleSkills = () => {
    //     console.log(`Tapped ${firstLetter}`)
    // }

    return ( 
        <div onClick={onClick} className={styles.container}>
            <div className={styles.initials}>
                {firstLetter}
            </div>
            <h3>{title}</h3>
            <p className={styles.subtitle}>{subTitle}</p>
            <p>{p}</p>
        </div>
     );
}

export default SkillCard;

function getInitials(text) {
    // given the text, take the first letter of each word
    return text.split(' ').map((word) => word[0]).join('');
}