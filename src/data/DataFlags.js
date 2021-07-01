import axios from 'axios';
export const dataArray = [];

const getData = async()=>{
    const res = await axios.get('http://localhost:4000/data/getAllFlags')
    dataArray.push(res.data);
}  