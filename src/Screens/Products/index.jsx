import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {saveProducts} from '../../Store/products/thunks' 

const Products = () => {
    const productsSelector = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveProducts());
    }, [dispatch]);

    if (productsSelector.isLoading) return <h3>Loading....</h3>

    return (
        <div>{
            productsSelector.data.map((product) => {
                return (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.price} pesos</p>
                    </div>
                )
            }
            ) 
        }</div>
    )
}

export default Products