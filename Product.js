import React from 'react'

export default function Product({prod}) {
  return (
    <div className="card m-3" style={{width: "80%"}}>
    <div className="card-body">
      <h5 className="card-title">{prod.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">
    {prod.Category}</h6>
    <strong>&#8377; {prod.price}</strong>
    <p className="card-text">{prod.Description}</p>
    </div>
  </div>
  )
}
