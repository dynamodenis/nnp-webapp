import { actions_types } from '../action-types/types';
const initialState = {
    training_categories:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const training_category  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_TRAINING_CATEGORY:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_TRAINING_CATEGORY:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_TRAINING_CATEGORY:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_TRAINING_CATEGORY:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_TRAINING_CATEGORY:
            return {
                ...state,
                training_categories:action.payload.data['t-category'] || [],
                isLoading:false
            }
        case actions_types.ADD_TRAINING_CATEGORY:
            return{
                ...state,
                training_categories:[...state.training_categories,action.payload.data['t-category']],
                isAdding:false
            }
        case actions_types.UPDATE_TRAINING_CATEGORY:
            const index = state.training_categories.findIndex(el => el.id === action.payload.data.TRAINING_CATEGORY.id);
            const newArray = [...state.training_categories]; 
            newArray[index] = action.payload.data.TRAINING_CATEGORY;
            return{
                ...state,
                training_categories:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_TRAINING_CATEGORY:
            return{
                ...state,
                isDeleting:false,
                training_categories: state.training_categories.filter(user => user.id !== action.payload)
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

export default training_category

