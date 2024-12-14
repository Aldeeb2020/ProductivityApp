import React from 'react'
import './linkbutton.css'
import { NavLink } from 'react-router-dom'
const LinkButton = ({icon,count,title,path}) => {
  return (
    <NavLink to={path}>
        {icon}
        <span className='title'>{title}</span>
        {
            count && <span className='count'>{count}</span>
        }
    </NavLink>
  )
}

export default LinkButton