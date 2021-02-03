import React,{ useState } from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function NewCakeContainer(props) {
    const[number,setNumber]=useState(1)
    return (
        <div>
            <h1>number of cake -{props.numOfCakes}</h1>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>Buy {number} cakes </button>
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
        buyCake:(number)=>dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
