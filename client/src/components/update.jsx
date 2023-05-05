 
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Update = (props) => {
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
  });

 

  const handleChange = (e) => {
    setPet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updatePet = async () => {
    await axios
      .put(`http://localhost:3000/pets/${props.id}`, pet)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form">
      <h1>Update Pet</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={pet.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Type"
        name="type"
        value={pet.type}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={pet.description}
        onChange={handleChange}
      />
     
     <Link to="/add" >
     <button onClick={updatePet}>Update</button>
        </Link>
    </div>
  );
};

export default Update;


