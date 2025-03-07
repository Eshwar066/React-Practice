import React, { Component, createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstForm from "./Components/ParentToChild/FirstForm";
import Counter from "./Components/HigherOrderComp/Counter";
import withCount from "./Components/HigherOrderComp/withCount";
import ChildData from "./Components/ChildToParent/Child";
import ParentData from "./Components/ChildToParent/Parent";
import First from "./Components/DataParentToChild/First";
import DocumnetTitle from "./Components/useEffect/DocumentTitle";
import Timer from "./Components/useEffect/LifeCycle";
import DataComponent from "./Components/useEffect/Fetch";
import FormPage from "./Components/ChildToParent/FormPage";
import TimerCount from "./Components/Practice/TimerCount";

import ThrottledComponent from "./Components/Debouncing-Throttling/Throttling";

import SecondData from "./Components/Eshwar/EshwarParent";
import Folder from "./Components/Explorer_Project/Folder";
import explorer from "./Components/Explorer_Project/folderData";
import HookMemo from "./Components/useMemo/HookMemo";
import HookCallback from "./Components/useCallback/HookCallback";
import HookRef from "./Components/useRef/Component";
import HooksContext from "./Components/useContext/HooksContext";
import Parent from "./demo/Context-Api-And-toggle/Parent";
import Counter1 from "./Components/useReducer/Main";
import MemoizedAdder from "./demo/MemoizedAdder/Memo";
import Password from "./demo/Random-password-Generator/Password";


import MachineCoding from "./MachineCoding.js";
// const EnhancedCounter = withCount(Counter);
export const MyContext = createContext({});

function App() {
  // const [backgroundColor, setbackgroundColor] = useState("red");
  return (
    <div>
      <h1>Eshwar</h1>
      {/* <MyContext.Provider value={{ backgroundColor, setbackgroundColor }}>
        <Parent />
      </MyContext.Provider> */}

      {/* <h1>Higher Order Component Example</h1> */}
      {/* <EnhancedCounter /> */}
      {/* <FirstForm/> */}
      {/* <ParentData/> */}
      {/* <First/> */}
      {/* <DocumnetTitle/> */}
      {/* <FirstForm /> */}
      {/* <Timer /> */}
      {/* <DataComponent /> */}
      {/* <FormPage /> */}
      {/* <TimerCount /> */}
      {/* <Debouncing /> */}
      {/* <ThrottledComponent /> */}
      {/* <SecondData /> */}
      {/* <Folder explorer={explorer}/> */}
      {/* <HookMemo/> */}
      {/* <HookCallback/> */}
      {/* <HookRef/> */}
      {/* <HooksContext /> */}
      {/* <Counter1 /> */}
      {/* <MemoizedAdder /> */}
      {/* <Password /> */}

      
      <MachineCoding/>
    </div>
  );
}

export default App;
