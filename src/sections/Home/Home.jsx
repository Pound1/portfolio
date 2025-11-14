import ValueCard from '../../common/ValueCard';
import styles from './HomeStyles.module.css'; 
import lightbulbIcon from '../../assets/LightbulbIcon';
import LeafIconSVG from '../../assets/LeafIconSVG';
import PathIconSVG from '../../assets/PathIconSVG';


function Home() {
  return (
    <section id="home" className={styles.content}>
        <h1 >Lachlan Pound</h1>
        <p className={styles.heroParagraph}>I'm a <b>digital Product Owner</b>, in ANZ bank’s technology division. <br></br><br></br>I bring a wealth of delivery capability after <b>10 years of building out ANZ’s marquee banking apps</b>: for Android and iOS platforms. My strengths are leading customer-centric user experiences; prioritising workflow for delivery teams; and deploying resilient features to strict industry regulations. <br></br><br></br>This allows me to provide ANZ’s apps with ergonomic & practical capabilities that drive adoption <b>(currently 1M+ downloads)</b> and success <b>(4.7 Play Store, 4.8 App Store ratings)</b>.</p>
    <div className={styles.contactButton}>
        <a href="/contact">Contact</a>
    </div>
    <div className={styles.container}>
        <ValueCard 
        Icon={LeafIconSVG}
        // iconColour={"green"}
        iconColour={"#BC572A"}
        title={"Growth"} 
        description={"Passion for improving - I have foundational growth mindset and mentor my team to do the same. Be it Tech skills; Self-awareness; or simply new hobbies - I love 'building on my base'."}
        />
        <ValueCard 
        Icon={lightbulbIcon}
        title={"Energy"} 
        description={"I bring a positive attitude to my work and life. I believe that a good attitude is contagious, and that it can help to create a more productive and enjoyable work environment."}
        // iconColour={"sandybrown"}
        iconColour={"#BC572A"}
        />
        <ValueCard 
        Icon={PathIconSVG}
        // iconColour={"purple"} 
        iconColour={"#BC572A"}
        title={"Versatility"} 
        description={"I have a diverse skill set and am comfortable working in a variety of roles. I am a quick learner and am always willing to take on new challenges."}
        />
    </div>
    </section>
  );
}

export default Home;