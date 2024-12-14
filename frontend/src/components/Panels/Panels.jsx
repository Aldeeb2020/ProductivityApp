import React from 'react'
import './panels.css'
const Panels = ({children}) => {
  return (
    <div className='panels'>
        {children}
    </div>
  )
}

export default Panels