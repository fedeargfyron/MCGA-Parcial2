import { 
    SAVE_DATA_SUCCESS, 
    SAVE_DATA_LOADING, 
    SAVE_DATA_ERROR,
    DELETE_PRODUCTS_ERROR,
    DELETE_PRODUCTS_LOADING,
    DELETE_PRODUCTS_SUCCESS,
    GET_PRODUCT_BYID_ERROR,
    GET_PRODUCT_BYID_LOADING,
    GET_PRODUCT_BYID_SUCCESS } from './types';

 const INITIAL_STATE = {
   data: [],
   isLoading: false,
   isError: false 
 };

 const productsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
        case SAVE_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isError: false,
                isLoading: false
            };

        case SAVE_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        case SAVE_DATA_ERROR: 
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        case DELETE_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false
            };
        case DELETE_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case GET_PRODUCT_BYID_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_PRODUCT_BYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                product: action.payload
            };
        case GET_PRODUCT_BYID_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
     default:
       return state;
   }
 };

 export default productsReducer;