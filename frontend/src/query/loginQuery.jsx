import { API_AUTH_BASE_URL } from "./urls";
import axios from "axios";

/**
 * @typedef {Object} LoginRequest
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} LoginResponse
 * @property {string} accessToken
 */

/**
 * logs in new user.
 *
 * @param {LoginRequest} userData
 * @returns {Promise<LoginResponse>}
 */

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_AUTH_BASE_URL}/login`, userData, {
        headers: { "Content-Type": "application/json" },
    });

    return response.data;
};
