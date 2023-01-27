import React from 'react';
import { ICard } from '../Interface/IMilk';
import './style.css'
import milkImg from '../milk.png'


export const MilkCard = ({milk}: ICard) => {
    return (
   
    <article className="article-card">
      <figure className='article-img'>
        <img src = {milkImg} alt='Milk'/>
      </figure>
      <div className="article-content">
          <h3 className='card-title'>{milk.name}</h3>
          <div className='tags'>
          <div className='tag'>{milk.type}</div>
          <div className='reaction'>{milk.storage} liter</div>
          </div>  
     </div>
    </article>
 
  )
}
