import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const CheckOut = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://vast-inlet-40416.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);

            })
    }, [])

    const { car, price } = product;
    const setTime={
        curTime : new Date().toLocaleString(),  
      }

      const handleCheckOut = () =>{
          const checkOut = {...setTime,car,price};
          fetch('https://vast-inlet-40416.herokuapp.com/orders/' + id,{
              method : 'POST',
              headers :{ 'Content-Type' : 'application/json'},
              body : JSON.stringify(checkOut)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
          })
      }

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{car}</th>
                        <td>${price}</td>
                        <td>1</td>
                        <td>{setTime.curTime}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={'/orders/' + id}><button onClick={handleCheckOut}>Check Out</button></Link>
        </div>
    );
};

export default CheckOut;