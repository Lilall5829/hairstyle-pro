// src/services/ar.js
import { post } from './api';

export const initializeAR = async () => {
  try {
    const response = await post('/ar/init', {});
    return response.sessionId;
  } catch (error) {
    console.error('AR initialization error:', error);
    throw error;
  }
};

export const processImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch('http://localhost:3001/api/ar/process', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData
    });

    if (!response.ok) throw new Error('Image processing failed');
    const data = await response.json();
    return data.processedImageUrl;
  } catch (error) {
    console.error('Image processing error:', error);
    throw error;
  }
};

export const saveHairstyle = async (sessionId, hairstyleData) => {
  try {
    const response = await post('/ar/save', {
      sessionId,
      ...hairstyleData
    });
    return response.savedImageUrl;
  } catch (error) {
    console.error('Save hairstyle error:', error);
    throw error;
  }
};

export const detectFace = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch('http://localhost:3001/api/ar/detect-face', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData
    });

    if (!response.ok) throw new Error('Face detection failed');
    return await response.json();
  } catch (error) {
    console.error('Face detection error:', error);
    throw error;
  }
};