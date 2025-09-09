import ValueCard from '../../common/ValueCard';
import styles from './HomeStyles.module.css'; 
import leaf from '../../assets/leafIconSvg.svg';
import lightbulbIconSvg from '../../assets/lightbulbIconSvg.svg';

function Home() {
  return (
    <section id="home" className={styles.content}>
        <h1>About me</h1>
        <p>Hi! I'm Lachy. Step into my portfolio, where you can see my interests, history and love for technology. For example, building this website - from design [Figma], to code [React] to sharing [FileShare]. 
Be curious, broaden your horizons and you might find something you didn’t know.</p>
    <div className={styles.contactButton}>
        <a href="/contact">Contact</a>
    </div>
    <div className={styles.container}>
        <ValueCard 
        img={leaf} 
        title={"Vision"} 
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        />
        <ValueCard 
        img={lightbulbIconSvg}
        title={"Versatility"} 
        description={"Nam egestas lectus vel ante auctor dictum. Donec blandit, metus in dapibus aliquet, lorem lorem viverra ex, ac ullamcorper urna ante quis felis."}
        />
        <ValueCard 
        img={leaf} 
        title={"Passion"} 
        description={"Mauris at arcu iaculis, elementum ligula quis, volutpat velit. Etiam feugiat dolor sem, in porttitor elit ultrices ut."}
        />
    </div>
    </section>
  );
}

export default Home;