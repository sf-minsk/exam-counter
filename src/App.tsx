import React from 'react';
import './App.css'
import s from './App.module.css';
import {Counter} from './Counter';
import {Settings} from "./Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, store} from "./bll/store";
import {
    errorCheckerAC,
    onIncClickHandlerAC,
    onMaxInputValueChangeHandlerAC,
    onMinInputValueChangeHandlerAC,
    onResetClickHandlerAC,
    onSetHandlerAC
} from "./bll/counter-reducer";
import {saveState} from "./utils/localstorage-utils";

function App() {

    const {
        maxValue,
        minValue,
        value,
        editMode,
        error,
        start,
    } = useSelector((state: AppStateType) => state.counter)
    const dispatch = useDispatch()

    const onSetClickHandler = () => {
        dispatch(onSetHandlerAC())
        saveState({
            counter: store.getState().counter
        })
    }
    const onIncClickHandler = () => {
        dispatch(onIncClickHandlerAC())
    }
    const onResetClickHandler = () => {
        dispatch(onResetClickHandlerAC())
    }
    const onMaxInputValueChangeHandler = (value: number) => {
        dispatch(onMaxInputValueChangeHandlerAC(value))
        dispatch(errorCheckerAC())
    }
    const onMinInputValueChangeHandler = (value: number) => {
        dispatch(onMinInputValueChangeHandlerAC(value))
        dispatch(errorCheckerAC())
    }

    return (
        <div className={s.App}>
            <Settings
                maxValue={maxValue}
                onMaxInputValueChangeHandler={onMaxInputValueChangeHandler}
                minValue={minValue}
                onMinInputValueChangeHandler={onMinInputValueChangeHandler}
                editMode={editMode}
                onSetClickHandler={onSetClickHandler}
                error={error}
            />
            <Counter
                value={value}
                error={error}
                maxValue={maxValue}
                minValue={minValue}
                editMode={editMode}
                onIncClickHandler={onIncClickHandler}
                onResetClickHandler={onResetClickHandler}
                start={start}
            />
        </div>
    );
}

export default App;
