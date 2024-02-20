import styles from "./text.module.css"



const FancyText =()=>{
    const objectStyling={

            color:"red",
            backgroundColor:"black"


    }
    return(
        <div>
        <h5 style={objectStyling}   >hello</h5>
        <h5  className="text"   >good afternoon</h5>
        <h5 className={styles.hello} >External module styles</h5>
        </div>
    )
}

export default FancyText