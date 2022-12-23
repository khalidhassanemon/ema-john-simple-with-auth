import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button className='btn-logout' onClick={logOut}>LogOut</button>
                        :
                        <>
                            <Link to="/login">Login</Link>

                            <Link to="/signup">SignUp</Link>
                        </>
                }


                <span>{user?.email}</span>


            </div>
        </nav>
    );
};

export default Header;