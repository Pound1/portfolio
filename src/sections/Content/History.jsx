import MobileBlueprintSVG from '../../assets/MobileBlueprint';
import SkillCard from '../../common/SkillCard';
import styles from './HistoryStyles.module.css';
import { useState } from 'react';

const History = () => {

    const POSkills = ['Champion of the customer', 'Pioneering the roadmap', 'Go/No-go decisioning', 'Stakeholder management', 'Prioritisation']
    const BASkills = ['Requirements gathering', 'Story writing', 'Clear, succinct documentation', 'Defining Acceptance Criteria', 'Backlog grooming']
    const SMSkills = ['Master of Ceremonies', 'Estimation (SCRUM)', 'Cross-team engagement', 'Dependency mapping', 'Incident management']

    const [skills, setSkills] = useState(POSkills)

    const updateSkills = (skills) => {
        setSkills(skills)
    }

    return ( 
        <section className={styles.content}>
            <h1>History</h1>
            <div>
                <p>{"Bachelor of Information Technology and Systems (BITS)"}</p>
                <p style={{ color: '#54230D', fontWeight: "bold" }}>
                {"Monash University"}
                </p>
                <p >2016</p>
                </div>
            <hr className={styles.divider} />
            <h2 className={styles.subheading}>Key Skills</h2>
            <div className={styles.container}>
                <SkillCard onClick={() => updateSkills(POSkills)} title={"Product Owner"} subTitle={"2019 - current"} p={"An Agile PO for the last 5 years; I have a wealth of experience delivering high-traffic mobile UX flows."}/>
                <SkillCard onClick={() => updateSkills(BASkills)} title={"Business Analyst"} subTitle={"2017-2019"} p={"High technical acumen, from a history deconstructing business requirements into resilient features."} />
                <SkillCard onClick={() => updateSkills(SMSkills)} title={"Scrum Master"} subTitle={"2018-2020"} p={"Have worn the SM hat many times to produce solutions from: issues, defects or problems."} />
            </div>
            <div className={styles.skillList}>
                <ul className={styles.staggeredList} key={skills}>
                    {skills.map((item, index) => (<li key={index}>{item.name || item}</li>))}
                </ul>
            </div>
            <hr className={styles.divider} />
            <h2 className={styles.subheading}>Delivery History</h2>
            <MobileBlueprintSVG />
        </section>
     );
}
 
export default History;