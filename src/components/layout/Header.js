import React from 'react'

export default function Header() {
    return (
        <header>
            <h1 style={headerStyle}>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}