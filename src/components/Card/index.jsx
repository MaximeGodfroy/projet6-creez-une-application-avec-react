import { Link } from "react-router-dom"
import styles from './Card.module.css'
import flatsList from '../../datas/flatsList.json'

export default function Card({ flatId, setFlatId }) {

    /*if(error) {
        return <span>Il y a un problème</span>
    }*/

    return (
        /*<>
            {isLoading ? (<div>En attente ...</div>) : (*/
        <div className={styles.cardContainer}>
            {flatsList/*data*/.map((flat) => (
                <Link to={`./flat/${flat.id}`}
                    key={flat.id}
                    title={flat.title}
                    picture={flat.cover}
                    className={styles.link}
                    onClick={() => setFlatId(flat.id)}
                ><div className={styles.card}>
                        <img src={flat.cover} alt={flat.title} /> <p className={styles.p}>{flat.title}</p>
                    </div>
                </Link>
            ))}
        </div>
        /*) }
    </>*/
    )
}