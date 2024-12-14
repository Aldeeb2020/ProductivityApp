import React from 'react'
import './note.css'

const Note = ({bgcolor, title}) => {
  return (
    <div className='note' style={{backgroundColor: bgcolor}}>
        <div className="note-header">
            <h3>{title}</h3>
        </div>
        <div className="note-content">
            <p>Plan social content</p>
            <p>Build content calinder</p>
            <p>Plan promotion and distribution</p>
        </div>
    </div>
  )
}

export default Note