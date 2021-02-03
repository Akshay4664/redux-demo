import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    console.log('props', props)
    return (
        <div>
            <h1>number of ice creams {props.numOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>Buy Ice Cream </button>
        </div>
    )
}

const mapStateToProps=state=>{
    console.log('state', state)
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)