import React from 'react';

type PropsType = {
    num: number
}

export function Num(props: PropsType) {
    return (
        <div className={props.num === 5 ? 'error' : ''}>{props.num}</div>
    );
}
