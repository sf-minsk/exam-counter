import React, {MouseEventHandler} from "react";

type PropsType = {
    disabled: boolean
    onClick: MouseEventHandler<HTMLButtonElement>
    name: string
}

export const Button = React.memo((props: PropsType) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    )
})