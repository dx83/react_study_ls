import { useState } from "react"

const Left1 = (props) => {
    return (
        <div>
            <h1>Left1 : {props.number}</h1>
            <Left2 number={props.number} />
        </div>
    )
}

const Left2 = (props) => {
    return (
        <div>
            <h1>Left2 : {props.number}</h1>
            <Left3 number={props.number} />
        </div>
    )
}

const Left3 = (props) => {
    return (
        <div>
            <h1>Left3 : {props.number}</h1>
        </div>
    )
}

const Right1 = (props) => {
    return (
        <div>
            <h1>Right1</h1>
            <Right2 onIncrease={() => {
                props.onIncrease();
            }} />
        </div>
    )
}

const Right2 = (props) => {
    return (
        <div>
            <h1>Right2</h1>
            <Right3 onIncrease={() => {
                props.onIncrease();
            }} />
        </div>
    )
}

const Right3 = (props) => {
    return (
        <div>
            <h1>Right3</h1>
            <input
                type="button"
                value="+"
                onClick={() => {
                    props.onIncrease();
                }} />
        </div>
    )
}

const Study_Redux = () => {
    const [number, setNumber] = useState(1);

    return (
        <>
            <h1>React Redux</h1>
            <div id="container">
                <h1>Root : {number}</h1>
                <div id="grid">
                    <Left1 number={number} />
                    <Right1 onIncrease={() => {
                        setNumber(number + 1);
                    }} />
                </div>
            </div>

        </>
    );
};

export default Study_Redux;