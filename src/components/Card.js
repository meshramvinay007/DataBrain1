import React from 'react';

export default function Card({id, title, price, description, image}) {
  return (
    <div className="Card">
        <div>
          <img src={image} alt="" />
        </div>
        <h5>{title}</h5>

        <p>
         {description.length > 100 ? description.slice(0,110)+'...' : description}
        </p>
        <h4>${price}</h4>
      </div>
  )
}
