import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from '../data'
import GhostPage from '../GhostPage'

const Body = ({ name, code, type, price, image }) => {
    const url = 'https://berequirement.herokuapp.com/products'
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(url)
            const json = await res.json()
            const {data} = json
            setProduct(data)
            console.log(data);
        }

        fetchProduct()
        console.log(product);
    },[])
    
    return (
        <div>
            {data.map((inner, index) => (
                <GhostPage key={index} name={inner.name} code={inner.code} type={inner.type} price={inner.price} />
            ))}
        </div>
       
    )
}

export default Body