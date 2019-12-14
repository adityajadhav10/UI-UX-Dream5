import React from 'react'
import './../Styles/common.css'
import 'antd/dist/antd.css';
import UserAccount from './UserAccount';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Landing = () => {
    return (
        <div className="main-container">
            <section>
            <div variant="h6" className="logoTitle">
            <img src={require('./../../../public/dream5d.png')} height="50px" style={{paddingBottom:'8px',paddingRight:'6px'}}/>
             Dream<b style={{color:'#E3CC32'}}>5</b>
                    </div>
                 

                    <div className="fieldForLogin">
                        <UserAccount />
                    </div>
                        
                 
            
            </section>
            <footer>
                <div className="leftAlignment">Follow us on : <FacebookIcon className="facebookLogo"/> <InstagramIcon className="facebookLogo"/></div>
                <div className="rightAlignment">ⓒ Copyright 2019</div>
            </footer>
            </div> 
       
    )
}

export default Landing

