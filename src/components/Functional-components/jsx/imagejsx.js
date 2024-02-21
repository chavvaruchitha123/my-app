function ImageComponent()
{
    const images= [
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ]
return (
    // <ul>
    //     {
    //         images.map((eachItem)=>{
    //        <li>{eachItem.images}</li>
    //         })
    //     }
    // </ul>
    <ul>
        <li><img src={images[0]} width="100px" alt=""/></li>
        <li><img src={images[1]} width="100px" alt=""/></li>
        <li><img src={images[2]} width="100px" alt=""/></li>
    </ul>
)
}

export default ImageComponent