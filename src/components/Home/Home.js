import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState(fakeData);

    useEffect(() => {
        fetch('https://vast-inlet-40416.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);


    // console.log(products);

    // const handleAddProduct = () =>{
    //     fetch('https://vast-inlet-40416.herokuapp.com/addProduct',{
    //         method : 'POST',
    //         headers : {'Content-Type': 'application/json'},
    //         body : JSON.stringify(fakeData[19])
    //     })
    // }

    return (
        <div>
            {/* <button onClick={handleAddProduct}>Add Product</button> */}
            <div className="row">
                {
                    products.map(pd => <Products product={pd}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;