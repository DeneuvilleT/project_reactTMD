import React, { useEffect, useState } from 'react';
import { getCat } from '../api/axios';

function Home(props) {

    const [name, setName] = useState("ro");
    const [arr, setArr] = useState([]);
    const [msg, setMsg] = useState(null)
    const [inputs, setInputs] = useState({
        name: "",
        age: "",
    });

    useEffect(() => {
        axiosRequest();
        updateState();
        // fonction de nettoyage / cleanup function
        return () => {
            // console.log("cleanup");
            // clearTimeout(timer)
        }
    }, [])

    const updateState = () => {
        // console.log("useEffect");
        setName("jaky");
    }

    const axiosRequest = () => {
        getCat().then(res => {
            if (res.status === 200) {
                setArr(res.data)
                console.log(res);
            } else {
                console.log('err', res);
                setMsg("une erreur reseau est survenue !! contactez l'admin !!");
            }
        })
    }

    return (
        <>
            {console.log('render', arr)}
            <h1>Welcome to my home !!</h1>

            <p>my name is : {name}</p>
            <p>{props.age} yo</p>

            {
                arr.length && arr.map(cat => {
                    return (
                        <React.Fragment key={cat.id}>
                            <img src={cat.url} />
                        </React.Fragment>
                    )
                })
            }

            {
                msg !== null && <p>{msg}</p>
            }
        </>
    )
}

export default Home