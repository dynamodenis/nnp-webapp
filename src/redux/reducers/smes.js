import { actions_types } from '../action-types/types';
const initialState = {
    smes:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const smes  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_SME:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_SME:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_SME:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_SME:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_SME:
            return {
                ...state,
                smes:action.payload.data?.smes || [],
                isLoading:false
            }
        case actions_types.ADD_SME:
            return{
                ...state,
                smes:[...state.smes,action.payload.data?.sme],
                isAdding:false
            }
        case actions_types.UPDATE_SME:
            const index = state.smes.findIndex(el => el.id === action.payload.data.sme.id);
            const newArray = [...state.smes]; 
            newArray[index] = action.payload.data.sme;
            return{
                ...state,
                smes:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_SME:
            return{
                ...state,
                isDeleting:false,
                smes: state.smes.filter(user => user.id !== action.payload)
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

export default smes

