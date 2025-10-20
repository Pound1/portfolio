import styles from './ProjectsStyles.module.css';
import GalleryCard from '../../common/GalleryCard';
import soborgChair from '../../assets/images/ChairSoborg_final.png';
import oxygenTank from '../../assets/images/plant2.png';
// import pokeball from '../../assets/images/pokeball Render3.png';
import chessboard from '../../assets/images/Chessboard1.jpg';

const Gallery = () => {
    return ( 
        <div className={styles.content}>
            <h1>Gallery</h1>
            <GalleryCard img={soborgChair} title={'Soborg Chair'} subtitle={'Blender Tutorial'}
            p={"An elegant design inspired by the iconic Soborg. Crafted using Blender, this 3D model showcases sleek lines and a modern aesthetic, perfect for contemporary interiors."} 
            />
            <GalleryCard img={oxygenTank} title={'Oxygen Tank'} subtitle={'Blender Tutorial'}
            p={"This 3D model of an oxygen tank is meticulously designed in Blender, featuring realistic textures and details. Ideal for educational purposes or as a prop in various digital scenes."}
            />
            <GalleryCard img={chessboard} title={'Chessboard'} subtitle={'Uni Assignment'}
            p={"A classic chessboard model created for a university assignment. This 3D representation highlights the intricate design of the board and pieces, demonstrating attention to detail and craftsmanship."}
            />
            {/* <GalleryCard img={pokeball} title={'Pokeball'} subtitle={'Uni Assignment'}
            p={"A detailed 3D model of a Pokeball, crafted for a university project. This model captures the iconic design with precision, making it a perfect addition to any Pokémon-themed digital collection."}
            /> */}
        </div>
     );
}
 
export default Gallery;