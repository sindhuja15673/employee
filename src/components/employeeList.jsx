import React,{useState} from 'react'
import Form from './form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, deleteuser, updateuser, viewuser } from '../redux/action/action';
import './employee.css';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function EmployeeList() {
    const [show, setShow] = useState(false);
    const [isEdit,setIsEdit] = useState(false);
    const [editid, setEditid] = useState(null);
    const users = useSelector((state)=>state.reducer.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit=(user)=>{
        if(isEdit){
            const edituser = {...user, id:editid.id};
            dispatch(updateuser(edituser));
            setIsEdit(false)
        }
        else{
            const newuser = {...user, id:Date.now()}
            dispatch(adduser(newuser))
        }
        setIsEdit(false);
        setShow(false);
    }
    const handleEdit=(user)=>{
        setEditid(user);
        setIsEdit(true);
        setShow(true);

    }
    const handleClose=()=>{
        setShow(false);
        setIsEdit(false);
        setEditid(null);
      }
    const handleShow=()=>{
        setShow(!show)
    }
    const handleDelete=(id)=>{
        dispatch(deleteuser(id));
    }
    const handleView=(user)=>{
        dispatch(viewuser(user));
        navigate('/view')
    }
  return (
    <div className='container'>
        <button className='add' onClick={handleShow}>Add user</button>
        {show && (
            <Form onSubmit={handleSubmit} onEdit={editid} onClose={handleClose}/>
        )}

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(

                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.position}</td>
                    <td>{user.salary}</td>
                    <td className='actions'>
                        <button className='view' onClick={()=>handleView(user.id)}><MdOutlineRemoveRedEye /></button>
                        <button className='edit' onClick={()=>handleEdit(user)}><GrEdit /></button>
                        <button className='delete' onClick={()=>handleDelete(user.id)}><RiDeleteBin6Line /></button>
                    </td>
                </tr>
                
                ))}
            </tbody>
        </table>
      
    </div>
  )
}
