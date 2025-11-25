import { API_AUTH_BASE_URL } from "./urls";
import axios from "axios";

/**
 * @typedef {Object} RegisterRequest
 * @property {string} email
 * @property {string} password
 * @property {string} userName
 */

/**
 * @typedef {Object} RegisterResponse
 * @property {string} email
 * @property {string} userName
 */

/**
 * Registers a new user.
 *
 * @param {RegisterRequest} userData
 * @returns {Promise<RegisterResponse>}
 */

export const registerUser = async (userData) => {
    const response = await axios.post(
        `${API_AUTH_BASE_URL}/register`,
        userData,
        {
            headers: { "Content-Type": "application/json" },
        },
    );

    return response.data;
};
