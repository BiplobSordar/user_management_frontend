const ENDPOINTS = {
  HEALTH: "/health",

  USERS: "/users",

  USER_BY_ID: (id) => `/users/${id}`,

  UPDATE_USER: (id) => `/users/${id}`,

  DELETE_USER: (id) => `/users/${id}`,
};

export default ENDPOINTS;