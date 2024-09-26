import customAxios from "./Axios";

export default {

//read
  getAll: async () => {
    return await customAxios.get('/');
  },

// add
  create: async (todo) => {
    return await customAxios.post('/', todo);
  },
  
  //delete
    delete: async (id) => {
     return await customAxios.delete(`/${id}`);
    },

  //update
    get: async (id) => {
      const data = await customAxios.get(`/${id}`);
      return data.data;
    },
    update: async (todo) => {
      const data = await customAxios.put(`/${todo.id}`, todo);
      return data.data;
    },

};