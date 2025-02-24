// src/components/ar/VirtualTryOn.jsx
import React, { useState, useRef } from 'react';
import { processImage } from '../../services/ar';

function VirtualTryOn() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = async () => {
    if (!selectedFile) return;
    
    setIsProcessing(true);
    try {
      const processedImageUrl = await processImage(selectedFile);
      setPreviewUrl(processedImageUrl);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Virtual Hair Try-On</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
            >
              Upload Your Photo
            </button>
          </div>
          {previewUrl && (
            <div className="mt-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full rounded-lg shadow"
              />
            </div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Hairstyle Options</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Sample hairstyle options */}
            <div className="cursor-pointer hover:opacity-75">
              <img src="/hairstyles/style1.jpg" alt="Hairstyle 1" className="rounded" />
            </div>
            <div className="cursor-pointer hover:opacity-75">
              <img src="/hairstyles/style2.jpg" alt="Hairstyle 2" className="rounded" />
            </div>
          </div>
          <button
            onClick={handleTryOn}
            disabled={!selectedFile || isProcessing}
            className={`w-full mt-6 py-2 px-4 rounded ${
              !selectedFile || isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            } text-white`}
          >
            {isProcessing ? 'Processing...' : 'Try On Selected Style'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VirtualTryOn;