import { actions_types } from '../action-types/types';
const initialState = {
    researches:[],
    research:{},
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const research  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_RESEARCH:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_RESEARCH:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_RESEARCH:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_RESEARCH:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.SELECTED_RESEARCH_IMAGE:
            return {
                ...state,
                selected_image: action.payload
            }  
        case actions_types.GET_RESEARCH:
            return {
                ...state,
                researches:action.payload.data.research || [],
                isLoading:false
            }
        case actions_types.GET_SINGLE_RESEARCH:
            return {
                ...state,
                research:action.payload.data.research || {},
                isLoading:false
            }
        case actions_types.ADD_RESEARCH:
            return{
                ...state,
                researches:[...state.researches,action.payload.data.research],
                isAdding:false
            }
        case actions_types.UPDATE_RESEARCH:
            console.log(action.payload.data)
            const index = state.researches.findIndex(el => el.id === action.payload.data.research.id);
            const newArray = [...state.researches]; 
            newArray[index] = action.payload.data.research;
            return{
                ...state,
                researches:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_RESEARCH:
            return{
                ...state,
                isDeleting:false,
                researches: state.researches.filter(user => user.id !== action.payload)
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

export default research

