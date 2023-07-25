import React from "react";
import { useState, useEffect } from "react";

function Info() {
  const [info, setInfo] = useState(true);

  // Example
  const url = window.location.href.split("/").pop();
  
  useEffect(() => {
    fetch(`http://localhost:1407/api/pet/show/${url}`)
      .then((res) => res.json())
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>{info.name}</p>
      <img src={info.image} alt={info.name} />
    </div>
  );
}

export default Info;