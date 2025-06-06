import React, {useEffect, useState} from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import NAVA from '../Assets/logo.png';
import { Link,useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const [menu,setmenu] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
};

useEffect(() => {
  const user = localStorage.getItem("user");
  setIsLoggedIn(!!user);
}, []);

const handleLogout = () => {
  localStorage.removeItem("user");
  setIsLoggedIn(false);
  navigate("/login");
};

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='img' src={NAVA} alt="logo" onClick={handleClick}/>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("painting")}}> <Link style={{textDecoration:'none'}} to='/paintings'>Paintings</Link>{menu==="painting"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("drawing")}}> <Link style={{textDecoration:'none'}} to='/drawings'>Drawings</Link>{menu==="drawing"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("artist")}}> <Link style={{textDecoration:'none'}} to='/artists'>Artists</Link>{menu==="artist"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("workshop")}}> <Link style={{textDecoration:'none'}} to='/workshop'>Workshop</Link>{menu==="workshop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("advisory")}}> <Link style={{textDecoration:'none'}} to='/advisory'>Advisory</Link>{menu==="advisory"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {isLoggedIn ? (
            <button className='custom-btn btn-4' onClick={handleLogout}>Logout</button>
          ) : (
            <Link to='/login'><button className='custom-btn btn-4'>Login</button></Link>
          )}
            
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingBasket} size='xl' /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}


