import React, {MouseEventHandler} from "react";
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

export const Counter = (props: PropsType) => {
    return (
        <div className='Counter'>
            <div className='DataBlock'>
                <div>
                    {props.start ? 'HELLO!'
                        : (props.editMode
                            ? (props.error
                                ? 'ERROR'
                                : 'EDIT')
                            : props.value)}
                </div>
            </div>
            <div className='ButtonsBlock'>
                <Button
                    disabled={props.error || props.editMode || props.value === props.maxValue}
                    onClick={props.onIncClickHandler}
                    name={'INC'}
                />
                <Button
                    disabled={props.value === props.minValue}
                    onClick={props.onResetClickHandler}
                    name={'RESET'}
                />
            </div>
        </div>
    )
}