import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export const getUsers = async () => {
  const { data } = await api.get(ENDPOINTS.USERS);
  return data;
};

export const getUser = async (id) => {
  const { data } = await api.get(
    ENDPOINTS.USER_BY_ID(id)
  );

  return data;
};

export const createUser = async (payload) => {
  const { data } = await api.post(
    ENDPOINTS.USERS,
    payload
  );

  return data;
};

export const updateUser = async (
  id,
  payload
) => {
  const { data } = await api.patch(
    ENDPOINTS.UPDATE_USER(id),
    payload
  );

  return data;
};

export const deleteUser = async (id) => {
  const { data } = await api.delete(
    ENDPOINTS.DELETE_USER(id)
  );

  return data;
};