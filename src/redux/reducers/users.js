import { actions_types } from '../action-types/types';
const initialState = {
    users:[],
    selectedUser:{},
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
}

const users  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.GETTING_USER:
            return{
                ...state,
                isLoading:true
            }    
        case actions_types.ADDING_USER:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.ADDING_CONTACT:
            return {
                ...state,
                isAdding: true
            }
        case actions_types.UPDATING_USER:
            return {
                ...state,
                isUpdating: true
            }
        case actions_types.DELETING_USER:
            return {
                ...state,
                isDeleting: true
            }
        case actions_types.SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload
            }
        case actions_types.GET_USER:
            return {
                ...state,
                users:action.payload.data.userList || [],
                isLoading:false
            }
        case actions_types.ADD_USER:
            return{
                ...state,
                users:[...state.users,action.payload.data?.user],
                isAdding:false
            }
        case actions_types.ADD_CONTACT:
            return{
                ...state,
                isAdding:false
            }
        case actions_types.UPDATE_USER:
            const index = state.users.findIndex(el => el.id === action.payload.data.user.id);
            const newArray = [...state.users]; 
            newArray[index] = action.payload.data.user;
            return{
                ...state,
                users:newArray,
                isUpdating:false,
                selectedUser:action.payload.data.user
            }

        case actions_types.DELETE_USER:
            return{
                ...state,
                isDeleting:false,
                users: state.users.filter(user => user.id !== action.payload)
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

export default users

