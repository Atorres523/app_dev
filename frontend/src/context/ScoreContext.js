import { createContext, useReducer } from "react"

export const ScoreContext = createContext()

export const scoresReducer = (state,action) => {
    switch(action.type) {
        case 'SET_SCORES':
            return {
                scores: action.payload
            }
        case 'ADD_SCORE':
            return {
                scores: [action.payload, ...state.scores]
            }
        default:
            return state
    }
}

export const ScoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(scoresReducer, { 
        scores: null 
    })

    //dispatch({type: 'SET_SCORES', payload: [{},{}]})

    return (
        <ScoreContext.Provider value = {{...state, dispatch}}>
            {children}
        </ScoreContext.Provider>
    )
}