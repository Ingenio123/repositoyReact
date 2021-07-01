import axios from 'axios';
import { isAuth, getCookie } from '../../helpers/Auth';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchStudent from './TeacherComponents/SearchStudent'

export const Teacher = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        picture: ''
    });

    const [search, setSearch] = useState(null)
    const token = getCookie('token');

    const loadPagage = async () => {

        axios.get(`http://localhost:4000/data/teacherAccount/${isAuth()._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                const { username, email, picture } = res.data;
                setFormData({ ...formData, name: username, email, picture })
            })
            .catch(err => console.log(`err ${err}`))
    }
    
    const handleSearch = (data) => {
        setSearch(data);
    }

    
    useEffect(() => {
        loadPagage();
    }, [])
    

    return (
        <>
            <h2>Is the Teacher {formData.name}  </h2>
            <header className="container" >
                <SearchStudent handleSearch={handleSearch} />
            </header>
        </>
    )
}


