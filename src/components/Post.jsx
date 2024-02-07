import React from 'react'
import './post.css'
function Post({name,text}) {
  return (
    <li className='post'>
        <p className='name'>{name}</p>
        <p className='text'>{text}</p>
    </li>
  )
}

export default Post