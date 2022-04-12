import React, { useEffect, useState } from 'react';
import { getData as getData } from '../api/axios';
import styles from '../Containers/home.module.css';
import '../App.css'

function Home() {

    const [myInputValue, setInputs] = useState("");
    const [myResults, setResults] = useState([]);

    useEffect(() => {
        axiosRequest(myInputValue);
        return () => {
        };
    }, [myInputValue]);


    const axiosRequest = (myInputValue) => {
        getData(myInputValue).then(res => {
            if (res.status === 200) {
                console.log(res)
                setResults(res.data.results)
            } else {
                console.log('err', res);
            };
        });
    };


    return (
        <>
            <h1>Recherche de Film</h1>
            <input
                type="text"
                onChange={(e) => setInputs(e.target.value)}
            />

            <div id='results'>
                {
                    myResults.map((elem) => {
                        return (
                            <React.Fragment key={elem.id}>
                                <div className={styles.home}>
                                    <h3 href={elem.id} >{elem.title}</h3>
                                    <img src={
                                        elem.poster_path === null ? 'https://media.istockphoto.com/photos/bowl-of-popcorn-in-front-of-a-cinema-projector-picture-id182790916?k=6&m=182790916&s=170667a&w=0&h=0L_xlkRTQnNG0Ks0QiovYlk9YkScyDEn-YRRlcNFCS4=' :
                                            `https://image.tmdb.org/t/p/w300${elem.poster_path}`}
                                        alt={elem.title} />
                                    <details style={{ textDecoration: 'underline', cursor: 'pointer' }}>{elem.overview}</details>
                                    <p style={{ fontWeight: 'bolder' }}>{elem.original_language.toUpperCase()}</p>
                                    <p>{elem.release_date}</p>
                                    <p>{elem.vote_average} / 10</p>
                                </div>

                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Home;