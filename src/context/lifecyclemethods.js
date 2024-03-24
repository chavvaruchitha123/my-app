import { Component } from "react";
import Child from "./child";

class LifeCycle extends Component{
    constructor(){
        super()
        this.state={
             count:10
        }
        }
        handleclick=()=>{

            // this.setState(prevstate=>({
            //     count:prevstate.count+10

            // }))
            this.setState({count:this.state.count+10})
        }
    render(){
       return(
        <>
        {/* <h1>{this.state.count}</h1> */}
        <Child></Child>
        <button onClick={this.handleclick}>click</button>
        {/* <button onClick={()=>this.setState({count:this.state.count+10})}>click</button> */}
    </>
       ) 


    }
}
export default LifeCycle