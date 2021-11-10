import { useState } from "react";

function UpdateForm(props){
    const id = props.id;
    const updateCheese = props.updateCheese;
    const removeCheese = props.removeCheese;
    const [editForm, setEditForm] = useState(props.oneCheese);

    const handleChange = (event) => {
        event.target.value = event.target.name === 'soft' ? event.target.checked : event.target.value;
        setEditForm({...editForm, [event.target.name]: event.target.value})
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        updateCheese(editForm, id);
        setEditForm({
            name: "",
            region: "",
            image: "",
            soft: false,
        })
    }

    return (
    <div className="update-form">
        <form onSubmit={handleSubmit} >
            <fieldset>
                <legend>Edit Cheese</legend>
            <input type="text" value={editForm.name} name="name" id="" placeholder="Cheese Name" onChange={handleChange}/>
            <input type="text" value={editForm.region} name="region" id="" placeholder="Region" onChange={handleChange}/>
            <input type="text"  value={editForm.image} name="image" id="" placeholder="Image URL" onChange={handleChange}/>
            <label>
                Soft Cheese: 
                <input type="checkbox" checked={editForm.soft} name="soft" id="" onChange={handleChange}/>
            </label>
            <input type="submit" value="Update" />
            </fieldset>
        </form>
        <button id="delete" onClick={removeCheese}>DELETE</button>
    </div>)
  } 
  
  export default UpdateForm