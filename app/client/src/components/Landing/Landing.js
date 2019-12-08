import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
               <p> Dream 5
                Landing page : Login
                then navigate to dashboard after success.</p>{"\n"}
                <Link to="/dashboard"><button>Login</button></Link>
        </div>
    )
}

export default Landing

