import React from 'react'
import { Link } from 'react-router-dom';
import './../Styles/common.css'
import 'antd/dist/antd.css';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#312551'
        }
      },
      style:{
          display : 'flex'
      }
    },
  )
const Landing = () => {
    //const theme = theme()
    return (
        <div className="main-container">
            <section>
            <div variant="h6" className="logoTitle">
            <img src={require('./../../../public/dream5d.png')} height="50px" style={{paddingBottom:'8px',paddingRight:'6px'}}/>
             Dream 5
                    </div>
                    <div className="landingCard">
                    <Link to="/dashboard"></Link>
                    
                    <MuiThemeProvider theme={theme}> 
                    <div style={{display:"flex"}}>
                    <div style={{width:'50%',textAlign:"right",paddingRight:'12px'}}>
                    <Button variant="contained" color="primary" href="/dashboard"> Login </Button>
                    </div>
                    <div style={{width:'50%',textAlign:"left"}}>
                    <Button color="primary" variant="outlined"> Register </Button> 
                    </div></div>
                    <Button className="btnPrimary"> Google </Button>
                    </MuiThemeProvider>
                        
                    </div>
            
            </section>
            <footer>
                <div style={{width:'50%',textAlign:"left",paddingLeft:'15px'}}>Follow us on :</div>
                <div style={{width:'50%',textAlign:"right",paddingRight:'15px'}}>ⓒ Copyright 2019</div>
            
            </footer>
            </div> 
       
    )
}

export default Landing

