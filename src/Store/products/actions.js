import { 
    SAVE_DATA_SUCCESS, 
    SAVE_DATA_LOADING, 
    SAVE_DATA_ERROR, 
    DELETE_PRODUCTS_LOADING,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR,
    GET_PRODUCT_BYID_ERROR,
    GET_PRODUCT_BYID_LOADING,
    GET_PRODUCT_BYID_SUCCESS,
    POST_PRODUCT_ERROR,
    POST_PRODUCT_LOADING,
    POST_PRODUCT_SUCCESS,
    PUT_PRODUCT_ERROR,
    PUT_PRODUCT_LOADING,
    PUT_PRODUCT_SUCCESS } from './types';

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

export const postProductLoading = () => {
    return {
      type: POST_PRODUCT_LOADING
    };
};

export const postProductSuccess = (data) => {
    return {
        type: POST_PRODUCT_SUCCESS,
        payload: data
    };
};

export const postProductError = (error) => {
    return {
        type: POST_PRODUCT_ERROR,
        payload: error
    };
};

export const putProductLoading = () => {
    return {
      type: PUT_PRODUCT_LOADING
    };
};

export const putProductSuccess = (data) => {
    return {
        type: PUT_PRODUCT_SUCCESS,
        payload: data
    };
};

export const putProductError = (error) => {
    return {
        type: PUT_PRODUCT_ERROR,
        payload: error
    };
};