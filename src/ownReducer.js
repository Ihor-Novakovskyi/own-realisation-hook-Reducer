import { useState } from "react"
export default function useReducer(reducer, valueFirstState, initFirstValueForState) {
    
    const [state, setStateReduce] = useState(initFirstValueForState ? 
        initFirstValueForState(valueFirstState)
        : 
        valueFirstState);

    function dispatch(valueForAction) {
        setStateReduce((currentState) => {
           return reducer(currentState, valueForAction);
        })
    }
    
    return [state, dispatch];
}

//I realized own hook useReducer used by native hook useState.And  i think it is one of variant how it can be realized