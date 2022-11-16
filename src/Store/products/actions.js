import { 
    SAVE_DATA_SUCCESS, 
    SAVE_DATA_LOADING, 
    SAVE_DATA_ERROR, 
    DELETE_PRODUCTS_LOADING,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR,
    GET_PRODUCT_BYID_ERROR,
    GET_PRODUCT_BYID_LOADING,
    GET_PRODUCT_BYID_SUCCESS } from './types';

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

export const getProductByIdLoading = () => {
    return {
      type: GET_PRODUCT_BYID_LOADING
    };
};

export const getProductByIdSuccess = (data) => {
    return {
        type: GET_PRODUCT_BYID_SUCCESS,
        payload: data
    };
};

export const getProductByIdError = (error) => {
    return {
        type: GET_PRODUCT_BYID_ERROR,
        payload: error
    };
};