import { actions_types } from '../action-types/types';
const initialState = {
    product_categories:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const product_category  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_PRODUCT_CATEGORY:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_PRODUCT_CATEGORY:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_PRODUCT_CATEGORY:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_PRODUCT_CATEGORY:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_PRODUCT_CATEGORY:
            return {
                ...state,
                product_categories:action.payload.data['p-category'] || [],
                isLoading:false
            }
        case actions_types.ADD_PRODUCT_CATEGORY:
            return{
                ...state,
                product_categories:[...state.product_categories,action.payload.data['p-category']],
                isAdding:false
            }
        case actions_types.UPDATE_PRODUCT_CATEGORY:
            const index = state.product_categories.findIndex(el => el.id === action.payload.data['p-category'].id);
            const newArray = [...state.product_categories]; 
            newArray[index] = action.payload.data['p-category'];
            return{
                ...state,
                product_categories:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_PRODUCT_CATEGORY:
            return{
                ...state,
                isDeleting:false,
                product_categories: state.product_categories.filter(user => user.id !== action.payload)
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

export default product_category

