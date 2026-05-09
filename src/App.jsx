import React from 'react';
import React_DOM from './study/React_DOM';
import Styled_Comp from './study/Styled_Comp';

const Study_Prev = () => {
  return (
    <>
      <React_DOM />
    </>

  )
}

const Study_Cur = () => {
  return (
    <>
      <Styled_Comp />
    </>
  )
}

const App = () => {
  return (
    <div>
      <Study_Cur />
    </div>
  );
};

export default App;