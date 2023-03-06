import { Link } from "react-router-dom"
import styles from './Card.module.css'
//import { useFetch } from "../../utils/hooks";
//import React from "react";
import flatsList from '../../datas/flatsList.json'
//import { useEffect } from "react"




export default function Card({flatId, setFlatId}){
    /*const { data, isLoading, error } = useFetch(`https://github.com/MaximeGodfroy/projet6-creez-une-application-avec-react/blob/e6ec49386bc4ba55bcced38c2cfa4a28b602b620/src/datas/flatsList.json`);
    const flatsList = data;

    if(error) {
        return <span>Il y a un problème</span>
    };*/



    return (
        /*<>
            {isLoading ? (<div>En attente ...</div>) : (*/
            <div className={styles.cardContainer}>
                {flatsList.map((flat) => (
            <Link to={`./flat/${flat.id}`}
              key={flat.id}
              title={flat.title}
              picture={flat.cover}
              className={styles.link}
              //onClick={() => clickHandler(flat.id)}
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