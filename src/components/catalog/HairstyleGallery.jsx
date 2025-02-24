// src/components/catalog/HairstyleGallery.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HairstyleGallery() {
  const [hairstyles, setHairstyles] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with API call
  const mockHairstyles = [
    {
      id: 1,
      name: 'Modern Pixie Cut',
      category: 'short',
      image: '/hairstyles/pixie.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Classic Bob',
      category: 'medium',
      image: '/hairstyles/bob.jpg',
      rating: 4.8,
    },
    // Add more hairstyles...
  ];

  useEffect(() => {
    setHairstyles(mockHairstyles);
  }, []);

  const filteredHairstyles = hairstyles.filter(style => {
    const matchesFilter = filter === 'all' || style.category === filter;
    const matchesSearch = style.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Hairstyle Gallery</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search hairstyles..."
            className="px-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Styles</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHairstyles.map((style) => (
          <Link
            to={`/style/${style.id}`}
            key={style.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{style.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-purple-600">{style.category}</span>
                <span className="text-yellow-500">★ {style.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HairstyleGallery;