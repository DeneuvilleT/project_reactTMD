import React from 'react';
import styles from '../Cards/home.module.css';

export function Cards(props) {

    const coverDefault = 'https://media.istockphoto.com/photos/bowl-of-popcorn-in-front-of-a-cinema-projector-picture-id182790916?k=6&m=182790916&s=170667a&w=0&h=0L_xlkRTQnNG0Ks0QiovYlk9YkScyDEn-YRRlcNFCS4=';

    return (
        <div className={styles.home}>
            <h3 >{props.dataElem.title}</h3>
            <img src={props.dataElem.poster_path === null ? coverDefault :
                `https://image.tmdb.org/t/p/w300${props.dataElem.poster_path}`}
                alt={props.dataElem.title} />
            <details style={{ textDecoration: 'underline', cursor: 'pointer' }}>{props.dataElem.overview}</details>
            <p style={{ fontWeight: 'bolder' }}>Version Originale : {props.dataElem.original_language.toUpperCase()}</p>
            <p>{props.dataElem.release_date}</p>
            <p style={{ fontWeight: 'bolder' }} >{props.dataElem.vote_average} / 10</p>
        </div>
    );
};