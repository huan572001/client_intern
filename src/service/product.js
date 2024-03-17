import axiosClient from "./axiosClient";

export const ProductAPI = {
  getAllProduct: async () => {
    const url = `products`;
    return axiosClient.get(url);
  },
  addToCart: async (data) => {
    const url = `add-to-cart`;
    return axiosClient.post(url, data);
  },
  removeToCart: async (id) => {
    const url = `carts/${id}`;
    return axiosClient.delete(url);
  },
  updateCart: async (id, data) => {
    const url = `carts/${id}`;
    return axiosClient.post(url, data);
  },
};
