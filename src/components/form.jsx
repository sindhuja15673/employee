import React, { useState, useEffect } from 'react'
import './form.css';
import { IoMdClose } from "react-icons/io";
export default function Form({ onSubmit, onEdit, onClose }) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        position: '',
        salary: '',
    });
    const [errors, setErrors] = useState({})
    useEffect(() => {
        if (onEdit) {
            setUser({ name: onEdit.name, email: onEdit.email, position: onEdit.position, salary: onEdit.salary });

        }
    }, [onEdit])

    const validate = () => {
        let newErrors = {};

        if (!user.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (!/^[a-zA-Z\s]+$/.test(user.name)) {
            newErrors.name = "Name should contain only letters and spaces.";
        }

        if (!user.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!user.position.trim()) {
            newErrors.position = "Position is required.";
        } else if (!/^[a-zA-Z\s]+$/.test(user.position)) {
            newErrors.position = "Position should contain only letters and spaces.";
        }

        if (!user.salary.trim()) {
            newErrors.salary = "Salary is required.";
        } else if (!/^\d+$/.test(user.salary) || Number(user.salary) <= 0) {
            newErrors.salary = "Salary should be a positive number.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(user);
            setUser({ name: '', email: '', position: '', salary: '' });
            setErrors({});
        }
    }
    return (
        <div className='formpage'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <button className='close' onClick={onClose}><IoMdClose /></button>
                    <label>Employee Name:{errors.name && <p className="error">{errors.name}</p>}</label>
                    <input type="text" name='name' value={user.name} onChange={handleChange} required />
                    
                    <label>Email:{errors.email && <p className="error">{errors.email}</p>}</label>
                    <input type="email" name='email' value={user.email} onChange={handleChange} required />
                    
                    <label>Position:{errors.position && <p className="error">{errors.position}</p>}</label>
                    <input type="text" name='position' value={user.position} onChange={handleChange} required />
                    
                    <label>Salary:{errors.salary && <p className="error">{errors.salary}</p>}</label>
                    <input type="number" name='salary' value={user.salary} onChange={handleChange} required />
                    
                    <button className='submit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
