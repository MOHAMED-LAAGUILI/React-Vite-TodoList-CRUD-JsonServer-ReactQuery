import customAxios from "./Axios";

export default {
  getAll: async () => {
    const data = await customAxios.get('/');
    return data.data;
  },

  create: async (todo) => {
    const data = await customAxios.post('/', todo);
    return data;
  },

  delete: async (id) => {
    const data = await customAxios.delete('/', id);
    return data;
  }
  
};