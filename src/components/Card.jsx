import React from 'react'

function Card({children, bg}) {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card