import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



const ProductDetail=()=>{
    const routeinformation=useParams()
    console.log(routeinformation,"routeinformation")
    const[product,setproduct]=useState({})
    useEffect(()=>{

        fetchdata()
    },[routeinformation.id])
    const fetchdata=()=>{
         axios.get(`https://fakestoreapi.com/products/${routeinformation.id}`)
         .then(response=>{
            if(response.status===200){
                setproduct(response.data)
            }
         })
    }
    return(
        <>
        <h1>i am product screen</h1>
        
        </>
    )
}
export default ProductDetail