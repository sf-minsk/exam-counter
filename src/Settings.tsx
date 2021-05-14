import React, {ChangeEventHandler, MouseEventHandler} from "react";
import {Input} from "./Input";
import {Button} from "./Button";

type PropsType = {
    maxValue: number
    minValue: number
    editMode: boolean
    error: boolean
    setEditMode: (value: boolean) => void
    onMaxInputValueChangeHandler: ChangeEventHandler<HTMLInputElement>
    onMinInputValueChangeHandler: ChangeEventHandler<HTMLInputElement>
    onSetClickHandler: MouseEventHandler<HTMLButtonElement>
}

export const Settings = (props: PropsType) => {

    const onBlur = () => {
        props.setEditMode(false)
    }

    return (
        <div className='Settings'>
            <div className='DataBlock'>
                <div>
                    {/*MAX Value: */}
                    <Input
                        onBlur={onBlur}
                        maxValue={props.maxValue}
                        onChange={props.onMaxInputValueChangeHandler}
                        name={'MAX Value: '}
                    />
                </div>
                <div>
                    <Input
                        onBlur={onBlur}
                        maxValue={props.minValue}
                        onChange={props.onMinInputValueChangeHandler}
                        name={'MIN Value: '}
                    />
                </div>
            </div>
            <div className='ButtonsBlock'>
                <Button
                    disabled={!props.editMode || props.error}
                    onClick={props.onSetClickHandler}
                    name={'SET'}
                />
            </div>
        </div>
    )
}