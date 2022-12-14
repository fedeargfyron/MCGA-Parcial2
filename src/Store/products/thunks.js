import {
    saveData,
    saveDataLoading,
    saveDataError,
    deleteProductsLoading,
    deleteProductsError,
    deleteProductsSuccess,
    getProductByIdLoading,
    getProductByIdSuccess,
    getProductByIdError,
    postProductLoading,
    postProductSuccess,
    postProductError,
    putProductLoading,
    putProductSuccess,
    putProductError
} from './actions'

export const saveProducts = () => async (dispatch) => {
    dispatch(saveDataLoading(true));
    try {
        const response = await fetch('https://mcga-2022-backend-tm.vercel.app/api/products');
        const json = await response.json();
        if (response.status !== 200) throw new Error('Error');

        dispatch(saveData(json));
    } catch (error) {
        dispatch(saveDataError());
    }
}

export const deleteProducts = (id) => async (dispatch) => {
    dispatch(deleteProductsLoading());
    try {
    const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/${id}`, {method: 'DELETE'});
    const json = await response.json();
    if(response.status !== 200 ) throw new Error(json)

    dispatch(deleteProductsSuccess(json));
    dispatch(saveProducts());
    } catch (error) {
    dispatch(deleteProductsError(error.toString()));
    }
};

export const getProductById = (id) => async (dispatch) => {
    dispatch(getProductByIdLoading());
    try {
      const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/${id}`);
      const json = await response.json();
      if(response.status !== 200 ) throw new Error(json)

      dispatch(getProductByIdSuccess(json));
    } catch (error) {
      dispatch(getProductByIdError(error.toString()));
    }
};

export const postProduct = (body) => async (dispatch) => {
    dispatch(postProductLoading());
    try {
        const response = await fetch('https://mcga-2022-backend-tm.vercel.app/api/products/add', { 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        const json = await response.json();
        if(response.status !== 201 ) throw new Error(json)

        dispatch(postProductSuccess(json));
    } catch (error) {
        dispatch(postProductError(error.toString()));
    }
};

export const updateProduct = (id, body) => async (dispatch) => {
    dispatch(putProductLoading());
    try {
        const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/${id}`, { 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(body)
        });
        const json = await response.json();
        if(response.status !== 201 ) throw new Error(json)

        dispatch(putProductSuccess(json));
    } catch (error) {
        dispatch(putProductError(error.toString()));
    }
};