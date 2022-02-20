import { actions_types } from '../action-types/types';
const initialState = {
    trainings:[],
    selectedUser:{},
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
    training_category:[],
    trainers:[]
}

const trainings  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_TRAINING:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_TRAINING:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_TRAINING:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_TRAINING:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.GET_TRAINING:
            return {
                ...state,
                trainings:action.payload.data.trainings || [],
                isLoading:false
            }
        case actions_types.GET_TRAINING_CATEGORY:
            return {
                ...state,
                training_category:action.payload.data || [],
            }
        case actions_types.GET_TRAINERS:
            return {
                ...state,
                trainers:action.payload.data.userList || [],
            }
        case actions_types.ADD_TRAINING:
            console.log(action.payload.data)
            return{
                ...state,
                trainings:[...state.trainings,action.payload.data?.user],
                isAdding:false
            }
        case actions_types.UPDATE_TRAINING:
            console.log("response", action.payload.data)
            const index = state.trainings.findIndex(el => el.id === action.payload.data.user.id);
            const newArray = [...state.trainings]; 
            newArray[index] = action.payload.data.user;
            return{
                ...state,
                trainings:newArray,
                isUpdating:false,
                selectedUser:action.payload.data.user
            }

        case actions_types.DELETE_TRAINING:
            return{
                ...state,
                isDeleting:false,
                trainings: state.trainings.filter(user => user.id !== action.payload)
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

export default trainings

