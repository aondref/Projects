import React, { useState, useEffect } from 'react'

function EditUserForm({ currentUser, updateUser, setEditing }) {
    const [user, setUser] = useState(currentUser);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value })
        console.log({ ...user, [name]: value})
    }

    useEffect(() => {
        setUser(currentUser)
    }, [currentUser])

    return (
        <form onSubmit={(event) => {
            event.preventDefault()

            updateUser(user.id, user)
        }}>
            <label>First Name</label>
            <input type='text' name='fname' value={user.fname} onChange={handleInputChange} />
            <label>First Name</label>
            <input type='text' name='lname' value={user.lname} onChange={handleInputChange} />
            <label>First Name</label>
            <input type='text' name='email' value={user.email} onChange={handleInputChange} />
            <button>Update User</button>
            <button onClick={() => setEditing(false)} className='button muted-button'>Cancel</button>
        </form>
    )
}

export default EditUserForm
