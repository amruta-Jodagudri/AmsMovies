import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container1">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjN_dZULK7cn0IyD3V2jwQaMYWwCkDsdV7DA&usqp=CAU' alt='logo' className='logo'/>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/home">Movies</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-success">Login</button>
                    </div>
                    </div>
                </nav>
            <img src="https://www.forbesindia.com/media/images/2022/Dec/img_199681_moviesbg.jpg" className="card-img-over" alt="img"/>
        </div>
    );
}

export default Nav;
