import React from 'react'
import PropTypes from 'prop-types'
import CardContainer from '../Styles/CardContainer';

const Fanstore = props => {
    return (
        <div>
             <CardContainer>
                 <div className="cardTitle">
                 Coming Soon !!!
                 </div>
                    <div >
                        <img style={{paddingTop:'24px',height:'500px',width:'70%'}} src={require('../../../public/fanstore.jpg')} />
                    </div>
             
             </CardContainer>
            
        </div>
    )
}

Fanstore.propTypes = {

}

export default Fanstore
