import React, {ChangeEvent} from "react";
import s from './App.module.css';

type PropsType = {
    maxValue: number
    minValue: number
    value: number
    onChange: (value: number) => void
    name: string
    error: boolean
}

export const Input = (props: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(JSON.parse(e.currentTarget.value))
    }

    const className =
        (props.value < 0 || (props.error && props.maxValue === 0))
            ? s.InputError : ((props.value <= props.minValue && props.error)
            ? s.InputError : '')
    return (
        <div className={s.InputBlock}>
            <span>{props.name}</span>
            <input className={`${className} ${s.Input}`}
                   value={props.value}
                   onChange={onChangeHandler}
                   type="number"
            />
        </div>
    )
}