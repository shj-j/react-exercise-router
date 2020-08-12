import React from 'react'
import { Link } from 'react-router-dom';

export default function Products(){
    
    const data = require('../data.json')
    const productsList = Object.values(data).map(product=>(
    <Link className="content-link" key={product.id} to={`/products/${product.id}`}>{product.name}</Link>
    ))
    console.log(productsList);
    return(
        <div className="child-page" id="products">
            <p>
                All Products: <br/>
                {productsList}
            </p>
        </div>
    );
}