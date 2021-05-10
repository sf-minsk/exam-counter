import React from 'react';

type PropsType = {
    numPlus: () => void
    num: number
}

export function NumPlus(props: PropsType) {
    return (
        <button onClick={props.numPlus} disabled={props.num === 5}>count</button>
    );
}

