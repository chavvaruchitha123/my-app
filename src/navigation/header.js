import { Link, NavLink } from "react-router-dom"







const Headers=()=>{
  const linkstyle={textDecoration:"none",margin:20,color:"white"}
  
    return(
        <>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
       
        <Link style={linkstyle} to={"/"}>Home</Link>
      </li>
      <li className="nav-item">
        
        <Link style={linkstyle} to={"/about"}>About</Link>
      </li>
      <li className="nav-item">
        
        <Link style={linkstyle} to={"/setting"}>Setting</Link>
      </li>
      <li className="nav-item">
        
        <Link style={linkstyle} to={"/profile"}>Profile</Link>
      </li>
    </ul>
  </div>
</nav>








        </>
    )
}
export default Headers