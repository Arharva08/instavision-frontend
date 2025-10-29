import axios from 'axios';
import API_BASE_URL from './api';

/**
 * Authentication API functions
 */

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} Login response with token and user data
 */
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Get current authenticated user
 * @param {string} token - JWT token
 * @returns {Promise} Current user data
 */
export const getCurrentUser = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // Return just the user data from the response
    return response.data.data || response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Register a new student user (Admin only)
 * @param {string} token - Admin JWT token
 * @param {Object} userData - User registration data
 * @returns {Promise} Registered user data
 */
export const registerUser = async (token, userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

/**
 * Logout user (clear token from localStorage)
 */
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/**
 * Save token to localStorage
 * @param {string} token - JWT token
 */
export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Get token from localStorage
 * @returns {string|null} JWT token or null
 */
export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Save user data to localStorage
 * @param {Object} user - User data
 */
export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

/**
 * Get user from localStorage
 * @returns {Object|null} User data or null
 */
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if token exists
 */
export const isAuthenticated = () => {
  return !!getToken();
};

/**
 * Check if user is admin
 * @returns {boolean} True if user is admin
 */
export const isAdmin = () => {
  const user = getUser();
  return user?.role === 'admin';
};

