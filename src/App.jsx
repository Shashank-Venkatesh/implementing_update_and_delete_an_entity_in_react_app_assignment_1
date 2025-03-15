import UpdateItem from "./components/UpdateItem";
import { useState,useEffect } from "react";
import axios from "axios"

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  // const [item, setItem] = useState(null);
  // pass the item to UpdateItem as a prop

  const [item,setItem] = useState(null);

  useEffect(()=>{
    axios.get(API_URI)
    .then(res=>setItem(res.data))
    .catch(error=>console.error("Error fetching item: ",error))
  })

  return <UpdateItem />;
}

export default App;
