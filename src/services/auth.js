// src/services/auth.js
import { post } from './api';

export const login = async (email, password) => {
  try {
    // Simulate successful login for demo
    console.log('Login attempt:', { email, password });
    const mockResponse = {
      token: 'mock_token_123',
      role: email.includes('stylist') ? 'stylist' : 'client'
    };
    localStorage.setItem('token', mockResponse.token);
    localStorage.setItem('userRole', mockResponse.role);
    return { success: true, role: mockResponse.role };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false };
  }
};

export const register = async (userData) => {
  try {
    // Simulate successful registration for demo
    console.log('Registration data:', userData);
    return { success: true, message: 'Registration successful' };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: error.message };
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  window.location.href = '/login';
};

export const checkAuth = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const getUserRole = () => {
  return localStorage.getItem('userRole') || 'client';
};