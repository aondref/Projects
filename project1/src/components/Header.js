import React from 'react'
import Button from './Button'

function Header() {
    function onAdd() {
        console.log('Add');
    }

    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button onAdd={onAdd} />
        </div>
    )
}

export default Header;
