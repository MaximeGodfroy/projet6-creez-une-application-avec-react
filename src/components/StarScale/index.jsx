import redStar from '../../assets/redStar.png'
import greyStar from '../../assets/greyStar.png'
import styles from './StarScale.module.css'

export default function StarScale({rating}){
    const range = [1, 2, 3, 4, 5];

    return(
        <>
        {range.map((rangeStar) => rating >= rangeStar ? <img key={`star ${rangeStar}`} src={redStar} alt='etoile rouge' className={styles.img}/> : <img key={`star ${rangeStar}`} src={greyStar} alt='etoile grise' className={styles.img}/> )}
        </>
    )
}