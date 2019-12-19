import React from 'react'
import $ from 'jquery';
import { Link } from '@material-ui/core';
import { Icon, Button } from 'antd';

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
                    <div style={{textAlign:'left',color:'#707070'}}><h3>Name</h3></div>
                    <input type="text" placeholder="Name"/>
                    <div style={{textAlign:'left',color:'#707070'}}><h3>Email</h3></div>
                    <input type="text" placeholder="Email Id"/>
                    <div style={{textAlign:'left',color:'#707070'}}><h3>Password</h3></div>
                    <input type="password" placeholder="Password"/>
                    <div style={{textAlign:'left',color:'#707070'}}><h3>Confirm Password</h3></div>
                    <input type="password" placeholder="Confirm Password"/>
                    
                    <button>create</button>
                    <p class="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form class="login-form">
                    <div style={{textAlign:'left',color:'#707070'}}><h3>Email</h3></div>
                    <input type="text" placeholder="Email Id"/>
                    <div style={{textAlign:'left',color:'#707070'}}><h3>Password</h3></div>
                    <input type="password" placeholder="Password"/>
                    <button>login</button>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                    <div className="fieldForLogin">
                    <div style={{ 
                                paddingTop: '12px',
                            }} />
                        or
                            <div style={{ 
                                paddingTop: '12px',
                            }} />
                         
                     <Button href="/dashboard" size="large" className="googleBtn">
                    
                    <Icon type="google" style={{ fontSize: '18px',paddingRight:'8px' }} />Sign in with Google
                   
                    </Button> 
                    </div>
                    </form>

                    
                </div>
                </div>

        </div>
    )
}
}

export default UserAccount
