const ImageComponent =()=>{
    const ImageComponent =({url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"})=>{
        return(
            <div>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height={100} width={100} alt=""/>            <img src={url} height={100} width={100}  alt="" />
       
       </div>
               )
    }}

    export default ImageComponent