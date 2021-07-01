import {PRICE_LESSON} from '../actions/types'
export default  function cases(state={ items:[] },action){
    switch(action.type){
        case PRICE_LESSON:
            const item  = action.payload //english 
            const existItem = state.items.find(x=> x.idiom === item.idiom );
            if(existItem ){
                return{
                    ...state,
                    idiom: 'si existe idioma',
                    items: state.items.map((x)=> x.idiom === existItem.idiom? item : x)
                }
            }else{
                return {
                    ...state,
                    idiom: 'no existe el idiom',
                    items: [...state.items,item]
                }
            }
            
        case 'Delete_Package':
            const data = action.payload;
             return {
                ...state,
                items: state.items.filter( x => x.idiom != data )
             }
        default:
            return state;
        }
}