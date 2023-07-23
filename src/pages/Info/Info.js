import React from "react"
import { useState , useEffect } from "react";

function Info() {
    const [info , setInfo] = useState(true);

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('id')

    useEffect(() => {
        fetch(`http://localhost:1407/api/pet/show/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setInfo(res.data)
            })
            .catch((error) => {console.log(error)});
    }, []);

console.log(info)

    return ( <div>
        <p>{info.name}</p>
        <img src={info.image} alt={info.name} />
    </div> );
}

export default Info;