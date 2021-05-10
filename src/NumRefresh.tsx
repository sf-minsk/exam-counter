import React from 'react';

type PropsType = {
    setNum: (value: number) => void
    num: number
}

export function NumRefresh(props: PropsType) {
    return (
        <button onClick={() => {props.setNum(0)}} disabled={props.num === 0}>reset</button>
    );
}

