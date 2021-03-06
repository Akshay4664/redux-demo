import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
    console.log('props', props)
    return (
        <div>
            <h1>number of cake -{props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake </button>
        </div>
    )
}

const mapStateToProps=state=>{
    console.log('state', state)
    return{
        numOfCakes:state.cake.numOfCakes,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)