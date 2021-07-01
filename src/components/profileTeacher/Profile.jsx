import {HeaderHero} from './HeaderHero'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState} from 'react';
import { SectionTeachers } from './SectionTeachers';

export const Profile =  ()=>{
    

    const {idTeacher} = useParams()
    const [Data, setData] = useState([])
    const [Flags, setFlags] = useState([])

 
    const getData = ()=>{
        axios.get(`https://www.ingenioapi.com/data/teacher/${idTeacher}`)
        .then(res=>  {
            setData(res.data.teacher);
            setFlags(res.data.teacher.flags)
        }) 
        
    }


    useEffect( ()=>{
        getData()
    },[idTeacher])
    return(
        <>
            <HeaderHero data={Data} />

            <div className="container">
                <section className="presentation">
                    <p>{Data.description} </p>
                </section>
                <section className="teaches_profesional">
                    <div className="data">
                        <h4>Languages {Data.firstName} teaches</h4>
                        {Flags.map((item,index)=>(
                            <div className="data_flag" key={index} >
                                <img src={ item.urlFlag } alt="flag" />
                                <h6>{item.nameFlag}</h6>
                            </div> 
                        ))}
                    </div>
                    <div className="profesional_background" >
                        <span><h4>Profesional background</h4></span>
                        <p>{Data.profesionalBackround}</p>
                    </div>
                </section>
                <section>
                    <h4>Hobbies  and interest</h4>
                </section>
            </div>
        </>
    );
}