import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './redux/ProductActionCreater/ProductAction';
import Header from './Navbar'


// it will select the data from store and it will get the data

function Cart() {
    // it will take call back function
    const cart_data = useSelector((state) => state.productData.cartData)
    const dispatch=useDispatch()
    console.log(cart_data);
    return (
        <div>
            <Header />
            {
                cart_data && cart_data.length ? (
                    <div>
                        {
                            cart_data.map((product) => (
                                <div className='container row'>
                                    <div className='img-fluid col-md-6' >
                                        <img className='img-fluid' src={product.image} alt={cart_data.title} />
                                    </div>
                                    <div className='col-md-6' >
                                        <h1>{product.title}</h1>
                                        <p>{product.description}</p>
                                        <p>Price: ${product.price}</p>
                                        <button className='btn btn-primary m-2' onClick={()=>{dispatch(removeFromCart(product.id))}}>Remove</button>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                ) : (<div>cart is Empty...</div>)
            }

        </div>
    )
}

export default Cart