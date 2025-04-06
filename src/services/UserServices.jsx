import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/`);
    //console.log("Users fetched successfully:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/`);
    console.log("User details fetched:", response.data); 
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
  }
};

export const addUser = async (user) => {
  const response = await axios.post(`${API_URL}/users/`, user);
  return response.data;
};

export const updateUser = async (userId, updatedUser, token) => {
  try {
    const response = await axios.put(
      `${API_URL}/users/${userId}/`,
      updatedUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("User updated successfully:", response.data); // Debugging line
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    console.log("Login successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
