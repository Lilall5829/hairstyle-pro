// src/utils/constants.js
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/users/profile',
    PREFERENCES: '/users/preferences',
  },
  APPOINTMENTS: {
    LIST: '/appointments',
    DETAIL: (id) => `/appointments/${id}`,
  },
  AR: {
    INIT: '/ar/init',
    PROCESS: '/ar/process',
    SAVE: '/ar/save',
  },
};

export const USER_ROLES = {
  CLIENT: 'client',
  STYLIST: 'stylist',
  ADMIN: 'admin',
};

export const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

export const HAIRSTYLE_CATEGORIES = {
  SHORT: 'short',
  MEDIUM: 'medium',
  LONG: 'long',
  CURLY: 'curly',
  STRAIGHT: 'straight',
  LAYERED: 'layered',
};

export const TIME_SLOTS = {
  START: '09:00',
  END: '17:00',
  DURATION: 30, // minutes
};

export const VALIDATION_RULES = {
  PASSWORD: {
    MIN_LENGTH: 8,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL: true,
  },
  PHONE: {
    PATTERN: /^\+?1?\d{10,}$/,
    ERROR_MESSAGE: 'Please enter a valid phone number',
  },
};

export const ERROR_MESSAGES = {
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    REGISTRATION_FAILED: 'Registration failed. Please try again.',
    SESSION_EXPIRED: 'Your session has expired. Please login again.',
  },
  AR: {
    INITIALIZATION_FAILED: 'Failed to initialize AR session',
    PROCESSING_FAILED: 'Failed to process image',
    NO_FACE_DETECTED: 'No face detected in the image',
  },
  APPOINTMENT: {
    BOOKING_FAILED: 'Failed to book appointment',
    INVALID_TIME: 'Selected time slot is not available',
  },
};