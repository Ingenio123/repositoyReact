import styled  from 'styled-components'
import React from "react";
import {useForm} from 'react-hook-form'
import {DataTarjet} from './DataTarjet'
import {FormCheck,BoxForm,FormCheckOut,Box_input,Input}  from './styles'
import {useSelector} from 'react-redux'
import { useState,useEffect} from 'react';
import {IoArrowBackCircle} from "react-icons/io5";
import {SHIPPING_DATA,CANCEL_SHIPPING_DATA} from '../../redux/actions/types'
import {useDispatch} from 'react-redux'
import {SendDataPayClient} from './AxiosFormPay'

function CheckOut(props){
    


    const dispatch = useDispatch()
    const {register,handleSubmit,formState:{errors} }   = useForm()
    const {items} = useSelector(state => state.package);
    const {getCard}  = useSelector(state => state.cardData);
    const card  = useSelector(state => state.cardData);
    const Shipping  = useSelector(state => state.Shipping);

    const [Active, setActive] = useState(true)
    const [Display, setDisplay] = useState(true)
    let res = 0;

    

    if(items){
        res = items.reduce((acc,item)=>{
            return  acc +=  item.price;
        },0)
    }
    // ############## CALCULO DEL BEFORE TAX ############# 
    

    function ValorTotal(){
        let valIva = 12;
        let CobroIva = (res  * valIva) / 100;

        return CobroIva;
    }


    const handleArrowLeft =  ()=>{
        props.history.push('/');
        
        dispatch({
            type: CANCEL_SHIPPING_DATA
        })
    }

    const HandleData = (data)=> {
        
        dispatch({
            type: SHIPPING_DATA,
            shippingDataForm:data
        })

        setActive(false)
        setDisplay(false)
    }

    const handlePlaceOrder = ()=>{
        SendDataPayClient(Shipping,card) 
    }

    


    return (
        <>
            <Section className="container">
                <IconsArrow> <IconsArrowLeft onClick={()=> handleArrowLeft()} /> </IconsArrow>
                <FormCheck>
                    <BoxForm onSubmit={handleSubmit(data => HandleData(data))} >
                        <FormCheckOut>
                            <Box_input>
                                <label htmlFor="firstName">First Name</label>
                                <Input  id="firstName" type="text" {...register("firstName",{
                                    required: "Second Name is required",
                                    maxLength:{
                                        value: 15,
                                        message: "maximum characters is 15"
                                    },
                                    minLength:{
                                        value: 2,
                                        message: "minimum of characters is 2"
                                    },
                                    pattern:{
                                        value: /^[a-zA-Z]*$/,
                                        message: "No se Aceptan Espacios ni caracteres numericos"
                                    }
                                })}  />
                                <span className="text-danger text-small" >{errors.firstName?.message}</span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="SecondName">Second Name</label>
                                <Input   id="SecondName" type="text" {...register("secondName",{
                                    required: "Second Name is required",
                                    maxLength:{
                                        value: 15,
                                        message: "maximum characters is 15"
                                    },
                                    minLength:{
                                        value: 2,
                                        message: "minimum of characters is 2"
                                    },
                                    pattern:{
                                        value: /^[a-zA-Z]*$/,
                                        message: "No se Aceptan Espacios ni caracteres numericos"
                                    }
                                    
                                })}  />
                                <span className="text-danger text-small">{errors.secondName?.message}</span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="LastName">Last Name</label>
                                <Input   id="LastName" type="text" {...register("lastName",{
                                    required: "last Name is required",
                                    maxLength:{
                                        value: 15,
                                        message: "maximum characters is 15"
                                    },
                                    minLength:{
                                        value: 2,
                                        message: "minimum of characters is 2"
                                    },
                                    pattern:{
                                        value: /^[a-zA-Z]*$/,
                                        message: "No se Aceptan Espacios ni caracteres numericos"
                                    }
                                    
                                })}  />
                                <span className="text-danger text-small"> {errors.lastName?.message} </span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="Cedula">Numero de Cedula</label>
                                <Input   id="Cedula" type="text" {...register("numberCedula",{
                                    required: "identification number is required",
                                    maxLength: {
                                        value: 10,
                                        message: 'maximum characters is 20'
                                    },
                                    minLength: {
                                        value:2,
                                        message: 'minimum of characters is 2'
                                    },
                                    pattern:{
                                        value: /^[0-9]+$/,
                                        message: "ERR SOLO NUMEROS NO ESPACIOS",
                                    }
                                })}  />
                                <span className="text-danger text-small"> {errors.numberCedula?.message} </span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="NumeroCell">Numero de Telefono</label>
                                <Input   id="NumeroCell" type="text" {...register("numberCellPhone",
                                {
                                    required: "Number Cell is Required",
                                    maxLength:{
                                        value: 15,
                                        message: "maximum characters is 15"
                                    },
                                    minLength:{
                                        value: 2,
                                        message: "minimum characters is 2"
                                    },
                                    pattern:{
                                        value: /^[0-9]+$/,
                                        message: "ERR SOLO NUMEROS NO ESPACIOS"
                                    }
                                })}  />
                                <span className="text-danger text-small" >{errors.numberCellPhone?.message} </span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="Country">Country</label>
                                <Input   id="Country" type="text" {...register("Country",
                                {
                                    required: "Country is Required",
                                    maxLength:{
                                        value: 2,
                                        message: "maximum characters is 2"
                                    },
                                    minLength:{
                                        value: 1,
                                        message: "minimum characters is 1"
                                    },
                                    pattern:{
                                        value: /^[A-Z]+$/,
                                        message: "SOLO LETRAS MAYUSCULAS NO ESPACIOS "
                                    }
                                })}  />
                                <span className="text-danger text-small" >{errors.Country?.message} </span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="City">City</label>
                                <Input   id="City" type="text" {...register("City",
                                {
                                    required: "City is Required",
                                    maxLength:{
                                        value: 40,
                                        message: "maximum characters is 15"
                                    },
                                    minLength:{
                                        value: 2,
                                        message: "minimum characters is 2"
                                    },
                                    pattern:{
                                        value: /^[a-zA-Z\s]+$/,
                                        message: "ERR SOLO NUMEROS NO ESPACIOS"
                                    }
                                })}  />
                                <span className="text-danger text-small" >{errors.numberCellPhone?.message} </span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="PostCode">Code Postal</label>
                                <Input   id="PostCode" {...register("PostCode",{
                                    required:"Is Required",
                                    maxLength:{
                                        value: 10,
                                        message: "maximum characters is 15"
                                    },
                                    minLength:{
                                        value: 2,
                                        message: "minimum characters is 2"
                                    },
                                    pattern:{
                                        value: /^[0-9\s]+$/,
                                        message: "Solo numeros"
                                    }
                                })}  />
                                <span className="text-danger text-small " > {errors.PostCode?.message} </span>
                            </Box_input>
                            <Box_button>
                                <ButtonCancel >Cancel</ButtonCancel>
                                <ButtonSubmit type="submit" >Continue</ButtonSubmit> 
                            </Box_button>
                            
                        </FormCheckOut>
                    </BoxForm>


                    <BoxItemsProduct>
                        <ButtonPalceOrder disabled={getCard} onClick={ () => handlePlaceOrder() } > Place Order </ButtonPalceOrder>
                        <Line/>
                        <BoxOrder>  
                            <OrderSumary>Order Sumary</OrderSumary>
                            <ItemsOrder>
                                <span>items({items? items.length : '0'}):</span> <span>$ {res !== 0 ? res : 0}</span>
                            </ItemsOrder>
                            <ItemsOrder>
                                <span>Before Tax (+12%): </span> <span>$ { ValorTotal() } </span>
                            </ItemsOrder>
                            <Line mb={true} />
                            <ItemsOrder>
                                <Order_total>Order Total</Order_total> <Order_total>$ {res !== 0 ? res + ValorTotal() : 0} </Order_total>
                            </ItemsOrder>
                        </BoxOrder>
                    </BoxItemsProduct>
                <DataTarjet activeInputs = {Active} Display={Display} /> 
                </FormCheck>
            </Section>
        </>
    )
}
export default CheckOut;

