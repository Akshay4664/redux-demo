import {BUY_CAKE} from './cakeTypes'

const initialState={
    numOfCakes:10,
    ldsfdd:'rdgfgf',
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return { 
                ...state,
                numOfCakes:state.numOfCakes*2
            }
        
        default: return state
    }
}

export default cakeReducer