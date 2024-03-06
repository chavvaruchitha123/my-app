import InvalidScreen from "../../pages/invalid"
import LoginScreen from "../../pages/loginscreen"
import {  Route, Routes } from "react-router-dom"











const PreRouter=()=>{
    return(
    
        <Routes>
                <Route  path="/" Component={LoginScreen} />
                <Route  path="*" Component={InvalidScreen} />

                {/* <Route  path="/setting" Component={SettingScreen} />
                <Route  path="/about" Component={AboutScreen} />
                <Route  path="/profile" Component={ProfileScreen} />
                <Route  path="*" Component={InvalidScreen} /> */}
                  
              </Routes>
        
        
    )
}
export default  PreRouter