import axios from 'axios';
import {getCookie,isAuth} from '../../helpers/Auth'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import  {IoIosArrowDown} from 'react-icons/io'

const PrivateRoute = ({history})=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        picture: ''
      });
   
    const token = getCookie('token');
    
    useEffect(() => {
        loadProfile()
    }, [])

    const loadProfile = ()=>{
        // axios.get(`https://www.ingenioapi.com/data/user/${isAuth()._id}`,{
        axios.get(`http://localhost:4000/data/user/${isAuth()._id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
            }).then(res=>{
                const {username,email,picture} = res.data;
                setFormData({...formData, name:username,email,picture})
            })
            .catch((err)=> console.log('Existe un Error', err))
    }
   
    const clickme = ()=>{
        history.push('/');
    }
    const [click, setClicked] = useState(false);
    
    const clickDrop = ()=>{
        setClicked(!click)
    }
    return (
        <>
        <header className="container">
            <CardUnit>  
                <img src={formData.picture} alt={formData.name} />
                <ButtonAgenda>BUY LESSON PACKAGE</ButtonAgenda>
                <Content>
                    <Unit>Unit 1 <ArrowDown onClick={clickDrop} /> </Unit>

                        {click && (

                        <Lessons>
                            <Data>Lesson 1</Data>
                            <Items><b>Fecha: </b> 6-12-2021 </Items>
                            <Items><b>Resumen: </b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia est quis recusandae quos veniam. Explicabo ex consectetur quisquam velit. </Items>
                            <Items><b>feedback: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi hic perspiciatis placeat assumenda labore, facere cupiditate eos consequuntur natus.</Items>
                            <Items><b>Fortaleza: </b>😎 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi hic perspiciatis placeat assumenda labore, facere cupiditate eos consequuntur natus.</Items>
                            <Items><b>A Mejorar: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi hic perspiciatis placeat assumenda labore, facere cupiditate eos consequuntur natus.</Items>
                        </Lessons>
                        )}
                        
                    <Unit>Unit 2    <ArrowDown/> </Unit>
                    
                    <Unit>Unit 3    <ArrowDown/> </Unit>
                    
                    <Unit>Unit 4    <ArrowDown/> </Unit>
                </Content>
            </CardUnit>

            <div className="container">
                <button onClick={clickme} >home</button>
            </div>
        </header>
        </>
    )

}
export default PrivateRoute;

const CardUnit = styled.div `
    margin-top:100px; 
    width:100%;
    border-radius:10px;
    border:1px solid rgba(33,36,41,.2);
    box-shadow:1px 0px 10px 4px rgba(0,0,0,0.1);
        img {
            position:relative;
            top:-10px;
            left:-10px;  
            width:45px;
            height:45px;
            border-radius:50%;
        }
`

const Content = styled.div `
    display:block;
    margin:0 12px;
    padding:10px;
`
const Unit = styled.div `
    display:flex;
    justify-content: space-between;
    font-size:20px;
    margin-bottom:5px;
    border-bottom: 2px solid rgba(0,0,0,.1);
`
const ArrowDown = styled(IoIosArrowDown) `
    cursor:pointer;
`
const ButtonAgenda   = styled.button  `
    display:block;
    padding: 12px 16px;
    background: #ff3946;
    color:white;
    font-size: "Baloo Da 2";
    border:none;
    border-radius:30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0;
    margin: -45px 0 0 auto;
`
const Lessons = styled.div  `
    display:block;
    padding:10px;
`
const Data  = styled.p `
    font-size:18px;
    text-align:center;
    margin-bottom:0;
    color:#314584;
    font-weight:700;
`
const Items = styled.span `
    display:block;
    font-size:1rem;
    margin-bottom:10px;
`


