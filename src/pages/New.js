import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {createSneak} from "../services/sneakerService"


function New(props) {
  // state to hold formData
  const [ newForm, setNewForm ] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    image: ""
  });

  const navigate = useNavigate();
  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault();
    createSneak(newForm);
    setNewForm({
        name: "",
        brand: "",
        description: "",
        price: "",
        image: ""
    });
    navigate('/sneakers');
  }

  return (
    <container>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.brand}
          name="brand"
          placeholder="brand"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
         <input
          type="text"
          value={newForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
         <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <button type="submit" value="Submit" >Submit</button>
      </form>
    </container>
  );
}

export default New;