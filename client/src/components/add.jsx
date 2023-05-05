import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Add = () => {
  const [pet, setpet] = useState({
   name : "",
   type: "",
    description: '',
    
  });
 

  
  const handleChange = (e) => {
    setpet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const add = async()=> {
    console.log(pet)
    await axios.post('http://localhost:3000/pets',pet)
    
   }
  

  return (
    <div className="form">
      <h1>Add New pets</h1>
      <input
        type="text"
        placeholder=" pets"
        name="name"
        value={pet.name}
        onChange={handleChange }
      />
      
      
      <input
        type="text"
        placeholder="type"
        name="type"
        value={pet.type}
        onChange={handleChange}
      />
        <input
        type="text"
        placeholder="description"
        name="description"
        value={pet.description}
        onChange={handleChange}
      />
      
      
     
      <Link to="/"><button onClick={()=>add()}>Add</button></Link>
      <Link to="/">See all pets</Link>
    </div>
  );
};

export default Add;