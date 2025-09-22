import ValueCard from '../../common/ValueCard';
import styles from './HomeStyles.module.css'; 
import lightbulbIcon from '../../assets/LightbulbIcon';
import LeafIconSVG from '../../assets/LeafIconSVG';
import PathIconSVG from '../../assets/PathIconSVG';


function Home() {
  return (
    <section id="home" className={styles.content}>
        <h1 >About</h1>
        <p className={styles.heroParagraph} >Hey! I'm Lachy. Step into my portfolio, where you can see my interests, history and love for technology. For example, building this website - from design [Figma], to code [React] to sharing [FileShare]. 
Be curious, broaden your horizons and you might find something you didn’t know.</p>
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
        description={"Nam egestas lectus vel ante auctor dictum. Donec blandit, metus in dapibus aliquet, lorem lorem viverra ex, ac ullamcorper urna ante quis felis."}
        // iconColour={"sandybrown"}
        iconColour={"#BC572A"}
        />
        <ValueCard 
        Icon={PathIconSVG}
        // iconColour={"purple"} 
        iconColour={"#BC572A"}
        title={"Versatility"} 
        description={"Jack of all trades doesn't quite tell the story: I've tackled many different roles - in life and work - and never afraid to fail."}
        />
    </div>
    </section>
  );
}

export default Home;