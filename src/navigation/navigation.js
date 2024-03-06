import { BrowserRouter } from "react-router-dom"
import PostRouter from "./postrouter/postrouter"
import PreRouter from "./prerouter/prerouter"
// import HomeScreen from "../pages/home"
// import SettingScreen from "../pages/setting"
// import AboutScreen from "../pages/about"
// import ProfileScreen from "../pages/profile"
// import InvalidScreen from "../pages/invalid"

const Navigation =()=>{
    return(
      
       <BrowserRouter> 
       {
        true
        ?
        <PostRouter/>
       :
             <PreRouter/> 
       }
</BrowserRouter>
    )
}
export default Navigation