import React from 'react'
import $ from 'jquery';
import { Button, Link } from '@material-ui/core';

class UserAccount extends React.Component {
    componentDidMount() {
        $('.message a').click(function(){
            $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
         });
    }
    render() {
    return (
        <div>
          <div class="login-page">
                <div class="form">
                    <form class="register-form">
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address"/>
                    <button>create</button>
                    <p class="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form class="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                    <div className="fieldForLogin">
                        or
                        <div style={{ borderBottom: '1px solid #777',
                                padding: '8px',
                            }} />
                            <div style={{ 
                                paddingTop: '12px',
                            }} />
                    <Link href="/dashboard">  Google </Link> 
                    </div>
                    </form>

                    
                </div>
                </div>

        </div>
    )
}
}

export default UserAccount
