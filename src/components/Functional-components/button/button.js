function ButtonComponent(){
    function ButtonComponent({title,bgColor,width=100}){
        return(
            <div>
            <button>Login</button>
           
            <button style={{width:width,backgroundColor:bgColor}} >{title}</button>
        
        </div>
        )
    }
}
     export default ButtonComponent
    