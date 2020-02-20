import React from 'react'

export default function Card({ text, author }) {
  return (
    <div className='card'>
      <p>{text}</p>
      <h3>{author}</h3>
    </div>
  )
}
