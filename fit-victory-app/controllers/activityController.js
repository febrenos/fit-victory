import { useEffect, useState } from 'react';
import { activityApi } from '../services/api'

export const useActivityController = () => {
    const [list, setList] = useState([]);
  
    useEffect(() => {
      loadList();
    }, []);
  
    const saveItem = async (obj) => {
      const response = await activityApi.post("/items.json", obj);
      return await loadList();
    };
  
    const loadList = () => {
      return activityApi.get("/items.json")
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
      return activityApi.delete(`/items/${id}.json`)
        .then(() => {
          return loadList();
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
          throw error;
        });
    };
  
    const editItem = (id, newObject) => {
      return activityApi.put(`/items/${id}.json`, newObject)
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