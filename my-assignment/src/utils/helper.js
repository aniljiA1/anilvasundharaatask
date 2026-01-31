// utils/helper.js

export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const getPriorityColor = (priority) => {
  const colors = {
    low: "bg-green-200",
    medium: "bg-yellow-200",
    high: "bg-red-200",
  };
  return colors[priority] || "bg-gray-200";
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};
