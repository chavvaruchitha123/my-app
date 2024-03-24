import { Component } from "react"

class Child extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <>
            <h1>Child </h1>
            <h2>{this.props.count}</h2>

       </>
        )
    }
}
export default Child