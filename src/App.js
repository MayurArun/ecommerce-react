import React, { useState } from 'react';
import './App.css';
import dress1 from './images/dress1.jpeg';
import dress2 from './images/dress2.jpeg';
import dress3 from './images/dress3.jpeg';
import dress4 from './images/dress4.jpeg';
import dress5 from './images/dress5.jpeg';
const App = () => {
  const [dresses] = useState([
    { id: 1, name: 'Dress 1', price: 50, category: 'Casual', image: dress1 },
    { id: 2, name: 'Dress 2', price: 70, category: 'Formal', image: dress2 },
    { id: 3, name: 'Dress 3', price: 40, category: 'Summer', image: dress3 },
    { id: 4, name: 'Dress 4', price: 60, category: 'Casual', image: dress4 },
    { id: 5, name: 'Dress 5', price: 80, category: 'Formal', image: dress5 },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const filterDresses = () => {
    let filteredDresses = dresses;

    if (selectedCategory !== 'All') {
      filteredDresses = dresses.filter((dress) => dress.category === selectedCategory);
    }

    filteredDresses.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

    return filteredDresses;
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <h1 className="header">Dresses Collection</h1>
        <div className="filters">
          <h2>Filters</h2>
          <div>
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
              <option value="All">All</option>
              <option value="Casual">Casual</option>
              <option value="Formal">Formal</option>
              <option value="Summer">Summer</option>
            </select>
          </div>
          <div>
            <label>Sort By:</label>
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
        <div className="dresses-list">
          {filterDresses().map((dress) => (
            <div key={dress.id} className="dress-item">
              <img src={dress.image} alt={dress.name} />
              <div className="dress-details">
                <h3>{dress.name}</h3>
                <p>Category: {dress.category}</p>
                <p>Price: ${dress.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">© 2023 Your eCommerce Store</div>
    </div>
  );
};

export default App;