import Banner from '../../components/Banner'
import Card from '../../components/Card'
import stylesHome from './Home.module.css'
import styles from '../../components/Banner/Banner.module.css'
import imageBanner from '../../assets/banner4.jpg'

export default function Home() {
    return (
        <section className={stylesHome.home}>
            <Banner>
            <img src={imageBanner} alt='banner' className={styles.img}/>
            <h1 className={styles.h1}>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Card />
        </section>
    )
}