import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Refs from './components/Refs';
// import Form01 from './components/Form01';
// import StyleSht from './components/StyleSht';
// import Greet from './components/Greet';
// import Welcom from './components/Welcom';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import Parent from './components/Parent';
// import LifecycleA from './components/LifecycleA';

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
     {/* <Parent></Parent> */}
     {/* <StyleSht></StyleSht> */}
     {/* <Form01/> */}
     {/* <LifecycleA/> */}
     {/* <Refs></Refs> */}
     {/* <ClickCounter name="test"></ClickCounter>
     <br></br>
     <br></br>
     <HoverCounter name="test" ></HoverCounter> */}
     <UserProvider name="test">
       <ComponentC/>
     </UserProvider>

    </div>
  );
}

export default App;
