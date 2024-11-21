import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
   


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
const Demo = () => {
    const [data1,setDat1]=useState([])
    const { data: products, isLoading } = useQuery({
        queryFn: () => fetch("https://fakestoreapi.com/products").then(res => res.json()),
        queryKey: ["products"]
    })

    const {mutateAsync}=useMutation({
        mutationFn:async(category:string)=>{
            const filteredProducts=await fetch(`https://fakestoreapi.com/products/category/${category}`).then(res=>res.json())
            return filteredProducts;
        }
    })
 
const handleMensClothing=async()=>{

const mensproducts=await mutateAsync("men's clothing");
console.log(mensproducts);
setDat1(mensproducts)

}

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <button onClick={handleMensClothing}>Filter Mens Clothing</button>
            <div style={{border:'2px solid'
            }}>
            {data1?.map((product:Product) => (
                <div key={product.id}>{product.title}</div> 
            ))}
            </div>
          <div style={{border:'2px solid'}}>
          {products?.map((product:Product) => (
                <div key={product.id}>{product.title}</div> 
            ))}
          </div>
           
        </div>
    )
}

export default Demo
