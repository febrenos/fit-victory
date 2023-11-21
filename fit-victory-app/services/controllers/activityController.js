import { useEffect, useState } from 'react';
import { api } from '../api'

export const useActivityController = () => {
    const [list, setList] = useState([]);
  
    useEffect(() => {
      loadList();
    }, []);
  
    const saveItem = async (obj) => {
      const response = await api.post("/items.json", obj);
      return await loadList();
    };
  
    const loadList = () => {
      return api.get("/items.json")
        .then((info) => {
          const newList = [];
          for (let key in info.data) {
            const obj = info.data[key];
            obj["id"] = key;
            newList.push(obj);
          }
          setList(newList);
          return newList;
        })
    };
  
    const deleteItem = (id) => {
      return api.delete(`/items/${id}.json`)
        .then(() => {
          return loadList();
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
          throw error;
        });
    };
  
    const editItem = (id, newObject) => {
      return api.put(`/items/${id}.json`, newObject)
        .then(() => {
          return loadList();
        })
        .catch((error) => {
          console.error('Error editing item:', error);
          throw error;
        });
    };
  
    return {
      list,
      save: saveItem,
      load: loadList,
      del: deleteItem,
      edit: editItem,
    };
  };