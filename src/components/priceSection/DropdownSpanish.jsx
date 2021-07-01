import {useState} from 'react';
import styled from 'styled-components';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io';
import DataDropDown  from '../../data/DropDown.js'
import { useDispatch } from 'react-redux';
import {Select_Package}  from '../../redux/actions/packageAction'

export const DropdownsItemsSpanish = (props) => {
    const [click, setClicked] = useState(false)        
    const dispatch = useDispatch()
    const toggle = index => {
        if(click === index ){
            return setClicked(null)
        }
        setClicked(index)
    }
    const [price, setPrice] = useState(0);
    const handlePrice  = (price,idiom,lesson)=>{
        setPrice(price)
        dispatch(Select_Package(price,idiom,lesson))
    }
    return (
        <>
           <div className="mt-4">
                        {
                            DataDropDown.map((item,index)=> {
                                return (
                                    <>
                                        <Wrap key={index} onClick={()=> toggle(index) }> 
                                            {item.SectionLesson}  <Span>{ click === index  ? <IoIosArrowUp/> : <IoIosArrowDown/> }</Span>   </Wrap>
                                        { 
                                            click  === index ?  (
                                                <WraperDropDown  >{
                                                    item.SectionPrices.map((e,i)=>{
                                                        return (
                                                            <>
                                                                <p key={i}  onClick={()=> handlePrice(e.price,props.idiom,item.SectionLesson)} > {e.nro} lesson / <Small> monthly </Small>  <Price >USD   { e.price} </Price> </p>

                                                            </>
                                                        )
                                                    })
                                                }
                                            </WraperDropDown> ) : null

                                        }

                                    </>
                                );
                            })
                            
                        }
                        </div>
        </>
    )
}





/*
    ---------------------------->
        MEDIA QUERYS MOBILE  
    <---------------------------- */
const media = {
    mobile: '@media(max-width:700px)',
    mobile2: '@media(max-width:400px)'
}

const  Wrap = styled.div  `
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    width:80%;
    font-size:20px;
    font-weight:700;
    margin:0 auto;
    cursor:pointer;
    margin-bottom:10px;
`

const WraperDropDown = styled.div `
    width:80%;
    margin:0 auto;
    font-size:20px;
    border-bottom:2px solid rgba(49, 69, 132,.5);
    
    p{
        display:flex;
        justify-content:space-between;
        align-items:center;
        line-height:1;
        margin:0;
        padding:8px 10px;
        font-size:20px;
        font-weight:700;
        color:#314584;
        &:hover{
            cursor:pointer;
            background:rgba(149, 149, 149, .10);
        }
    }
`

const Span = styled.span `
    margin-right:5px;
`
const Small = styled.span `
    font-size:15px;
    margin:0 45px 0 0;
    ${media.mobile} {
        margin-right:150px;
    }
    ${media.mobile2}{
        margin-right:60px;
        margin-left:-8px;
    }
`
const Price = styled.span `
    color:red;
`