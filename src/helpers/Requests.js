import axios from 'axios';

export const getData = async (id) =>{
    await axios.get(`http://localhost:4000/data/teacher/${id}`) 
}