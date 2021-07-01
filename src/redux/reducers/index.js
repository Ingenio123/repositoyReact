import {combineReducers} from 'redux'
import  authReducer from './authReducer';
import packageReducer from './packageReducer'
import {shippingData,CardData} from './CheckOutReducer'

export default combineReducers({
  auth: authReducer,
  package: packageReducer,
  Shipping: shippingData,
  cardData: CardData
})