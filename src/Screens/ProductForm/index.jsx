import React, { useEffect, useState } from 'react'
import styles from './productForm.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Input from '../../Components/SharedComponents/Input'
import InputContainer from '../../Components/SharedComponents/InputContainer'
const ProductForm = () => {

    const [editProduct, setEditProduct] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const { isLoading, product } = useSelector((state) => state.products);
    const id = params.id;
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    console.log(errors.name);

    const onSubmit = () => {
        console.log("hola");
    }

    useEffect(() => {
        if (id) dispatch(/*getByIdProducts(id)*/);
    }, [id, dispatch]);

    useEffect(() => {
        if(!product || !id) return;

        setEditProduct(true);
        setValue("name", product.name);
        setValue("description", product.description);
        setValue("price", product.price);
        setValue("stock", product.stock);
        setValue("category", product.category);
      }, [id, product, setValue]);

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
             <button type='submit'>Submit</button>
        </form>
    )
}

export default ProductForm