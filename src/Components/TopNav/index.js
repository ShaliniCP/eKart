import { useSelector } from 'react-redux';
import './_top-nav.scss'
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import { gapi } from 'gapi-script';

const TopNav=()=>{
  const cartItemsCount=useSelector(state=>state.cr.totalItems);

  const [userDetails,setUserDetails]=useState('');

  const successHandler=(res)=>{
    setUserDetails(res.profileObj);
  }
    return(
        <div className='header bg-dark'>
      <div className='row  top-nav-row'>
      <div className='brand my-1'>
      <h1>eKart</h1>
      </div>
      <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
        <div className='dropdown m-0 p-0'>
          <select className='select-btn w-100 p-0 m-0'>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <input className='form-control' placeholder='Search...'/>
        <button><i className='fa fa-search'/></button>
      </div>
      <div className='login-container p-0'>
        <i className='fa fa-user-circle user-icon'/>
        <h5>
          {
            userDetails===''?
            <GoogleLogin 
            clientId='798383637251-egbp4bmg6e0eu4d9306cvdrj5fk9fl36.apps.googleusercontent.com' 
            buttonText='Login' 
            onSuccess={successHandler} 
            cookiePolicy='single_host_origin'
            />
            :
            userDetails.name
          }
          </h5>
      </div>
      <div className='cart-wishlist'>
        <ul className='p-0'>
          <li className='list-icon'><i className='fa fa-heart'/></li>
          <Link to='/cart'>
          <li className='list-icon'>
            <i className='fa fa-shopping-cart'/>
            {
            cartItemsCount!==0?
            <div id='cart-item-count'>
              <p>{cartItemsCount}</p>
            </div>
            :<></>
            }
            </li>
          </Link>
          
        </ul>
      </div>
      </div>
      </div>
    )
}
export default TopNav;