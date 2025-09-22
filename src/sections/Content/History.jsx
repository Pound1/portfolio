import SkillCard from '../../common/SkillCard';
import styles from './HistoryStyles.module.css';
import { useState } from 'react';

// function displaySkills() {
//     return (
//         <div>skills</div>
//     );
// }

const History = () => {

    const POSkills = ['Champion the customer', 'Generating a roadmap', 'Go/No-go decisioning', 'Stakeholder management', 'Prioritisation']
    const BASkills = ['Requirements gathering', 'Story writing', 'Documentation', 'Defining Acceptance Criteria', 'Backlog grooming']
    const SMSkills = ['Master of ceremonies', 'Work estimation', 'Stakeholder engagement', 'Dependency mapping', 'Incident management']

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
            <h2 className={styles.subheading}>Skills</h2>
            <div className={styles.container}>
                <SkillCard onClick={() => updateSkills(POSkills)} title={"Product Owner"} subTitle={"2019 - current"} p={"Currently with ANZ Plus delivered highly regulated and utilised features: PayID and PayTo. "}/>
                <SkillCard onClick={() => updateSkills(BASkills)} title={"Business Analyst"} subTitle={"2017-2019"} p={"Fundamentally, an analyst with a history on technical and regulatory features."} />
                <SkillCard onClick={() => updateSkills(SMSkills)} title={"Scrum Master"} subTitle={"2017-2019"} p={"Have worn the SM hat many times to produce solutions from issues, defects or problems."} />
            </div>
            <div className={styles.skillList}>
                <ul>
                    {
                        skills.map((item, index) => (
                            <li key={index}>{item.name || item}</li>
                        ))
                    }
            </ul>
            </div>
            <hr className={styles.divider} />
            <h2 className={styles.subheading}>Delivery History</h2>
        </section>
     );
}
 
export default History;