// const ImageComponent=()=>{
//    return(
//     <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="img" height={100} width={100}/>
//    ) 
// }
// export default ImageComponent
const ImageComponent =({url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"})=>{
    return(
      <div>
        <img src={url} height={100} width={100} alt="" />
        <img src={url} height={500} width={"50%"} style={{marginLeft:300}} alt="" />
        </div>
    )
}
export  default ImageComponent

