import React, { useState } from 'react'

function AddUserForm({ addUser }) {
    const initialFormState = { id: null, fname: '', lname: '', email: ''}
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    }
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (!user.fname || !user.lname || !user.email) return

            addUser(user)
            setUser(initialFormState)
        }}>
            <label>First Name</label>
            <input type="text" name="fname" value={user.fname} onChange={handleInputChange} />
            <label>Last Name</label>
            <input type="text" name="lname" value={user.lname} onChange={handleInputChange}  />
            <label>Email</label>
            <input type='text' name='email' value={user.email} onChange={handleInputChange}  />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm
