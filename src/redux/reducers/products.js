import { actions_types } from '../action-types/types';
const initialState = {
    products:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
    product:{}
}

const products  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_PRODUCT:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_PRODUCT:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_PRODUCT:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_PRODUCT:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_PRODUCT:
            console.log(action.payload.data)
            return {
                ...state,
                products:action.payload.data.products || [],
                isLoading:false
            }
        case actions_types.GET_SINGLE_PRODUCT:
            console.log(action.payload.data)
            return {
                ...state,
                product:action.payload.data.product || [],
                isLoading:false
            }
        case actions_types.ADD_PRODUCT:
            return{
                ...state,
                products:[...state.products,action.payload.data.product],
                isAdding:false
            }
        case actions_types.UPDATE_PRODUCT:
            console.log(action.payload.data)
            const index = state.products.findIndex(el => el.id === action.payload.data.product.id);
            const newArray = [...state.products]; 
            newArray[index] = action.payload.data.product;
            return{
                ...state,
                products:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_PRODUCT:
            return{
                ...state,
                isDeleting:false,
                products: state.products.filter(user => user.id !== action.payload)
            }
            
        case actions_types.ACTION_FAIL:
            return{
                ...state,
                isLoading:false,
                isAdding:false,
                isUpdating:false,
                isDeleting:false,
            }
        default:
            return state
    }
}

export default products

