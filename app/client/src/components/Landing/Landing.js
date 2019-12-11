import React from 'react'
import './../Styles/common.css'
import 'antd/dist/antd.css';
import UserAccount from './UserAccount';

const Landing = () => {
    return (
        <div className="main-container">
            <section>
            <div variant="h6" className="logoTitle">
            <img src={require('./../../../public/dream5d.png')} height="50px" style={{paddingBottom:'8px',paddingRight:'6px'}}/>
             Dream 5
                    </div>
                 

                    <div className="fieldForLogin">
                        <UserAccount />
                    </div>
                        
                 
            
            </section>
            <footer>
                <div className="leftAlignment">Follow us on :</div>
                <div className="rightAlignment">ⓒ Copyright 2019</div>
            
            </footer>
            </div> 
       
    )
}

export default Landing

