import { useState } from "react";

function Form({createCheese}){
    const [newForm, setNewForm] = useState({
        "name": "",
        "region": "",
        "image": "",
        "soft": false,
    });

    const handleChange = (event) => {
        event.target.value = event.target.name === 'soft' ? event.target.checked : event.target.value;
        setNewForm({...newForm, [event.target.name]: event.target.value})
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        createCheese(newForm);
        setNewForm({
            name: "",
            region: "",
            image: "",
            soft: false,
        })
    }

    return <form onSubmit={handleSubmit} className="create-form">
        <fieldset>
            <legend>Add a Cheese</legend>
        <input type="text" value={newForm.name} name="name" id="" placeholder="Cheese Name" onChange={handleChange}/>
        <input type="text" value={newForm.region} name="region" id="" placeholder="Region" onChange={handleChange}/>
        <input type="text"  value={newForm.image} name="image" id="" placeholder="Image URL" onChange={handleChange}/>
        <div>
        <label>
            Soft Cheese: 
            <input type="checkbox" checked={newForm.soft} name="soft" id="" onChange={handleChange}/>
        </label>
        </div>
        <input type="submit" value="Create Cheese" />
        </fieldset>
    </form>
  } 
  
  export default Form