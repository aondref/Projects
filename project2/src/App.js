import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {
  const randID = Math.floor(Math.random() * 100000) + 1;
  const usersData = [
    { id: 1, fname: 'Tina', lname: 'Jones', email: 'tinajones@example.com'},
    { id: 2, fname: 'Aondre', lname: 'Franklin', email: 'aondrefranklin@example.com'},
    { id: 3, fname: 'Mason', lname: 'Drake', email: 'masondrake@example.com'},
  ]

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, fname: '', lname: '', email: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = (user) => {
    setEditing(true);
    console.log(`I'm in edit mode now. ${user.id}`);
    setCurrentUser({ id: user.id, fname: user.fname, lname: user.lname, email: user.email });
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  function addUser(user) {
    user.id = randID;
    setUsers([...users, user])
  }

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm 
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
