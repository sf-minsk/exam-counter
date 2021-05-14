import React, {ChangeEventHandler, FocusEventHandler} from "react";

type PropsType = {

    maxValue: number
    onBlur?: FocusEventHandler<HTMLInputElement>
    onChange: ChangeEventHandler<HTMLInputElement>
    name: string
}
export const Input = (props: PropsType) => {
    return (
        <div>
            <span>{props.name}</span>
            <input
                onBlur={props.onBlur}
                value={props.maxValue}
                onChange={props.onChange}
                type="number"
            />
        </div>
    )
}