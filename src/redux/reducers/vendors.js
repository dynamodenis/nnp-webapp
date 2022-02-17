import { actions_types } from '../action-types/types';
const initialState = {
    vendors:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const vendors  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_VENDOR:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_VENDOR:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_VENDOR:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_VENDOR:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_VENDOR:
            return {
                ...state,
                vendors:action.payload.data.vendors || [],
                isLoading:false
            }
        case actions_types.ADD_VENDOR:
            return{
                ...state,
                vendors:[...state.vendors,action.payload.data?.vendor],
                isAdding:false
            }
        case actions_types.UPDATE_VENDOR:
            const index = state.vendors.findIndex(el => el.id === action.payload.data.vendor.id);
            const newArray = [...state.vendors]; 
            newArray[index] = action.payload.data.vendor;
            return{
                ...state,
                vendors:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_VENDOR:
            return{
                ...state,
                isDeleting:false,
                vendors: state.vendors.filter(user => user.id !== action.payload)
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

export default vendors

