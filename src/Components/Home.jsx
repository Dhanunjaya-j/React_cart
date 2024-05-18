import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./Navbar";
import '../Ascets/CSS/Home.css'
import { Link } from "react-router-dom";
import Loading from "./Loading";


function Home() {

  const [data, setdata] = useState([])

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products'
    axios.get(url).then(response => {
      setdata(response.data)
    })
    // console.log(data);
  }, [])

  return (
    <div>
      <Header/>
      <h1>Products</h1>
      <div className="d-flex flex-row flex-wrap container mr-2">
        {
          data.length> 0 ? (
            data.map(item => (
              <div>
                <Link to={`/product/${item.id}`}>
                  <div className="card m-2 w-10 p-1" key={item.id} style={{ width: "18rem" }} >
                    <img src={item.image} id="card_img" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.category}</p>
                      <p className="card-text">{item.rating.rate}</p>
                      <p className="card-text">{item.rating.count}</p>
                      <a href="#" className="btn btn-primary m-2">Buy now</a>
                      {/* <a href="#" className="btn btn-primary m-2">Add to Card</a> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : ( <Loading/>)
        
        }

      </div>
    </div>
  )
}

export default Home