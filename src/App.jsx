import "./study/style.css";
import React_DOM from './study/React_DOM';
import Styled_Comp from './study/Styled_Comp';
import Study_ENV from './study/Study_ENV';
import ContextAPI from './study/ContextAPI';
import Study_Reducer from './study/Study_Reducer';
import Study_Redux from './study/Study_Redux';
import Study_Redux2 from './study/Study_Redux2';
import Study_PapaParse from './study/Study_PapaParse';
import Redux_Toolkit from './study/Redux_Toolkit';

const Study_Prev = () => {
  return (
    <>
      <React_DOM />
      <Styled_Comp />
      <Study_ENV />
      <ContextAPI />
      <Study_Reducer />
      <Study_Redux />
      <Study_Redux2 />


      
      <Study_PapaParse />
    </>

  )
}

const Study_Cur = () => {
  return (
    <>
      <Redux_Toolkit />
    </>
  )
}

//==================
const App = () => {
  return (
    <div>
      <Study_Cur />
    </div>
  );
};
//==================
export default App;