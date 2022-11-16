import { 
    SAVE_DATA_SUCCESS, 
    SAVE_DATA_LOADING, 
    SAVE_DATA_ERROR, 
    DELETE_PRODUCTS_LOADING,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR } from './types';

export const saveData = (data) => {
  return {
    type: SAVE_DATA_SUCCESS,
    payload: data,
  };
};

export const saveDataLoading  = (isLoading) => {
  return {
    type: SAVE_DATA_LOADING,
    payload: isLoading,
  };
};


export const saveDataError = () => {
  return {
    type: SAVE_DATA_ERROR,
  };
};

export const deleteProductsLoading = () => {
    return {
      type: DELETE_PRODUCTS_LOADING
    };
  };
  
  export const deleteProductsSuccess = (data) => {
    console.log(data);
    return {
      type: DELETE_PRODUCTS_SUCCESS,
      payload: data
    };
  };
  
  export const deleteProductsError = (error) => {
    return {
      type: DELETE_PRODUCTS_ERROR,
      payload: error
    };
  };