import React, { Component } from 'react'

// export default function Products(){
//     const data = require('../data.json');
//     console.log(this.props)
//     return(
//         <div className="child-page">
//            <b>Product Detail</b>
//         <p className="content-link">{data.TV.name}</p>
//         </div>
//     );
// }

class Product extends Component {
    state={
        data: require('../data.json')
    }
    render() {
        const id = this.props.match.params.id;
        const url = this.props.match.url;
        const productDetail = Object.values(this.state.data).filter(item=>item.id === +id)[0]
        // console.log(productDetail)
        return(
            <div className="child-page">
                <b>Product Detail</b>
                {Object.keys(productDetail).map((info)=>
                <p>{info}: {productDetail[info]}</p>)}
                <p>URL: {url}</p>
            </div>
        );
    }
}
export default Product;