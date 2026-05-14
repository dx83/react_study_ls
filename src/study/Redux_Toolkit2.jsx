import { Provider, useDispatch, useSelector } from "react-redux";
import store from'./_redux/store';
import { UP } from "./_redux/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => {
        return state.counter.value;
    });

    return <div>
        <button onClick={() => {
            dispatch(UP(2));
        }}>+</button>
        <br />
        {count}
    </div>
};

const Redux_Toolkit2 = () => {
    return (
        <div>
            <h1>리덕스 툴킷2</h1>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    );
};

export default Redux_Toolkit2;