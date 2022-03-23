import { actions_types } from '../action-types/types';
const initialState = {
    isLoading:false,
    isUpdating:false,
    isDeleting:false,
    isAdding: false,
    user_roles:[
        {
            "id": "a24b72bb-c58c-412f-9d9d-8df266b1c89a",
            "name": "Enterprises",
            "desc": "SME Enterprises roles",
            "admin": 0,
            "status": 1,
            "sel": 0,
            "rolez": {
                "training_support": [
                    "canview"
                ],
                "research_consultancy_innovation": [
                    "canview"
                ],
                "services_marketplace": [
                    "cancreate",
                    "canview",
                    "canedit"
                ],
                "consultancy": [
                    "canview"
                ],
                "users": null,
                "dashboard": [
                    "canview"
                ]
            }
        },
        {
            "id": "91124c48-d8ac-11eb-b8bc-0242ac130003",
            "name": "Trainers",
            "desc": "Supervisor Role for Sub-Admin role.",
            "admin": 0,
            "status": 1,
            "sel": 0,
            "rolez": {
                "training_support": [
                    "cancreate",
                    "canview",
                    "canedit"
                ],
                "research_consultancy_innovation": [
                    "cancreate",
                    "canview",
                    "canedit"
                ],
                "services_marketplace": [
                    "cancreate",
                    "canview",
                    "canedit"
                ],
                "consultancy": [
                    "cancreate",
                    "canview",
                    "canedit"
                ],
                "users": [
                    "canview"
                ],
                "dashboard": [
                    "canview",
                    "canedit"
                ]
            }
        },
        {
            "id": "d25daf55-89d6-4e19-ba8b-824a988940c6",
            "name": "User 01",
            "desc": "End User Roles.",
            "admin": 0,
            "status": 1,
            "sel": 0,
            "rolez": {
                "training_support": [
                    "canview"
                ],
                "research_consultancy_innovation": [
                    "canview"
                ],
                "services_marketplace": [
                    "canview"
                ],
                "consultancy": [
                    "canview"
                ],
                "users": null,
                "dashboard": [
                    "canview"
                ]
            }
        },
        {
            "id": "b854640e-3969-4989-a0bc-6ee513a9954c",
            "name": "Vendors",
            "desc": "Vendors Roles",
            "admin": 0,
            "status": 1,
            "sel": 0,
            "rolez": {
                "training_support": null,
                "research_consultancy_innovation": null,
                "services_marketplace": [
                    "cancreate",
                    "canview",
                    "canedit"
                ],
                "consultancy": null,
                "users": null,
                "dashboard": [
                    "canview"
                ]
            }
        }
    ]
}

const user_roles  = (state=initialState, action)=>{
    switch(action.type){
        case actions_types.USER_ROLES:
            console.log("user roles from state", action.payload.data.roles)
            return {
                ...state,
                user_roles:action.payload.data.roles || [],
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

export default user_roles

