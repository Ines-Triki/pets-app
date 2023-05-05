import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pets = () => {
  const [pets, setpets] = useState([]);

  const fetchData=()=>{
    axios.get('http://localhost:3000/pets')
    .then(response=>{
     setpets(response.data)
      console.log(response.data)}
      )
    .catch(error=>console.log(error))
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleDelete=()=>{
    axios.delete(`http://localhost:3000/pets/${pets[0].id}`)
    .then(response=>{
      setpets(response.data)
      console.log(response)}
      )
    .catch(error=>console.log(error))
  }


   

  return (
    <div>
      <h1>ines pets Shop</h1>
      <div >
        {pets.length>0&&pets.map((pets) => (
          <div className="pets">
            <img src={pets.name} style={{width:"400px",height:"400px"}} />
            <h2>{pets.type}</h2>
            <p>{pets.description}</p>
           
            <Link to="/"><button className="delete" style={{ backgroundColor: '#FF0000', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', marginTop: '20px', cursor: 'pointer' }} onClick={() => handleDelete(pets.id)}>Delete</button></Link>
            <Link to="/update"><button style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', marginTop: '20px', cursor: 'pointer' }} classname="update">Update</button></Link>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new pets
        </Link>
      </button>
    </div>
  );
};

export default Pets;