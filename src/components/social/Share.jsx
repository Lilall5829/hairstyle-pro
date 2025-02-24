// src/components/social/Share.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Share() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  
  const hairstyle = {
    id,
    name: 'Modern Pixie Cut',
    image: '/hairstyles/pixie-1.jpg',
    description: 'A chic and modern take on the classic pixie cut...'
  };

  const shareUrl = `${window.location.origin}/style/${id}`;
  
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: 'facebook',
      color: 'bg-blue-600',
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      color: 'bg-blue-400',
      shareUrl: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`Check out this amazing hairstyle: ${hairstyle.name}`)}`
    },
    {
      name: 'Pinterest',
      icon: 'pinterest',
      color: 'bg-red-600',
      shareUrl: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(hairstyle.image)}&description=${encodeURIComponent(hairstyle.description)}`
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Share this Hairstyle</h2>
        
        <div className="mb-8">
          <img
            src={hairstyle.image}
            alt={hairstyle.name}
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">{hairstyle.name}</h3>
          <p className="text-gray-600 mt-2">{hairstyle.description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-4">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} text-white px-6 py-2 rounded-lg flex items-center justify-center hover:opacity-90`}
              >
                <span>{platform.name}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 p-2 border rounded bg-gray-50"
            />
            <button
              onClick={copyToClipboard}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;