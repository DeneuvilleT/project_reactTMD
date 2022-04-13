import React, { useEffect, useState } from 'react';
import { getData as getData } from '../api/axios';
import { Cards } from './Cards/Cards';
import '../App.css'

function Home() {

    const [myInputValue, setInputs] = useState("");
    const [myResults, setResults] = useState([]);

    useEffect(() => {
        axiosRequest(myInputValue);
    }, [myInputValue]);


    const axiosRequest = (myInputValue) => {
        getData(myInputValue).then(res => {
            if (res.status === 200) {
                setResults(res.data.results)
            } else {
                console.log('err', res);
            };
        });
    };

    return (
        <>
            <h1>Recherche de Film</h1>
            <hr />
            <input type="text" onChange={(e) => setInputs(e.target.value)} />

            <div id='results'>
                {
                    myResults.map((elem) => {
                        return (
                            <>
                                <Cards dataElem={elem} />
                            </>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Home;