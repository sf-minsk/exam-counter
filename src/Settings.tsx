import React, {MouseEventHandler} from "react";
import s from './App.module.css';
import {Input} from "./Input";
import {Button} from "./Button";

type PropsType = {
    maxValue: number
    minValue: number
    editMode: boolean
    error: boolean
    onMaxInputValueChangeHandler: (value: number) => void
    onMinInputValueChangeHandler: (value: number) => void
    onSetClickHandler: MouseEventHandler<HTMLButtonElement>
}

export const Settings = React.memo((props: PropsType) => {

    return (
        <div className={s.Settings}>
            <div className={s.DataBlock}>
                <Input
                    value={props.maxValue}
                    onChange={props.onMaxInputValueChangeHandler}
                    name={'MAX Value:'}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    error={props.error}
                />
                <Input
                    value={props.minValue}
                    onChange={props.onMinInputValueChangeHandler}
                    name={'MIN Value:'}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    error={props.error}
                />
            </div>
            <div className={s.ButtonsBlock}>
                <Button
                    disabled={!props.editMode || props.error}
                    onClick={props.onSetClickHandler}
                    name={'SET'}
                />
            </div>
        </div>
    )
})