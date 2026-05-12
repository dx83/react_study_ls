import { useReducer, useState } from "react";
import styled from "styled-components";

const Study_Reducer = () => {
    // useState 방식
    //const [count, setCount] = useState(0);
    //const down = () => {
    //    setCount(count - 1);
    //};
    //const reset = () => {
    //    setCount(0);
    //}
    //const up = () => {
    //    setCount(count + 1);
    //}

    // useReducer 방식
    const countReducer = (oldCount, action) => {
        //if (action === 'UP') {
        //    return oldCount + 1;
        //}
        //else if (action === 'DOWN') {
        //    return oldCount - 1;
        //}
        //else if (action === 'RESET') {
        //    return 0;
        //}
        if (action.type === 'UP') {
            return oldCount + action.number;
        }
        else if (action.type === 'DOWN') {
            return oldCount - action.number;
        }
        else if (action.type === 'RESET') {
            return 0;
        }
    };

    const [count, countDispatch] = useReducer(countReducer, 0);

    const down = () => {
        //countDispatch('DOWN');
        countDispatch({ type: 'DOWN', number: number });
    }
    const reset = () => {
        //countDispatch('RESET');
        countDispatch({ type: 'RESET', number: number});
    }
    const up = () => {
        //countDispatch('UP');
        countDispatch({ type: 'UP', number: number});
    }

    const [number, setNumber] = useState(1);

    const changeNumber = (event) => {
        setNumber(Number(event.target.value));
    }

    return (
        <div>
            <h1>useReducer</h1>
            <StyledInput type="button" onClick={down}>-</StyledInput>
            <StyledInput type="button" onClick={reset}>0</StyledInput>
            <StyledInput type="button" onClick={up}>+</StyledInput>
            <StyledInput type="text" value={number} onChange={changeNumber} />

            <span style={{ marginLeft: '50px', fontSize: '25px' }}>
                {count}
            </span>
        </div>
    );
};

export default Study_Reducer;

const StyledButton = ({ className, children, ...props }) => {
    return (
        <input
            className={className}
            value={children}
            {...props} />
    );
};

const StyledInput = styled(StyledButton)`
    margin-left: 30px;
    width: 60px;
    height: 40px;
    font-size: 25px;
    cursor: pointer;
`