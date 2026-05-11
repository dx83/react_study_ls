import React from 'react';
import React_DOM from './study/React_DOM';
import Styled_Comp from './study/Styled_Comp';
import Study_ENV from './study/Study_ENV';

const Study_Prev = () => {
  return (
    <>
      <React_DOM />
      <Styled_Comp />
      <Study_ENV />
    </>

  )
}

const Study_Cur = () => {
  return (
    <>
      
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