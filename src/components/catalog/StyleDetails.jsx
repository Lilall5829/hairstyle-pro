// src/components/catalog/StyleDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StyleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [style, setStyle] = useState(null);

  // Mock data - replace with API call
  useEffect(() => {
    // Simulating API call
    setStyle({
      id,
      name: 'Modern Pixie Cut',
      description: 'A chic and modern take on the classic pixie cut...',
      images: ['/hairstyles/pixie-1.jpg', '/hairstyles/pixie-2.jpg'],
      price: 75,
      duration: 60,
      rating: 4.5,
      reviews: [
        { id: 1, user: 'Sarah', rating: 5, comment: 'Love this style!' },
        { id: 2, user: 'Emma', rating: 4, comment: 'Great look!' },
      ],
    });
  }, [id]);

  if (!style) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={style.images[0]}
              alt={style.name}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {style.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${style.name} ${index + 1}`}
                className="w-full h-24 object-cover rounded cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">{style.name}</h1>
          <p className="text-gray-600 mb-6">{style.description}</p>
          
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-purple-600">${style.price}</span>
            <span className="ml-2 text-gray-500">/ {style.duration} min</span>
          </div>

          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => navigate('/booking')}
              className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate('/try-on')}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300"
            >
              Try On
            </button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            {style.reviews.map((review) => (
              <div key={review.id} className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="font-semibold">{review.user}</span>
                  <span className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleDetails;