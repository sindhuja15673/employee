import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './employee.css'

export default function Viewdata() {

    const user = useSelector((state)=>state.reducer.viewusers);
    const navigate = useNavigate();
    if(!user){
        return <div>Loading...</div>
    }
  return (
    <div className='container'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.position}</td>
                    <td>{user.salary}</td>
                </tr>
            </tbody>
        </table>
        <br></br>
            <button onClick={()=>navigate('/')} className='add'>Back</button>
      
    </div>
  )
}
