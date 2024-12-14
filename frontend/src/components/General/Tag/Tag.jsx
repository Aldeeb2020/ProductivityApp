import React from 'react'
import './tag.css'
const Tag = ({name,color}) => {
  return (
    <div className="tag" style={{backgroundColor: color}}>{name}</div>
  )
}

export default Tag