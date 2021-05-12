import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [minValue, setMinValue] = useState<number>(0)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [ultimateValue, setUltimateValue] = useState<number>(maxValue)


    useEffect(() => {
        const maxValueToString = localStorage.getItem('Maximum value')
        const minValueToString = localStorage.getItem('Minimum value')
        if (minValueToString && maxValueToString) {
            setMinValue(JSON.parse(minValueToString))
            setValue(JSON.parse(minValueToString))
            setMaxValue(JSON.parse(maxValueToString))
        }
    }, [])
    useEffect(() => {
        errorChecker()
    }, [minValue, maxValue])
    useEffect(() => {
        localStorage.setItem('Maximum value', JSON.stringify(maxValue))
        localStorage.setItem('Minimum value', JSON.stringify(minValue))
    }, [minValue, maxValue])

    const errorChecker = () => {
        if (maxValue <= minValue) {
            setError(true)
        } else if (maxValue <= 0) {
            setError(true)
        } else if (minValue < 0) {
            setError(true)
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

    }
    const onMinInputValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(true)
        setMinValue(JSON.parse(e.currentTarget.value))
    }

    return (
        <div className="App">
            <div className='Settings'>
                <div className='DataBlock'>
                    <div>MAX Value <input value={maxValue} onChange={onMaxInputValueChangeHandler} type="number"/></div>
                    <div>MIN Value <input value={minValue} onChange={onMinInputValueChangeHandler} type="number"/></div>
                </div>
                <div className='ButtonsBlock'>
                    <button disabled={!editMode || error} onClick={onSetClickHandler}>SET</button>
                </div>
            </div>
            <div className='Counter'>
                <div className='DataBlock'>
                    <div>{editMode ? error ? 'ERROR' : 'set value and press \'set\'' : value}</div>
                </div>
                <div className='ButtonsBlock'>
                    <button disabled={editMode || value === maxValue} onClick={onIncClickHandler}>INC</button>
                    <button disabled={editMode || value === minValue} onClick={onResetClickHandler}>RESET</button>
                </div>
            </div>
        </div>

    );
}

export default App;
