import React from 'react';
import { useState, useEffect } from 'react';

//getting data from any array of object using usestate Hardcodely
function Example() {

    const [names, setNames] = useState([
        {
            id: 1,
            Firstname: "Akindele",
            Lastname: "Taiwo"
        },
        {
            id: 2,
            Firstname: "Ayeni",
            Lastname: "Ope"
        },
        {
            id: 1,
            Firstname: "Muritala",
            Lastname: "Lizzy"
        }
    ]);
//GETTING DATA THORUGH API
const [apiValue, setApiValue] = useState([]);

//useEffect is use to get data from an external data
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((items) => setApiValue(items))
}, []);

 //loop through the array to get the data from the object declared
  return (
    <div>
        {names.map((index) => (
            <div key={index.id}>
                <p>{index.Firstname} {index.Lastname}</p>
            </div>

        ))}

        <div>
            <h1>Random Words Api</h1>
            {apiValue.map((value) => (
                <div key={value.id}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))};
        </div>
    </div>
  )
}

export default Example;