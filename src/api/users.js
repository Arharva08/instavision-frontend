import axios from 'axios'
import API_BASE_URL from './api'

/**
 * Get all users (Admin only)
 * @param {string} token - Admin JWT token
 * @returns {Promise<Array>} List of all users
 */
export const getAllUsers = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    // The API returns { success, message, data: [...] }
    return response.data.data || []
  } catch (error) {
    throw error.response?.data || error.message
  }
}

/**
 * Get user by ID
 * @param {string} token - JWT token
 * @param {number} id - User ID
 * @returns {Promise<Object>} User data
 */
export const getUserById = async (token, id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    return response.data.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

/**
 * Update user (Admin only)
 * @param {string} token - Admin JWT token
 * @param {number} id - User ID
 * @param {Object} userData - User data to update
 * @returns {Promise<Object>} Updated user data
 */
export const updateUser = async (token, id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

/**
 * Delete user (Admin only)
 * @param {string} token - Admin JWT token
 * @param {number} id - User ID
 * @returns {Promise<Object>} Success response
 */
export const deleteUser = async (token, id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

/**
 * Toggle user status (Admin only)
 * @param {string} token - Admin JWT token
 * @param {number} id - User ID
 * @param {string} status - 'active' or 'inactive'
 * @returns {Promise<Object>} Success response
 */
export const toggleUserStatus = async (token, id, status) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/users/${id}/status`, 
      { status }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

/**
 * Reset user password (Admin only)
 * @param {string} token - Admin JWT token
 * @param {number} id - User ID
 * @returns {Promise<Object>} Success response
 */
export const resetUserPassword = async (token, id) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/${id}/reset-password`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}