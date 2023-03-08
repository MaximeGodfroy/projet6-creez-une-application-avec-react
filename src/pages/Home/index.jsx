import Banner from '../../components/Banner'
import Card from '../../components/Card'
import styles from './Home.module.css'
import imageBanner from '../../assets/banner4.jpg'

export default function Home({ flatId, setFlatId /*, error*/ }) {

    /*if(error) {
        return <span>Il y a un problème</span>
    }*/

    return (
        <section className={styles.home}>
            <Banner>
                <img src={imageBanner} alt='banner' className={styles.img} />
                <h1 className={styles.h1}>Chez vous, partout et ailleurs</h1>
            </Banner>
            {/*isLoading ? (<span>En attente ...</span>) : 
            (*/}
            <Card flatId={flatId} setFlatId={setFlatId} />
            {/* ) */}
        </section>
    )
}