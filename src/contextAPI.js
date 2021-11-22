//import React,{useContext, useState, createContext} from "react";
//import ReactDOM from "react-dom";

const initialState = 10;
const context = createContext({state:40});
const MyGrandChild=()=> {
    const {state,setState}=useContext(context);
    console.log({state,setState});
    const increment =()=> {
        setState(state +1);
    };
    return (
        <div>
            <button onClick={increment}>increment</button>
            {state}
        </div>
    );
};


const MyChild=() =>{
    return(
        <div>
            <MyGrandChild />
        </div>
    );
};

const App =()=>{
    const [state,setState] =useState(initialState);
    const obj = {state:state,setState:setState};

return (
    <context.Provider value={obj}>
        <div>
            <MyChild />
        </div>
    </context.Provider>
);
};

const rootElement= document.getElementById("root");
ReactDOM.render(<App />,rootElement);