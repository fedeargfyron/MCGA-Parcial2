import React, { useEffect, useState } from 'react'
import styles from './productForm.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../Components/SharedComponents/Input'
import InputContainer from '../../Components/SharedComponents/InputContainer'
import Button from '../../Components/SharedComponents/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCancel } from '@fortawesome/free-solid-svg-icons'
import { getProductById } from '../../Store/products/thunks'
const ProductForm = () => {

    const [editForm, setEditForm] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const { isLoading, product } = useSelector((state) => state.products);
    const id = params.id;
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        let body = {
            "name": e.name,
            "description": e.description,
            "price": e.price,
            "stock": e.stock,
            "category": e.category
        };

        /*
        if(editForm) return dispatch(editProduct(id, body));

        dispatch(addProduct(body));
        */
    }

    useEffect(() => {
        if (id) dispatch(getProductById(id));
    }, [id, dispatch]);

    useEffect(() => {
        if(!product || !id) return;

        setEditForm(true);
        setValue("name", product.name);
        setValue("description", product.description);
        setValue("price", product.price);
        setValue("stock", product.stock);
        setValue("category", product.category);
      }, [id, product, setValue]);
    
    let navigate = useNavigate();
    const cancelClick = () => {
        let path = `/products`
        navigate(path);
    }


    if(isLoading) return <h3>Loading....</h3>;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>ProductForm</h2>
            <InputContainer label={'Name'} errors={errors.name}>
                <Input
                    register={register}
                    inputName={'name'}
                    requiredTags={{ required: true, maxLength: 20, minLength: 5, pattern: /(^$)|[a-zA-Z0-9]/ }}
                    placeholder={'Name'}
                />
            </InputContainer>
            <InputContainer label={'Description'} errors={errors.description}>
                <Input
                    register={register}
                    inputName={'description'}
                    requiredTags={{ required: true, maxLength: 50, pattern: /(^$)|[a-zA-Z0-9]/ }}
                    placeholder={'Description'}
                />
            </InputContainer>
            <InputContainer label={'Price'} errors={errors.price}>
                <Input
                    register={register}
                    inputName={'price'}
                    type="number"
                    requiredTags={{ required: true, min: 1 }}
                    placeholder={'Price'}
                />
            </InputContainer>
            <InputContainer label={'Stock'} errors={errors.stock}>
                <Input
                    register={register}
                    inputName={'stock'}
                    type="number"
                    requiredTags={{ required: true, min: 1 }}
                    placeholder={'Stock'}
                />
            </InputContainer>
            <InputContainer label={'Category'} errors={errors.category}>
                <Input
                    register={register}
                    inputName={'category'}
                    requiredTags={{ required: true, maxLength: 50, pattern: /(^$)|[a-zA-Z0-9]/ }}
                    placeholder={'Category'}
                />
            </InputContainer>
            <div className={styles.buttonContainer}>
                <Button 
                content='Add' 
                background={'#28a745'} 
                type='submit'
                icon={<FontAwesomeIcon icon={faAdd}/>} 
                />
                <Button
                onClick={cancelClick}
                content='Cancel' 
                background={'#F44336'} 
                type='button'
                icon={<FontAwesomeIcon icon={faCancel}/>}
                 />
            </div>
        </form>
    )
}

export default ProductForm