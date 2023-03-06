import styles from './Banner.module.css'

export default function Banner({children}) {
    return (
        <section className={styles.banner}>
            {children} 
        </section>
    )
}