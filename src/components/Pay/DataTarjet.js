import {useState} from 'react'
import {FormCheckOut,Box_input,BoxFormCard,Box_input_submit,Input_send,Input} from './styles';
import { FaCcMastercard,FaCcDinersClub,FaCcVisa,FaCcDiscover} from "react-icons/fa";
import {CARD_DATA} from '../../redux/actions/types'
import Cleave from 'cleave.js/react';
import  './styles.css'
import { useForm} from "react-hook-form";
import {useDispatch} from 'react-redux'

export const DataTarjet = (props) => {
    const [creditCardType, setCreditCardType] = useState("");
    const {register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    function onCreditCardTypeChanged(type) {
        setCreditCardType(type);
    }

    const DataCard = (data)=>{
        dispatch({
            type: CARD_DATA,
            payload: data
        })
    }
    return (
        <>  
                <BoxFormCard display={props.Display}  onSubmit={handleSubmit(data => DataCard(data) )}  >  {/*  <<--FORMULARIO-->>  */}
                        <FormCheckOut cardCredit={true} >
                            <Box_input>
                                <label htmlFor="NameOnCard">Name on Card</label>

                                <Input disabled={props.activeInputs} autoFocus  type="text" placeholder="Jhon Doe" id="NameOnCard" 
                                {...register("NameOnCard", {
                                    required: "Card Holder Name is required ",
                                    pattern:{
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'Characters Incorrectos' 
                                    },
                                    maxLength:{
                                        value:  40,
                                        message: 'max length character is 40 ',
                                    },
                                    minLength:{
                                        value:4,
                                        message: 'Min characters is 4'
                                    }
                                    })}  />
                                <span className="text-small text-danger" > {errors.NameOnCard?.message } </span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="CardNumber">Card Number  </label> 
                                    <Cleave
                                        disabled={props.activeInputs}
                                        placeholder="Enter credit card number"
                                        options={{ creditCard: true, onCreditCardTypeChanged }}
                                        className="form__card__icons"
                                        {...register("cardNumber",{
                                            required: "Card Holder Name is required ",
                                            maxLength: {
                                                value: 25,
                                                message: 'character max is 25',
                                            },
                                            minLength:{
                                                value: 4,
                                                message: 'Input Required'
                                            }
                                        }
                                        )}
                                    />
                                <span className="Icons__Card" >{creditCardType === 'visa'? <FaCcVisa/> :  '' } {creditCardType === 'discover'? <FaCcDiscover/> : '' } {creditCardType === 'mastercard' ? <FaCcMastercard/> :'' } {creditCardType === 'diners'? <FaCcDinersClub/> : ''}</span>
                                <br />
                                <span className="text-small text-danger "> {errors.cardNumber?.message } </span>
                            </Box_input>
                            <Box_input>
                                <label htmlFor="ExpriesCard">Card Expiry</label>
                                <Cleave
                                    disabled={props.activeInputs}
                                    id="ExpriesCard"
                                    placeholder="MM/YY"
                                    options={{ date: true, datePattern: ["m", "d"] }}
                                    className="form__card"
                                    {...register("ExpiresCard")}
                                />
                            </Box_input>
                            <Box_input>
                                <label htmlFor="Cvv">CVV</label>
                                <Cleave
                                    disabled={props.activeInputs}
                                    id="Cvv"
                                    placeholder="CVV"
                                    options={{
                                        blocks: [3],
                                        numericOnly: true
                                    }}
                                    className="form__card"
                                    {...register("Cvv")}
                                />
                            </Box_input>
                            <Box_input_submit>
                                <Input_send  type="button" value="Cancel" />
                                <Input_send  type="submit" value="Send"  />
                            </Box_input_submit>
                        </FormCheckOut>
                    </BoxFormCard>
            </>
        )
    }

    // ########

