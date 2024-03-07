// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import HomeScreen from "../pages/home"
// import SettingScreen from "../pages/setting"
// import AboutScreen from "../pages/about"
// import ProfileScreen from "../pages/profile"
// import InvalidScreen from "../pages/invalid"

import {  Route, Routes } from "react-router-dom"
import HomeScreen from "../../pages/home"
import SettingScreen from "../../pages/setting"
import AboutScreen from "../../pages/about"
import ProfileScreen from "../../pages/profile"
import InvalidScreen from "../../pages/invalid"
import ProductDetail from "../../pages/productdetail"

const PostRouter =()=>{
    return(

              <Routes>
                <Route  path="/" Component={HomeScreen} />
                <Route  path="/setting" Component={SettingScreen} />
                <Route  path="/about" Component={AboutScreen} />
                <Route  path="/profile" Component={ProfileScreen} />
                <Route  path="*" Component={InvalidScreen} />

                  <Route path="/:category/:id" Component={ProductDetail}/>
              </Routes>
    )
}
export default  PostRouter