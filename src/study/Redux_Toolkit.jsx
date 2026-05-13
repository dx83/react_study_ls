import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const reducer = (state, action) => {
    if (action.type === 'UP') {
        return { ...state, value: state.value + action.step };
    }
    return state;
};
const initialState = { value: 0 };
const store = createStore(reducer, initialState);

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.value);

    return <div>
        <button onClick={() => {
            dispatch({ type: 'UP', step: 2 });
        }}>+</button>
        <br />
        {count}
    </div>
};

const Redux_Toolkit = () => {
    return (
        <div>
            <h1>리덕스 툴킷</h1>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    );
};

export default Redux_Toolkit;