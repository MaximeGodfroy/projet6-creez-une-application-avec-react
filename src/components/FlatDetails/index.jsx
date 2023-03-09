import styles from './FlatDetails.module.css'
import StarScale from '../StarScale'

export default function FlatDetails(props) {
    return (
        <div className={styles.titleAndHost}>
            <div className={styles.titleAndTags}>
                <h1 className={styles.h1}>{props.title}</h1>
                <h2 className={styles.h2}>{props.location}</h2>
                <div className={styles.tag}>
                    {props.tags.map((tag, index) => (<h3 key={`${tag}-${index}`} className={styles.h3}>{tag}</h3>))}
                </div>
            </div>
            <div className={styles.hostAndStars}>
                <div className={styles.host}>
                    <h4 className={styles.h4}>{props.hostName}</h4>
                    <img className={styles.portrait} src={props.hostPicture} alt={props.hostName} />
                </div>
                <div>
                    <StarScale rating={props.rating} />
                </div>
            </div>
        </div>
    )
}