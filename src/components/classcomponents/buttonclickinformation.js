import { Component } from "react";

class Button extends Component{
   constructor(){
    super()
        this.state={
           class:"hello",
            deve:"js"
        }
        this.state={
            name1:"hello",
            developer1:"react"
        }
        this.state={
            name2:"hello",
            developer2:"react"
        }
        this.state={
            name3:"hi",
            developer3:"js12"
        }

    }
    information=()=>{
        this.setState(
            {
                deve:this.state.deve,
                developer3:this.state.developer3
            },
            ()=>{
                console.log(this.state.deve)
                console.log(this.state.developer3)
            }
        )
    }
    render(){
        return(
            <div>
                <h3>  {this.state.class} {this.state.deve}</h3> <h3>{this.state.name3}{this.state.developer3} </h3>
                <button onClick={this.information}  >Update </button>
            </div>
        )
   } 
}
export default Button