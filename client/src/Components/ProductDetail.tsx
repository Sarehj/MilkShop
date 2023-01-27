import React, { useEffect, useState } from 'react';
import './ProductDetail.css'
import milkImg from '../milk.png'
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
 
  const [milk, setMilk] = useState<any>({});
  const [quantity, setQuantity] = useState(2);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMilk() {
      const response = await fetch(`https://localhost:7000/Milk/${id}`);
      const data = await response.json();
      setMilk(data);
    }

    fetchMilk();
  }, [id]);


  const changeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  const storage = milk.storage - quantity;
  const handleOrder = async () => { 

    const response = await fetch(`https://localhost:7000/Milk/${id}`, {
        method: 'PUT',
        body: JSON.stringify({name:milk.name,type:milk.type, id: milk.id, storage}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
      setMilk({...milk, storage: storage});
      alert(`order is done!`);
  } else {
      alert('Failed, try again!');
  }
}

  if (!milk) {
    return <div>Loading...</div>;
  }
  
  return (
    <article className="article-card">
      <figure className='article-img'>
        <img src = {milkImg} alt='Milk'/>
      </figure>
      <div className="article-content">
        <h3 className='card-title'>{milk.name}</h3>
        <div className='tag'>{milk.type}</div>
        <input
            type='range'
            onChange={changeQuantity}
            min={1}
            max={milk.storage}
            step={1}
            value={quantity}
        ></input>
        
        <button onClick={handleOrder}>Order</button>
        <div>
          <div className='reaction'>{milk.storage} liter</div>
        </div>
     </div>
    </article>
  )
}


