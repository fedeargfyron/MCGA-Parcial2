import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/SharedComponents/Button';
import {deleteProducts, saveProducts} from '../../Store/products/thunks' 
import styles from './products.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAdd, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Products = () => {
    const { isLoading, data } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveProducts());
    }, [dispatch]);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/products/form'
        navigate(path);
    }

    const deleteProduct = (id) => {
        dispatch(deleteProducts(id));
    }

    if (isLoading) return <h3>Loading....</h3>

    return (
        <div className={styles.table}>
            <div className={styles.tableTitle}>
                <h2>Manage products</h2>
                <div className={styles.buttonContainer}>
                    <Button
                        onClick={routeChange}
                        background={'#28a745'} 
                        content={"Add product"} 
                        icon={<FontAwesomeIcon icon={faAdd} />}
                    ></Button>
                </div>
            </div>
            <table className={styles.tableContent}>
                <thead>
                    <tr className={`${styles.tableRow} ${styles.tableHeader}`}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((product) => 
                            <tr className={styles.tableRow} key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <Button 
                                            background={'none'} 
                                            color={'#FFC107'} 
                                            icon={<FontAwesomeIcon icon={faPencil} />}
                                            onClick={routeChange} />
                                        <Button 
                                            background={'none'} 
                                            color={'#F44336'} 
                                            icon={<FontAwesomeIcon icon={faTrash} />}
                                            onClick={() => deleteProduct(product._id)} />
                                    </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
    )
}

export default Products