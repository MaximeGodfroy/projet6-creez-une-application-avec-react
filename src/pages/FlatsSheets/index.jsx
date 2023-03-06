import flatsList from '../../datas/flatsList.json'
import { useLocation } from 'react-router-dom';
import StarScale from '../../components/StarScale';
import Collapse from '../../components/Collapse';
import styles from './FlatsSheets.module.css'



export default function FlatsSheets() {
    const sampleLocation = useLocation();

    return (
        <>
            {flatsList.map((flat) => sampleLocation.pathname.endsWith(flat.id) &&
                <section key={flat.id} className={styles.flatSheet}>
                    <div>
                    <img className={styles.imgCover} src={flat.cover} alt={flat.title} />
                    </div>
                    <div className={styles.titleAndHost}>
                        <div className={styles.titleAndTags}>
                            <h1 className={styles.h1}>{flat.title}</h1>
                            <h2 className={styles.h2}>{flat.location}</h2>
                            <div className={styles.tag}>
                                {flat.tags.map((tag, index) => (<h3 key={`${tag}-${index}`} className={styles.h3}>{tag}</h3>))}
                            </div>
                        </div>
                        <div className={styles.hostAndStars}>
                            <div className={styles.host}>
                                <h4 className={styles.h4}>{flat.host.name}</h4>
                                <img className={styles.portrait}src={flat.host.picture} alt={flat.host.name} />
                            </div>
                            <div>
                                <StarScale rating={flat.rating}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collapses}>
                        <div className={styles.collapse1}>
                            <Collapse titre='Description' description={flat.description} />
                        </div>
                        <div className={styles.collapse2}>
                            <Collapse titre='Équipements' description={flat.equipments.map((equipment) => <><span key={equipment.toString()}>{equipment}</span><br /></>)} />
                        </div>
                    </div>
                    

                </section>)
                
            }

        </>
    )
}