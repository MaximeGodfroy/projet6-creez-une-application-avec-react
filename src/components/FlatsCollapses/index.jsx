import styles from './FlatsCollapses.module.css'
import Collapse from '../Collapse'

export default function FlatsCollapses(props) {
    return (
        <div className={styles.collapses}>
            <div className={styles.collapse1}>
                <Collapse
                    titre={<p className={styles.titreCollapse}>Description</p>}
                    description={<p className={styles.description}>{props.description}</p>}
                />
            </div>
            <div className={styles.collapse2}>
                <Collapse
                    titre={<p className={styles.titreCollapse}>Équipements</p>}
                    description={
                        <div className={styles.description}>{props.equipments.map((equipment, index) => (
                            <p key={`${equipment}-${index}`}>{equipment}</p>
                        ))}
                        </div>}
                />
            </div>
        </div>
    )
}