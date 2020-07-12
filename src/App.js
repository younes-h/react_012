import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcom from './components/Welcom';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
     {/* <Greet name="younes"  skill="reactjs" />
     <Greet name="ali" skill="flutter" /> */}
     {/* <Welcom name="ali"  skill="flutter" >
         <p> heyyyyy 1</p>
     </Welcom>
     <Welcom name="ali"  skill="flutter" >
        <p> heyyyyy 2</p>
     </Welcom>
     <Welcom name="ali"  skill="flutter" >
        <p> heyyyyy 3</p> 
     </Welcom> */}
     {/* <Message /> */}
     {/* <Counter /> */}
     {/* <FunctionClick /> 
     <ClassClick></ClassClick> */}
     <Parent></Parent>
    </div>
  );
}

export default App;
