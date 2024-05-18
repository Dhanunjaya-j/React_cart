
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from './redux/ProductActionCreater/ProductAction';
import Header from './Navbar'


function Product() {
    const [product, setProduct] = useState({});
    const { id } = useParams(); // Destructure id from useParams
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            try {
                let data = await fetch(`https://fakestoreapi.com/products/${id}`);
                let res = await data.json();
                setProduct(res);
            } catch (error) {
                console.error('Error fetching the product data:', error);
            }
        }
        getData();
    }, [id]); // Add id as a dependency

    console.log(product);

    return (
        <div>
            <Header />
            <div className='container row'>
                <div className='col-md-7 '>
                    {/* Display product information */}
                    <img className='img-fluid' src={product.image} alt={product.title} />
                </div>
                <div className='col-md-5'>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button className='btn btn-primary m-2' onClick={() => { dispatch(addToCart(product)) }}>Add to Cart</button>
                    {/* <button className='btn btn-primary m-2' onClick={()=>{console.log(addToCart(product))}}>Add to Cart</button> */}
                </div>
            </div>
        </div>
    )
}

export default Product;
