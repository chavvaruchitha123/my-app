import { useEffect, useState } from "react"
import Headers from "../navigation/header"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";




const HomeScreen =()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
   axios.get("https://fakestoreapi.com/products")
.then(response=>{
    if(response.status===200){
    setdata(response.data)
}
})
.catch(err=>console.log(err))
    },[])
    return(
        <>
    
        <Headers></Headers>    
       <h2>i am home</h2>
       {
        data.map((eachobject)=>{
            return(
                <>
                <CustomCard data={eachobject}/>
                </>
            )
        })
       }
        </>
    )
}
export default HomeScreen



function CustomCard(props) {
    const {data:{image,category,price,description,title,id}}=props
    const handleClick=()=>{

    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{width:100}} height={100} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <button><Link to={`/${category}/${id}`}>navigate</Link></button>
      
</Card.Body>
</Card>
  );
}

