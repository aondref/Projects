import React from 'react'

const UserTable = ({ users, deleteUser, editRow }) => {
    return (
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.length > 0 ? (
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => editRow(user)} className="button muted-button">Edit</button>
                            <button onClick={() => deleteUser(user.id)} className="button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <td>
                    <td colSpan={3}>No Users</td>
                </td>
            )}
        </tbody>
    </table>
    )
}

export default UserTable
