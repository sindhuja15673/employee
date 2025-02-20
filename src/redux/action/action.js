
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const VIEW_USER = 'VIEW_USER';

export const adduser=( user)=>({
    type:'ADD_USER',
    payload:user,
})
export const updateuser=( user)=>({
    type:'UPDATE_USER',
    payload:user,
})
export const deleteuser=(id)=>({
    type:'DELETE_USER',
    payload:id,
})
export const viewuser=( userid)=>({
    type:'VIEW_USER',
    payload:userid,
})