import { Component } from "react";



class ImageComponent extends Component{
    constructor(){
        super()
        this.state={
            name:"rajeshr",
            salary:10000

        }
    }
    handleIncrementSalary=()=>{
        // alert("clicked")
        this.setState(
            {
                salary:this.state.salary+1000
            },
            ()=>{
                console.log(this.state.salary)
            }
        )
        // console.log(this.state.salary,"outside")

    }

render(){
    return(
        <div>
            <h3>hello world   {this.state.name} {this.state.salary} </h3>
            <button onClick={this.handleIncrementSalary}  >Update salary by 1000</button>
        </div>
    )
}
}

// CRUD : Create , Read , Update , Delete 

export default ImageComponent
