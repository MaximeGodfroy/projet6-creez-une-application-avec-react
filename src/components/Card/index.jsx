import { Link } from "react-router-dom"
import styles from './Card.module.css'
import flatsList from '../../datas/flatsList.json'

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            {flatsList.map((flat) => (
                <Link to={`./flat/${flat.id}`}
                    key={flat.id}
                    title={flat.title}
                    picture={flat.cover}
                    className={styles.link}
                ><div className={styles.card}>
                        <img src={flat.cover} alt={flat.title} /> <p className={styles.p}>{flat.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}