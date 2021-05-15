import React, {ChangeEventHandler} from "react";
import s from './App.module.css';

type PropsType = {
    minValue: number
    value: number
    onChange: ChangeEventHandler<HTMLInputElement>
    name: string
    error: boolean
}

export const Input = (props: PropsType) => {

    const className =
        (props.value < 0) ? s.InputError : ((props.value <= props.minValue && props.error) ? s.InputError : '')
    return (
        <div className={s.InputBlock}>
            <span>{props.name}</span>
            <input className={`${className} ${s.Input}`}
                   value={props.value}
                   onChange={props.onChange}
                   type="number"
            />
        </div>
    )
}