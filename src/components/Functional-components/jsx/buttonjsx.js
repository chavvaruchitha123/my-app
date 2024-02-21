function ButtonComponent({title,width,bgColor})
{
    return(
        <div>
             <button style={{backgroundColor:bgColor}}>{title}</button> 
        </div>
       
    )
}
export default ButtonComponent;