import {PRICE_LESSON} from './types';

export const  Select_Package = (price,idiom,lesson) => (dispatch) =>{
    
    dispatch({
        type: PRICE_LESSON,
        payload:{
            lesson,
            idiom,
            price
        } 
    })
}

export const Delete_Package = (idiom) => (dispatch) => {
    dispatch({
        type: 'Delete_Package',
        payload: idiom
    })
}
