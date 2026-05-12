import { useState } from "react"

const Left1 = (props) => {
    return (
        <div>
            <h1>Left1</h1>
            <Left2 />
        </div>
    )
}

const Left2 = (props) => {
    return (
        <div>
            <h1>Left2</h1>
            <Left3 />
        </div>
    )
}

const Left3 = (props) => {
    return (
        <div>
            <h1>Left3</h1>
        </div>
    )
}

const Right1 = (props) => {
    return (
        <div>
            <h1>Right1</h1>
            <Right2 />
        </div>
    )
}

const Right2 = (props) => {
    return (
        <div>
            <h1>Right2</h1>
            <Right3 />
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
                onClick={() => {}} />
        </div>
    )
}

const Study_Redux2 = () => {
    const [number, setNumber] = useState(1);

    return (
        <>
            <h1>React Redux</h1>
            <div id="container">
                <h1>Root : {number}</h1>
                <div id="grid">
                    <Left1 />
                    <Right1 />
                </div>
            </div>

        </>
    );
};

export default Study_Redux2;