import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IHome } from "../Interface/IMilk"
import { MilkCard } from "./MilksCard"
import './style.css'
import { IoSearchCircle } from "react-icons/io5"



export const Home = ({AllProducts}: IHome) => {
   
    const [type, setType] = useState('');
    const [searchInput, setSearchInput] = useState('')

    const navigate = useNavigate();

    const handleProductClick = (id: string) => {
      navigate(`/Milk/${id}`);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput( e.target.value)
      }

    const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value)

    let filteredProducts = AllProducts;
    if(searchInput) {
        filteredProducts =  AllProducts.filter((milk) => milk.name.toLowerCase().includes(searchInput.toLowerCase()));
        if(type)
        filteredProducts = filteredProducts.filter((milk) => milk.type.match(type));
    }
    if(type) {
        filteredProducts = AllProducts.filter((milk) => milk.type.match(type));
        if(searchInput)
        filteredProducts =  filteredProducts.filter((milk) => milk.name.toLowerCase().includes(searchInput.toLowerCase()));
    
    }
    if(!searchInput && !type)
        filteredProducts = AllProducts;

return(
    <div>
      <main className="container">
        <div className="search-box">
         <div className="btn-search"><IoSearchCircle  size={50}/></div>        
          <input  className="input-search"
            type="text"
            placeholder="Search for a milk"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        
        <div className="filter">
        <select value={type} onChange={handleType} className="filter-dropdown">
            <option value="">All Types</option>
            <option value="Whole milk">Whole Milk</option>
            <option value="Oat milk">Oat Milk</option>
            <option value="Pea milk">Pea Milk</option>
            <option value="Almond milk">Almond Milk</option>
            <option value="Rice milk">Rice Milk</option>
            <option value="Coconut milk">Coconut Milk</option>
            <option value="Soy milk">Soy Milk</option>
            <option value="Walnut milk">Walnut Milk</option>              
            <option value="Hemp milk">Hemp Milk</option>
            <option value="Cashew milk">Cashew Milk</option>
            <option value="Macadamia milk">Macadamia Milk</option>
        </select>     
        </div>
        <p className="cards-category">Products</p>
          <section className="article-container">
              {filteredProducts.map(prod => 
                <div key={prod.id} onClick={() => handleProductClick(prod.id)}>
                 <MilkCard milk={prod}/> 
              </div>
              )}
          </section>
    
    </main>
  </div>
)
}