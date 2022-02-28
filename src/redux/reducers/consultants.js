import { actions_types } from '../action-types/types';
const initialState = {
    consultants:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const consultants  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_CONSULTANT:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_CONSULTANT:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_CONSULTANT:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_CONSULTANT:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_CONSULTANT:
            return {
                ...state,
                consultants:action.payload.data?.consultants || [],
                isLoading:false
            }
        case actions_types.ADD_CONSULTANT:
            return{
                ...state,
                consultants:[...state.consultants,action.payload.data?.consultant],
                isAdding:false
            }
        case actions_types.UPDATE_CONSULTANT:
            const index = state.consultants.findIndex(el => el.id === action.payload.data.sme.id);
            const newArray = [...state.consultants]; 
            newArray[index] = action.payload.data.vendor;
            return{
                ...state,
                consultants:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_CONSULTANT:
            return{
                ...state,
                isDeleting:false,
                consultants: state.consultants.filter(user => user.id !== action.payload)
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

export default consultants

