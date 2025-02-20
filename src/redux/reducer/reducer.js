import { ADD_USER, DELETE_USER, UPDATE_USER, VIEW_USER } from "../action/action"

const initialState = {
    users:[],
    viewusers:null,
    error:null,
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_USER:
            return{
                ...state,
                users:[...state.users, action.payload]
            }
        case UPDATE_USER:
            return{
                ...state,
                users:state.users.map((user)=>user.id === action.payload.id? action.payload:user),
            }
        case DELETE_USER:
            return{
                ...state,
                users:state.users.filter((user)=>user.id !== action.payload),
            }
        case VIEW_USER:
            return{
                ...state,
                viewusers:state.users.find((user)=>user.id === action.payload),
            }
        default:
            return state;
    }
}

export default reducer;