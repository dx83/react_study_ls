import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';

/* 기존 리듀서
import { createStore } from "redux";
const reducer = (state, action) => {
    if (action.type === 'UP') {
        return { ...state, value: state.value + action.step };
    }
    return state;
};
const initialState = { value: 0 };
const store = createStore(reducer, initialState);
*/
const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: { value: 0 },
    reducers: {
        UP: (state, action) => {
            //console.log(action);
            //state.value = state.value + action.step; // 기본 리듀서
            state.value = state.value + action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => {
        //console.log(state);
        //state.value
        return state.counter.value;
    });

    return <div>
        <button onClick={() => {
            //dispatch({ type: 'UP', step: 2 }); // 기존 리듀서
            //dispatch({ type: 'counterSlice/UP', step: 2 });
            dispatch(counterSlice.actions.UP(2));
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