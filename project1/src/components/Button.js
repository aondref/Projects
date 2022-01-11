import React from 'react'

function Button({ onAdd }) {
    return (
        <div>
            <button className='btn' onClick={onAdd}>Add</button>
        </div>
    )
}

export default Button
