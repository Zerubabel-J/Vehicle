import axios from "axios";

// const API_URL = "http://localhost:5000/api";
const API_URL = "https://vehicle-8tdh.onrender.com/api";

export const fetchVehicles = async () => {
  const response = await axios.get(`${API_URL}/vehicles`);
  return response.data;
};

export const addVehicle = async (vehicle) => {
  const response = await axios.post(`${API_URL}/vehicles`, vehicle);
  return response.data;
};

export const updateVehicle = async (id, updates) => {
  const response = await axios.put(`${API_URL}/vehicles/${id}`, updates);
  return response.data;
};

export const deleteVehicle = async (id) => {
  const response = await axios.delete(`${API_URL}/vehicles/${id}`);
  return response.data;
};

export const fetchStatistics = async () => {
  const response = await axios.get(`${API_URL}/statistics`);
  return response.data;
};
