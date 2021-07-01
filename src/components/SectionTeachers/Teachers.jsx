import axios from 'axios'
import {useEffect,useState} from 'react'
import '../../assets/components/SectionTeachers.css'
import {IoChevronForwardOutline,IoCart} from 'react-icons/io5';
import  {Flag} from './Flag'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Teachers = ()=>{ 
    const [teachers, setTeachers] = useState([])

    const getTeachers = ()=>{
        axios.get('https://www.ingenioapi.com/data/getAllTeachers').then(resp=>{
            setTeachers(resp.data.teachers)
            
        })
    }

    useEffect(()=>{
    
        getTeachers()
    },[])
   
    const IconArrow = styled(IoChevronForwardOutline) `
        color:white;
        font-size:26px;
    `
    return(
        <>
        
           <div className="container">
           
            <h1 id="/Teachers"  className="text-center">OUR TEAM</h1>
               <div className="row  portafolio__teacher"  >
                {teachers.map((item,index)=>(
                    <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                        <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div className="mainflip">
                            <div className="frontside">
                                <div className="card card_radius">
                                    <div className="card-body text-center">
                                        <p><img className="img-fluid" src={item.imageUrl} alt="imagenes de los docentes"/></p>
                                        <h4 className="card-title ">{item.firstName} </h4>
                                        <p className="card-text cursive"> " {item.eslogan } " </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                            <div class="card">
                                <div className="card-body text-center mt-4">
                                    <h6>LANGUAGES THAT</h6>
                                    <h4 className="card-title cursive"> {item.firstName} </h4>
                                    <h6>TEACHES</h6>
                                    <div className="separador">
                                        {
                                            item.flags.map((item2)=>(
                                                <Flag nameFlag={item2.nameFlag} imgFlag={item2.urlFlag} /> 
                                            ))
                                        }
                                    </div>
                                    <Link to={'/Prices'} className="btn__shop" ><IoCart  color='white' size="30px"  ></IoCart></Link>
                                    <Link to={`/ProfileTeachers/${item._id}`} className="btn-conoce-more" >See Profile <IconArrow></IconArrow> </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))} 
               </div>
           </div>
        </>
    )
}