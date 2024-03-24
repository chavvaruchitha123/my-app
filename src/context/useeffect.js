import axios from "axios"
import { useEffect, useState } from "react"
const ApiExample = ()=>{

    const[data, setData] = useState([])

    useEffect(()=>{

        Fetchdata()
    },[])

    const Fetchdata = ()=>{

        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            setData(res.data)
        })
    }

    const deleteItem = (id)=>{
        setData(data.filter((each,index)=>{
            return id!==index
        }))

    }

    return(
        <>
        {
       data.map((eachitem,id)=>{
        return(
            <>
            <h1>{eachitem.title}</h1>
            <img src={eachitem.image} width={200} alt=""/>
            <button onClick={()=>deleteItem(id)}>Delete Item</button>
      </>  )
       })
        }
        </>
    )
}

export default ApiExample