import styles from './Slideshow.module.css'
import leftVector from '../../assets/leftVector.png'
import rightVector from '../../assets/rightVector.png'
import { useState } from 'react'

export default function Slideshow({ title, pictures }) {
    const [index, setIndex] = useState(0);
    const length = pictures.length;
    const [picture, setPicture] = useState(pictures[index]);
    function leftClick() {
        if (picture === pictures[0]) {
            setPicture(pictures[length - 1]);
            setIndex(length - 1);
        }
        else {
            setPicture(pictures[index - 1]);
            setIndex(index - 1);
        }
    }
    function rightClick() {
        if (picture === pictures[length - 1]) {
            setPicture(pictures[0]);
            setIndex(0);
        }
        else {
            setPicture(pictures[index + 1]);
            setIndex(index + 1);
        }
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.elementsCarousel}>
                <img className={styles.pictures} src={picture} alt={title} />
                {length > 1 &&
                    (<>
                        <img className={styles.arrow1} src={leftVector} alt='left arrow' onClick={() => leftClick()} />
                        <img className={styles.arrow2} src={rightVector} alt='right arrow' onClick={() => rightClick()} />
                        <p className={styles.numberPictures}>{index + 1}/{length}</p>
                    </>
                    )}
            </div>
        </div>
    )
}