const BoxItemsProduct  = styled.div `
    width:100%;
    padding:10px 30px;
    padding-bottom:0;
    margin:10px 0 8px 0;
    grid-area:itemsOrder;
    border-radius:5px;
    box-shadow:-2px 4px 20px -2px rgba(0,0,0,.1);
    @media screen  and (max-width: 768px){
        justify-self:center;
        width:90%;
        margin-top:120px;
        box-shadow:none;
    }
`
const ButtonPalceOrder = styled.button `
    width:100%;
    padding: 4px 0;
    border:none;
    border-radius:5px;
    color:#fff;
    background: #314584;
    font-size:18px;
    transition:all .3s ease-out;
    &:hover{
        background: #5E6C9C;
        border:none;
    }

    &:disabled{
        background:rgba(49,69,132,.8);
    }
`
const Line = styled.hr `
    width:100%;
    margin:0 auto;
    margin-bottom: ${(props)=>(props.mb? '15px':'0')};
    margin-top:20px;
    background:#BEC0CB;
` 
const BoxOrder = styled.div `
    display:grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: 2fr 1fr 1fr 1fr;
`

const OrderSumary = styled.h4 `
    color:#535966;
    font-weight:700;
    letter-spacing:0px;
    margin:20px 0;
    justify-self:start;

`
const ItemsOrder =  styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:20px;
    color:#535966;
`

const Order_total = styled.span `
    font-weight:700;
    
`


// ##########################################

const Section =  styled.section `
    width:100vw;
    height:88.5vh;
    position:relative;
`



const Box_button = styled.div `
    display:flex;
    padding:4px 8px;
    align-self:center;
`

const ButtonSubmit = styled.button `
    color:#fff;
    font-size:18px;
    padding: 2px 1rem; 
    background: #314584;
    border:none;
    border-radius:5px;
    height:35px;
    margin-left:10px;
    transition:all .2s ease-out;
    &:hover{
        font-weight:700px;
        background: #5E6C9C;
        border:none;
    }
`

const ButtonCancel = styled.button `
    padding: 2px 1rem; 
    background:transparent;
    border:2px solid #E9EBEE;
    border-radius:5px;
    font-size:18px;
    color:#535966;
    transition:all .3s ease-out;
    
    &:hover{
        box-shadow: 0px 2px 10px  -5px rgba(0,0,0,.3);
    }
`
const IconsArrow = styled.div `
    margin-top: -20px;
    margin-left:26px;
    @media screen  and (max-width: 768px){
        display:flex;
        justify-content:center;
    }
`
const IconsArrowLeft  =  styled(IoArrowBackCircle) `
    font-size:50px;
    color:rgba(49,69,132);
    &:hover{
        cursor:pointer;
    }
`