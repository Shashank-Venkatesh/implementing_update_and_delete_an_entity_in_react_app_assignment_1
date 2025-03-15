import { useState,useEffect } from "react";
import axios from 'axios'

const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    // 2. Create a function to handle the form submission
    // 3. Create a function to handle the form input changes
    const [formData, setFormData] = useState({name:""})

    useEffect(()=>{
        if (item){
            setFormData({name:item.name});
        }
    },[item])

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.put(`http://${import.meta.env.VITE_API_URI}/doors/1`, formData);
            console.log("Updated Successfully",response.data)
        }
        catch(error){
            console.error("Error updating item: ",error)
        }
    }
    // your code here
    return(
        <div>
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </form>
            <button type="submit">Update</button>
        </div>
    )
};

export default UpdateItem;

