import { actions_types } from '../action-types/types';
const initialState = {
    appointments:[],
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const appointments  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_APPOINTMENT:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_APPOINTMENT:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_APPOINTMENT:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_APPOINTMENT:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_APPOINTMENT:
            return {
                ...state,
                appointments:action.payload.data?.appointments || [],
                isLoading:false
            }
        case actions_types.USER_APPOINTMENT:
            console.log("user appointment", action.payload.data)
            return {
                ...state,
                appointments:action.payload.data?.appointments || [],
                isLoading:false
            }
        case actions_types.ADD_APPOINTMENT:
            return{
                ...state,
                appointments:[...state.appointments,action.payload.data?.appointment],
                isAdding:false
            }
        case actions_types.UPDATE_APPOINTMENT:
            const index = state.appointments.findIndex(el => el.id === action.payload.data.appointment.id);
            const newArray = [...state.appointments]; 
            newArray[index] = action.payload.data.appointment;
            return{
                ...state,
                appointments:newArray,
                isUpdating:false,
            }

        case actions_types.DELETE_APPOINTMENT:
            return{
                ...state,
                isDeleting:false,
                appointments: state.appointments.filter(user => user.id !== action.payload)
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

export default appointments

