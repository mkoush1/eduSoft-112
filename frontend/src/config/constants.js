// Global constants for the application

// Safely access environment variables
const getEnvVariable = (key, defaultValue) => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key]
  }
  
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key]
  }
  
  return defaultValue
}

// Backend URL configuration
export const BACKEND_URL = getEnvVariable('VITE_REACT_APP_BACKEND_BASEURL', 'https://edu-soft-main.vercel.app');

// API URL configuration - prioritize environment variable, then fallback to defaults
export const API_URL = getEnvVariable('VITE_API_URL', '') || 
                      (typeof window !== 'undefined' ? window.location.origin + '/api' : '') || 
                      `${BACKEND_URL}/api`;

// Assessment types
export const ASSESSMENT_TYPES = {
  WRITING: 'writing',
  SPEAKING: 'speaking',
  READING: 'reading',
  LISTENING: 'listening'
};

// CEFR levels
export const CEFR_LEVELS = {
  A1: 'a1',
  A2: 'a2',
  B1: 'b1',
  B2: 'b2',
  C1: 'c1',
  C2: 'c2'
};

// Languages
export const LANGUAGES = {
  ENGLISH: 'english',
  FRENCH: 'french'
}; 