import React, {MouseEventHandler} from "react";
import s from './App.module.css';
import {Button} from "./Button";

type PropsType = {
    editMode: boolean
    error: boolean
    value: number
    minValue: number
    maxValue: number
    onIncClickHandler: MouseEventHandler<HTMLButtonElement>
    onResetClickHandler: MouseEventHandler<HTMLButtonElement>
    start: boolean
}

export const Counter = React.memo((props: PropsType) => {

    const value =
        props.start ? 'HELLO! Enter start value and press \'SET\''
            : (props.editMode
            ? (props.error
                ? 'Enter correct value and press \'SET\''
                : 'Press \'SET\'')
            : props.value)

    const className = (props.start ? s.StartMessageStyle :
        (props.editMode ?
                props.error ? s.ErrorStyle : s.EditModeStyle :
                props.value === props.maxValue ? s.MaxValueStyle : ''
        ))

    return (
        <div className={s.Counter}>
            <div className={`${className} ${s.DataBlock}`}>
                {value}
            </div>
            <div className={s.ButtonsBlock}>
                <Button
                    disabled={props.error || props.editMode || props.value === props.maxValue}
                    onClick={props.onIncClickHandler}
                    name={'INC'}
                />
                <Button
                    disabled={props.editMode || props.value === props.minValue}
                    onClick={props.onResetClickHandler}
                    name={'RESET'}
                />
            </div>
        </div>
    )
})