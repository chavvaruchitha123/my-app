import React, { useState } from 'react'
import ComponentB from './componentB'


function ComponentA(){
    // const[name,setname]=useState("ruchitha")
    return(
        <div>
            <ComponentB name={"ruchitha"}></ComponentB>
        </div>

    )
}
export default ComponentA