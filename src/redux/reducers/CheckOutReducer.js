import {SHIPPING_DATA,CARD_DATA,CANCEL_SHIPPING_DATA} from '../actions/types'

export const shippingData = (state = {shippingData:{}},action) => {
    switch(action.type){
        case SHIPPING_DATA:
            return {
                ...state,
                shippingData: action.shippingDataForm
            }
        default:
            return  state;
    }
}
const StateCard = {
    getCard: true,
    card:{}
}

export const CardData = (state = StateCard ,action)=>{
    switch(action.type){
        case CARD_DATA:
            return {
                ...state,
                card: action.payload,
                getCard:false
            }
        case CANCEL_SHIPPING_DATA:
            return {
                ...state,
                card: '',
                getCard:true
            }
        default:
            return state;
    }
}

