import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import s from './App.module.css';
import {Counter} from './Counter';
import {Settings} from "./Settings";

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [value, setValue] = useState<number>(minValue)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [ultimateValue, setUltimateValue] = useState<number>(maxValue)
    const [start, setStart] = useState<boolean>(true)

    const maxValueToString = localStorage.getItem('Maximum value')
    const minValueToString = localStorage.getItem('Minimum value')

    useEffect(() => {

        if (minValueToString && maxValueToString) {
            setMinValue(JSON.parse(minValueToString))
            setMaxValue(JSON.parse(maxValueToString))
            setUltimateValue(JSON.parse(maxValueToString))
            setValue(JSON.parse(minValueToString))
        }
        if (maxValueToString && minValueToString) {
            if (JSON.parse(maxValueToString) !== 0 || JSON.parse(minValueToString) !== 0) {
                setStart(false)
            }
        }
    }, [])

    useEffect(() => {

        localStorage.setItem('Maximum value', JSON.stringify(maxValue))
        localStorage.setItem('Minimum value', JSON.stringify(minValue))
        // setUltimateValue(maxValue)
        // setValue(minValue)
        if (!start) {
            errorChecker()
        }

    }, [minValue, maxValue])

    const errorChecker = () => {
        if (maxValue <= minValue) {
            setError(true)
            setEditMode(true)
            return
        }
        if (maxValue <= 0) {
            setError(true)
            setEditMode(true)
            return;
        }
        if (minValue < 0) {
            setError(true)
            setEditMode(true)
            return;
        } else {
            setError(false)
        }

    }
    const onSetClickHandler = () => {
        setValue(minValue)
        setUltimateValue(maxValue)
        setEditMode(false)
    }
    const onIncClickHandler = () => {
        if (value < ultimateValue) {
            setValue(() => {
                let a: number;
                a = value;
                return (++a)
            })
        }
    }
    const onResetClickHandler = () => {
        setValue(minValue)
    }
    const onMaxInputValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(true)
        setMaxValue(JSON.parse(e.currentTarget.value))
        setStart(false)
    }
    const onMinInputValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(true)
        setMinValue(JSON.parse(e.currentTarget.value))
        setStart(false)
    }

    return (
        <div className={s.App}>
            <Settings
                setEditMode={setEditMode}
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
