import flatsList from '../../datas/flatsList.json'
import { useLocation } from 'react-router-dom';
import styles from './FlatsSheets.module.css'
import Slideshow from '../../components/Slideshow';
import FlatDetails from '../../components/FlatDetails';
import FlatsCollapses from '../../components/FlatsCollapses';

export default function FlatsSheets() {
    const sampleLocation = useLocation();

    return (
        <>
            {flatsList.map((flat) => sampleLocation.pathname.endsWith(flat.id) &&
                <section key={flat.id} className={styles.flatSheet}>
                    <Slideshow title={flat.title} pictures={flat.pictures} />
                    <FlatDetails title={flat.title} location={flat.location} tags={flat.tags} hostName={flat.host.name} hostPicture={flat.host.picture} rating={flat.rating}/>
                    <FlatsCollapses description={flat.description} equipments={flat.equipments} />
                </section>)
                
            }

        </>
    )
}