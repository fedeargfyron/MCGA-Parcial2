import {
    saveData,
    saveDataLoading,
    saveDataError,
    deleteProductsLoading,
    deleteProductsError,
    deleteProductsSuccess
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
  ;