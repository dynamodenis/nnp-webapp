import { actions_types } from '../action-types/types';
const initialState = {
    research_categories:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const research_category  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_RESEARCH_CATEGORY:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_RESEARCH_CATEGORY:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_RESEARCH_CATEGORY:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_RESEARCH_CATEGORY:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_RESEARCH_CATEGORY:
            return {
                ...state,
                research_categories:action.payload.data.rcategory || [],
                isLoading:false
            }
        case actions_types.ADD_RESEARCH_CATEGORY:
            return{
                ...state,
                research_categories:[...state.research_categories,action.payload.data.rcategory],
                isAdding:false
            }
        case actions_types.UPDATE_RESEARCH_CATEGORY:
            const index = state.research_categories.findIndex(el => el.id === action.payload.data.rcategory.id);
            const newArray = [...state.research_categories]; 
            newArray[index] = action.payload.data.rcategory;
            return{
                ...state,
                research_categories:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_RESEARCH_CATEGORY:
            return{
                ...state,
                isDeleting:false,
                research_categories: state.research_categories.filter(user => user.id !== action.payload)
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

export default research_category

