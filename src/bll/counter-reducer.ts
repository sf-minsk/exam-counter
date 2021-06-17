const initialState = {
    maxValue: 0,
    minValue: 0,
    value: 0,
    editMode: false,
    error: false,
    ultimateValue: 0,
    start: true,
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ERROR-CHECK": {
            if (state.maxValue <= state.minValue) {
                return {...state, error: true, editMode: true}
            }
            if (state.maxValue <= 0) {
                return {...state, error: true, editMode: true}
            }
            if (state.minValue < 0) {
                return {...state, error: true, editMode: true}
            } else {
                return {...state, error: false}
            }
        }
        case "ON-SET-HANDLER": {
            return {...state, value: state.minValue, ultimateValue: state.maxValue, editMode: false}
        }
        case "ON-INC-CLICK-HANDLER": {
            return {...state, value: state.value + 1}
        }
        case "ON-RESET-CLICK-HANDLER": {
            return {...state, value: state.minValue}
        }
        case "ON-MAX-VALUE-CHANGE-HANDLER": {
            return {...state, editMode: true, maxValue: action.value, start: false}
        }
        case "ON-MIN-VALUE-CHANGE-HANDLER": {
            return {...state, editMode: true, minValue: action.value, start: false}
        }
        default:
            return state
    }
}


export const errorCheckerAC = () => ({type: 'ERROR-CHECK'} as const)
type ErrorCheckerActionType = ReturnType<typeof errorCheckerAC>

export const onSetHandlerAC = () => ({type: 'ON-SET-HANDLER'} as const)
type onSetHandlerActionType = ReturnType<typeof onSetHandlerAC>

export const onIncClickHandlerAC = () => ({type: 'ON-INC-CLICK-HANDLER'} as const)
type onIncClickHandlerActionType = ReturnType<typeof onIncClickHandlerAC>

export const onResetClickHandlerAC = () => ({type: 'ON-RESET-CLICK-HANDLER'} as const)
type onResetClickHandlerActionType = ReturnType<typeof onResetClickHandlerAC>

export const onMaxInputValueChangeHandlerAC = (value: number) => ({type: 'ON-MAX-VALUE-CHANGE-HANDLER', value} as const)
type onMaxInputValueChangeHandlerACActionType = ReturnType<typeof onMaxInputValueChangeHandlerAC>

export const onMinInputValueChangeHandlerAC = (value: number) => ({type: 'ON-MIN-VALUE-CHANGE-HANDLER', value} as const)
type onMinInputValueChangeHandlerACActionType = ReturnType<typeof onMinInputValueChangeHandlerAC>


export type ActionsType = ErrorCheckerActionType
    | onSetHandlerActionType
    | onIncClickHandlerActionType
    | onResetClickHandlerActionType
    | onMaxInputValueChangeHandlerACActionType
    | onMinInputValueChangeHandlerACActionType