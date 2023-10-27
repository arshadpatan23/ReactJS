

//  1 what is ReactJS ? 


// ANS: 

// 1) ReactJS is a client-side javascript library for building user-interfaces.

// 2) It is maintaining by Facebook.

// ------------------------------------ 


// 2 What is State ? 

// ANS:  state (object) is where you store propertIES AND values that belong to the component.,

// In ReactJS ClassBasedComponents have a in-built state object{Components} which means "StateFull" ., where as in reactJS FunctionalBasedComponents doesn't have in-built state object which means "Stateless" 

// for avoiding that "Stateless" in functional components we will use (Hook) that is "useState()"


// EX: 
//    state = {
//     name: "ClassComponent And State",
//    }

// -------------------------------------- 


//  3 What is useState() ? 

// ANS:

// 1) useState() is a Hook which is introduced in FunctionalBaesedComponets.
// 2) in reactJS FunctionalBasedComponents doesn't have in-built state object which means "Stateless" 

// 3) for avoiding that "Stateless" issue in FunctionalBaesedComponents we will use (Hook) that is "useState()"


// -----------------------------------------


// 4 What is Props ? 

// ANS: Transfering data From parent component to Child components.,is known as Props.

// 1) Props stands for Properties

// 2) Props are read only.

// --------------------------------------- 



//  5 What is ClassComponent ? 

// Ans: 

// 1)  In ReactJS ClassBasedComponents have a in-built state object{Components} which means "StateFull" .,

// 2) To implement a classComponent, we will use Two keywords which is 1. ‘class’ before the name of className and then we will use 2. "extend" keyword along with the Component {}.

// EX: class hello extends Component {}
// --------------------------------------- 



// 6 What is FunctionalBasedComponents ? 

// ANS: 

// 1) A "React functional component" is a simple JavaScript function that accepts props and returns a React element.

// 2) After the introduction of React Hooks, writing functional components has become the ​standard way of writing React components in modern applications.

// 3) In FunctionalBasedComponents we will not use render() method..., The render() method we will use in ClassBasedComponents.


// NOTE : Hooks are introduced in React 16.8  version it will allows us to use state without writing class components. 


// ----------------------------------- 


//  7 What is useEffect ? 

// ANS:

// 1) The useEffect() Hook allows us to perform "side effects" in our functional component.

// 2) Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// 3) useEffect accepts two arguments., The second argument is optional.

// 4) useEffect(<function>, <dependency>)



// NOTE : The useEffect() Hook only used in FunctionalBasedComponent, using with useEffect() Hook we can access the "Lifecycle features" of ClassBasedComponent such as,

// 1) Mounting :
// 2) Updating :
// 3) Unmounting :

// No need to write above 3 features in useEffect() Hook, because of The useEffect() Hook already in-built of those 3 features.



// ------------------------------------- 


// 8  What is Lifecylce method or what is Common lifecycle methods (OR) Lifecycle of Components (or) "Lifecycle Features" in ClassBasedComponents of ReactJS ? 


// ANS: 

//  Lifecycle features of ClassComponents :

// The three phases are: Mounting, Updating, and Unmounting.

// 1) Mounting :
// 2) Updating :
// 3) Unmounting :


// --------------------------------------- 


// 9) What is the use of React Hooks ?

// ANs: 

// 1) React hooks are functions use to manage both React state and Lifecycle features from functional components., 

// 2) For managing Lifecycle features in FunctionalBasedComponents we will use two Hooks which is useState() hook for creating state and second is useEffect() LifeCycle features, instead of using 1) Mounting , 2) Updating , 3) Unmounting., 

// 3) we will use this three features in ClassBasedComponents but useEffect() hook Defaultly consist it.

// ----------------------------------------- 



// 10 what is onChange ?
 

// ANS : whenever some changes happen in elements then we will call it is onChange event.------------------------------------------- 


// 11 What is useContext ?

// ANS: 

// 1) useContext is introduced to avoid contextAPI() huge code, 

// 2) **** To run useContext we will use :
// a) createContext(); b) Provider c) Consumer, these three are play major role to create Context Api.

// ----------------------------------- 

// what is redux in react ? 

// ANS: 

// 1) It is similar to the Reactjs., it is a javascript library it is using for managing state values globally.

// ----------------------------------- 


// what is redux Thunk  ?

// ANS:

// 1) Redux Thunk "middleware" allows you to write action creators that return a function instead of an action.


// ------------------------------------- 


// What is ContextAPI ?

// ANS: ContextAPI is using for to avoid ProsDrilling Concept.

// 1) **** To run Context API we will use :
// a) createContext(); b) Provider c) Consumer, these three are play major role to create Context Api.


// ---------------------------------------- 




// 12 What is useRef ?

// ANS: useRef is a hook it is used in functional Component., with help of useRef we will manipulate DOM directly.

// NOTE :  we can not manipulate DOM directly with help of Props and State.., in that condition we will use useRef.


// ------------------------------------------ 



// 13 what is useMemo ?

// ANS: useMemo is using for to increase application performance or enhance application performance.

// And useMemo returns a memoized value., means in EX b) we can see, that is adding inside of useMemo() function i.e., memoized value - "plus + 0"

// ------------------------------------- 



// 14 what is useCallback ?

// ANS: it follows props concept"., parent to child.


// 1) The useCallBack and useMemo Hooks are similar. The main diffrence is that useMemo returns a memoized value and useCallback returns a memoized function., 

// 2) In this example we will pass function that is useCallback() empty function to the child component in child component we will use memo()(Hook)., is known as memoized function.


// ----------------------------------- 



// 15 What is <Fragment> ?

// ANS:

 // 1) React Fragments is introduced from the 16.2 above version, to facilitate the grouping off a list of children without adding extra nodes to the DOM.

 // 2) The execution of code is faster compared to the div tag.

 // 3) Less memory is utilised compared to the div tag., 

 // 4) we can use Fragments in two ways such as., 

//  EX: a)  <> </>   b) <Fragment> </Fragment>


// ----------------------------------------- 


// 16 What is PropDrilling ? 

// ANS: 



// 1) the process of passing data from one component via several interconnected components is known as Prop Drilling

// 2) It is not a good idea to pass data via several interconnected components when building neat, reusable, and DRY code.


// ----------------------------------------


// 17 What is onSubmit ? 


// ANS: onSubmit is using for to Call a function when form is submitting.

// ------------------------------------------ 



// 18 What is Link component ? 

// ANS: 

// 1) "Link component is using to avoid PAGE RELOAD".

// 2) Link tag its similar to ANCHOR tag,in anchor tag we will use "href" Attribute whereas in Link tag we will use (to ="") attribute.

// ------------------------------------ 


//  19 Difference b/w UnControlled & Controlled Components.  

// ANS: 

// 1) In most cases, we recommend using controlled components to implement forms, form data is handled by a React-Component-State, The alternative is uncontrolled components, where form data is handled by the DOM itself.


// 2) To write an uncontrolled component,instead of writing an event-handler for every state update,we Will use a "useRef(Hook)" to get form values from the DOM.

// 3) In Controlled-Component Element data can be controlled by parent-component through "callbacks like onChange()" is known as Controlled-Component.

// 4) whereas UnControlled-Component, the Element data can not be controlled by parent-component through "callbacks like onChange()" is known as UnControlled-Component.


// ---------------------------------------- 


// 20 What is Controlled Component ? 


// ANS: 

// 1) In most cases, we recommend using controlled components to implement forms, In Controlled-Component form data is handled by a "React-State-Component"., 

// 2) In Controlled Component data can be controlled by parent-component through "callbacks like onChange()" is known as Controlled-Component.


// --------------------------------------- 


// 21 what is Uncontrolled Component ? 

// ANS: 

// 1) In uncontrolled components,  "form data" is handled by the DOM itself.
 
// 2) To write an uncontrolled-component, instead of writing an event-handler for every state update, we Will use a "useRef(Hook)" to get form values from the DOM.

// 3) we can not control "Form data" from another Component we can only control DOM itself.

// ----------------------------------------- 



// 22 what is JSX in Reactjs ? 

// ANS: 

// 1) JSX stands for javascript XML
// 2) JSX allows us to write HTML in React js.

// --------------------------------------- 


// 23)  What is Virtual DOM ?

// ANS: 

// 1) Virtual DOM is extremely faster as compared to Real DOM 
// 2) Which is Done all operations internally,
// 3) Every activity in virtual dom is a light weight.


// ------------------------------------ 


// 24)  What is Real DOM ?

// ANS: Real DOM is bit slower as compared to Virtual DOM because of update the content, structure, and style of a document.

// Real DOM is nothing but, which is visible Content at browser those are all Real DOM.


// ------------------------------------- 


// 25 Difference between Ref and useRef​  !!!


//  ANS: useRef() Hook is used to create a reference object, while ref is used to "access and assign DOM nodes".


// ----------------------------------------- 


// 26 Difference between Ref and useRef​  !!!


//  ANS: useRef is used to create a reference object, while ref is used to access and assign DOM nodes 

// ----------------------------------------------- 

// 27 what is React Router Dom ?

// ANS: 

// 1) React Router DOM is using To create an application, with multiple page routes, 
// 2) Within the src folder, we'll create a folder with several files:
// 3) let's first start with the file structure.
// src\pages\:

// Home.js
// Contact.js
// About.js
// Blogs.js
// Layout.js
// NoPage.js

// 4) Each file will contain a very basic React component.
// Components using in react router :
// import {BrowserRouter, Routes, Route}
// import {Link} 
// import {NavLink}















// ---------- PROGRAMMING STARTED ----------


// -------- 1) ClassComponent ----------


// ClassComponent and State , EX1: and  EX2: 

// EX1: 
// EX2:
// ANS: both EX1: and  EX2: are same App.jsx file.,



// EX1: 
// ANS: 


//  ClassComponent & State, 

// // Main points,

// 1) In React ClassComponents have a in-built state object.{Components}

// 2) ClassComponents are Statefull whereas functional components are Stateless.

// 3) To implement a classComponent,we will use the keyword ‘class’ before the name of class component and then extend it with the component class.




// EX1: is a normal classComponent,
// EX2: is a classComponent with State, 

// ClassComponent, 



// EX1: 
// ANS: 

// 1) Here we are importing React { Component } nothing but classComponent.
// 2) In this example, we are not using state., without using state.



// import { Component } from "react"

// class App extends Component{

//     render(){
//         return(

//       <div>
//      <h1>i am ClassComponent </h1>   
//       </div>
//         ) 
//     }
// }
// export default App



// ---------------------------------------- 

// ClassComponent & State, 

// EX2:
// ANS: ClassComponents are Statefull whereas functional components are Stateless.

// NOTE : NOTE : NOTE : This same example we will write in FUNCTIONAL BASED COMPONENTS we will see in EX3 a) b)

// Here we are using "state" for storing properties and values under object{}.



// import { Component } from "react"

// class App extends Component{

//    state = {
//     name: "Arshad",
//     age: 23,
//    }
//     render(){
//         return(
//             <div>
//  <h1>welcome to {this.state.name}</h1>
//  <h1>age is {this.state.age}</h1>   
//       </div>
//         ) 
//     }
// }
// export default App







// ------- 2) FunctionalComponent -------- 


// ---------- Hook 1 --- useState() --------


// a) 
// EX3: 
// ANS: 


// What is FunctionalComponents ? 

// ANS: 

// 1) FunctionComponents are Stateless., whereas ClaasComponents are statefull.

// 2) In FunctionComponents we will not use render() method.

// 3) for storing state values in FunctionComponents it is not possible but for avoiding Stateless concept we are using React Hook concept that is (useState), in below EX1:

// 4) React Hooks only use for FunctionalComponents

// -------------------------------- 


//  What is useState() ? 

// ANS: 

// 1) useState only use in Functional Componets.
// 2) useState is using for add state-object in Functional Componet., 
// 3) (For Add State object in Functional Component) we will use Hook concept that is useState.



// a) 
// EX3: 
// ANS: useState() - string ""


// import { useState } from "react";

// const UseState = ()=>{
//  const [name] = useState("telugu skillhub")
//  const [age] = useState("23")
//     return(

//         <div>
//             <h1 >welcome to {name}</h1>
//             <h1 >Your age is {age}</h1>   
//         </div>
//     )
// }
// export default UseState


// OR ------------------------------------ 

// b) 
// EX3: 
// ANS: useState() - object{}



// import { useState } from "react";

// const Objects = ()=>{

//  let  [data] = useState ({ 
//     name:"arshad",
//      age: 1234 ,
//     })

//     return(
//         <div>
//             <h1>{data.name}</h1>
//             <h1>{data.age}</h1>
//         </div>
//     )
// }
// export default Objects

// ------------------------------------ 




// --- 3) Array of values in useState ----

// source : Prajwal sir

// EX4
// ANS:



// import { useState } from "react";

// const Array = ()=>{

//  let [data] = useState (["hii","byee","hello"])

// return(

//     <div>
//         <h1>{data[0]}</h1>
//         <h1>{data[1]}</h1>
//         <h1>{data[2]}</h1>
//     </div>
    
// )
// }
// export default Array





// ---- 4) Array of Objects in useState ----

// source : Prajwal sir

// EX5
// ANS:


// import { useState } from "react";

// const ArrayofObject =()=>{
//     const [data] = useState([ {name:"hiii"}, {id:123}])

//     return(

//         <div>
//         <h1>{data[0].name}</h1>
//         <h1>{data[1].id}</h1>
//        </div>
//     )
// }
// export default ArrayofObject






// ---- useState() string with Button ----


// c) 
// EX3: 
// ANS: useState() - string with Button



// import { useState } from "react";

// const UseState = ()=>{
// const [name,setName] = useState("telugu skillhub")

//     return(

//         <div>
//             <h1 >welcome to {name}</h1>
//             <button onClick={()=> setName("Thanks for contacting us!!")}>consult here</button>
//         </div>
//     )
// }
// export default UseState


// OR-------------------------------- 

// d) 
// EX3
// ANS: useState() - string with Button




// import { useState } from "react";

// const Strings = ()=>{
//     let [data,setData] = useState("welcome to Rainbow hospitals")

//   let DataHandle = ()=>{
//     setData ("Thanks for choosing us!!") 
//   }
// return(
//     <div>
//         <h1>{data}</h1>
//         <button onClick={DataHandle}>click here</button>
//     </div>   
// )
// }
// export default Strings






// -------- 5) INC and DEC -----------

// source : Prajwal sir


// EX21: 
// ANS: Increment and decrement, reset concept.



// import { useState } from "react";

// const IncandDec = ()=>{

//     let [data,setData] = useState(0)

//     let inc = ()=>{
//         setData(data+1)
//         console.log("incresed")
//     }

//     let dec = ()=>{
//         setData(data-1)
//         console.log("decreased")
//     }

//     let reset =()=>{
//         setData(0)
//         console.log("reset")
//     }
    
//     return(
//      <div>

//    <h1>Result :{data}</h1>

// <button onClick={inc}>Increment </button>
// <button onClick={dec}>Decrement </button> 
// <br/>
// <button onClick={reset}>Reset</button>
//  </div>
//     )
// }
// export default IncandDec






// -- 6) Diffe b/w Export & Export-Default --

// Export only
// EX22: 
// ANS:
// a) Home.jsx b) Header.jsx c) Footer.jsx




import { Home } from "./Components/Export&default/Home"
import { Header } from "./Components/Export&default/Header"
import Footer from "./Components/Export&default/Footer"

 const App = ()=>{

    return(
        <div>
            <Header/>
             <Home/>
             <Footer/>
        </div>
    )
}
export default App








// ----- 7) Props in ClassComponents ------


// 4) a) 


// What is State ? 

// ANS: The state is where you store property values that belong to the component.


// What is Props ? 

// ANS: Transfering data From parent component to Child components.,is known as Props.

// 1) Props stands for Properties
// 2) Props are read only.


// a)
// EX4: 
// ANS: 


// import React from "react"
// import { Component } from "react"
// import ClassBased from "./Components/props/ClassBased"


// class App extends Component{
//    state = {
//     name: "Rainbow hospitals ",
//    }
//   render(){

//     return(
      
//     <center>
//     <ClassBased output ={this.state.name}/>
//     </center>
//     ) 
//     }
// }
// export default App







// --- 8) Props in FunctionalComponents ---


// b) 
// EX4: 
// ANS:  Here we are transfering data from parent component to child component.




// import React, { useState } from "react";
// import FunctionBased from "./Components/props/FunctionBased";

// const App = ()=>{

//     const [name] = useState("Function based Rainbow hospitals ")
    
//     return(

//         <div>
//         <FunctionBased output = {name}/>
//         </div>
//     )
// }
// export default App



 



// -------- 9) Prop Drilling ---------

// Source: Front-End Hacks YouTube (and) Yoshirta jain


// c) 

// EX4: 
// ANS: 

// 1) the process of passing data from one component via several interconnected components is known as Prop Drilling

// 2) It is not a good idea to pass data via several components when building neat, reusable, and DRY code.



// import React from "react"
// import { Fragment } from "react"
// import { useState } from "react"
// import Drilling1 from "./Components/propsDrilling/Drilling1"

// const App = ()=>{

//    const [name] = useState("Arshad")

//     return(

// <Fragment>

// <Drilling1 AppComponent = {name}/>

// </Fragment>
        
//     )
// }
// export default App
 






// --------- 10) Context API -----------


// Source:  YouTube - Yoshita jain


// d) 


// EX4: 
// ANS: 

// 1) Context API is using for to avoid PropsDrilling conecpt.

// 2) **** To run Context API we will use :
// a) createContext(); b) Provider c) Consumer, these three are play major role to create Context Api.


//  NOTE :  CreateContext() has to write at upperside of App() function.,


// 3)  createContext() - is using to create Property values and { createContext } we will import from react package.

// 4) in ContextAPI_C Component we have to declare multiple return() methods and as well as multiple functions For avoiding this huge code issue we will use useContext(Hook). we will see in d) EX4:




// import React, { createContext } from "react"
// import { Fragment } from "react"
// import Context1 from "./Components/contextApi/Context1";

// const FirstName = createContext();
// const Age = createContext();

// const App = ()=>{
  
//     return(
        
// <Fragment>

// <FirstName.Provider value = {"arshad"}>
// <Age.Provider value = {"24"}>
// <Context1/>
// </Age.Provider >
// </FirstName.Provider>

// </Fragment>
        
//     )
// }
// export default App
// export {FirstName,Age};






// --------------- HOOK2 ----------------

// ----------- 11) useContext() --------- 


// source: Yoshita Jain - YouTube



// 1) What is useContext() ?

// ANS: 

// 1) useContext is introduced to avoid contextAPI() huge code, 

// 2) **** To run useContext we will use :
// a) createContext(); b) Provider c) Consumer, these three are play major role to create Context Api. 


// e) 
// EX4: 
// ANS: 

// A)
// B)
// C) 


// import React from "react"
// import { Fragment } from "react";
// import { createContext } from "react"
// import UseContext1 from "./Components/useContext/UseContext1";

// const FirstName = createContext();
// const Age = createContext();

// const App = ()=>{


//     return(

//     <Fragment>

// <FirstName.Provider value={"arshad"}>
//     <Age.Provider value={"23"}>
// <UseContext1/>
//     </Age.Provider>
// </FirstName.Provider>

//     </Fragment>
//     )

// }
// export default App
// export {FirstName,Age}







// --------------- HOOK3 ----------------

// ----------- 12) useEffect() ----------- 
 



// What is useEffect ? 
// ANS:

// 1) The useEffect Hook allows us to perform "side effects" in our components.

// 2) Some examples of side effects are: 1) fetching data, 2) directly updating the DOM, and 3) timers.

// 3) useEffect accepts two arguments., The second argument is optional.

// 4) useEffect(function()=>, dependency[])

 


// NOTE : The useEffect() Hook only used in FunctionalBasedComponent, using with useEffect() Hook we can access the "Lifecycle features" of ClassBasedComponent such as,

// 1) Mounting :
// 2) Updating :
// 3) Unmounting :

// No need to write above 3 features in useEffect() Hook, because of The useEffect() Hook already in-built of those 3 features.    




// Two methods are practiced such as, 
// 1) directly updating the DOM (useEffect)
// 2) Fetching the Data (useEffect)




// ..... 1) directly updating the DOM -----

// -------- incre(+) and Decre(-) ----------


// a) 
// EX24: 
// ANS: 



// import { useEffect, useState } from "react"

// const App = ()=>{

//  let [data,setData] = useState(0)   
//  let [count,setCount] = useState(0) 

// const incre1 = ()=>{

//     setData(data +1)
//     console.log("function incr1")
// }
// const incre2 =()=>{

//     setCount(count + 1)
//     console.log("function incr2")
// }
// useEffect(()=>{

//     console.log("this is useEffect")
// })

//   return(
//     <div>
//         <h1>First:{data}</h1>
//   <button onClick={incre1}>incre1</button>

//        <h1>Second:{count}</h1>
//   <button onClick={incre2}>incre2</button>
//     </div>
//   )
// }
// export default App 



// ---------- No dependency[] ---------

// b)

// ANS:  Here we are paased empty dependecy so both values will effect [] so, output will not get at console.




// import { useEffect, useState } from "react"

// const App = ()=>{

//  let [data,setData] = useState(0)   
//  let [count,setCount] = useState(0) 


// const incre1 = ()=>{

//     setData(data +1)
//     console.log("function incr1")
// }

// const incre2 =()=>{

//     setCount(count + 1)
//     console.log("function incr2")
// }
// useEffect(()=>{

//     console.log("this is useEffect")
// },[])

//   return(

//     <div>
//         <h1>First:{data}</h1>
//   <button onClick={incre1}>incre1</button>

//        <h1>Second:{count}</h1>
//   <button onClick={incre2}>incre2</button>
//     </div>
//   )
// }
// export default App 




// ---------- Dependency [plus] ---------

// c)
// EX24:
// ANS: in this example we are only passed one dependency that is count1 like [count1]., here count1 only effected at console output will get or effect and count2 will not effect.




// import { useEffect, useState } from "react"

// const App = ()=>{

//  let [data,setData] = useState(0)   
//  let [count,setCount] = useState(0) 


// const incre1 = ()=>{
//     setData(data +1)
//     console.log("function incr1 - setData")
// }

// const incre2 =()=>{
//     setCount(count + 1)
// console.log("function incr2 - setCount")
// }

// useEffect(()=>{
//   console.log("this is useEffect")
// },[data])

//   return(

//     <div>
//         <h1>FirstData:{data}</h1>
//   <button onClick={incre1}>incre1</button>

//        <h1>SecondCount:{count}</h1>
//   <button onClick={incre2}>incre2</button>
//     </div>
//   )
// }
// export default App 



// ------------------------------- 

// d)
// EX24:

// ANS: and in this example both values are effecting because of we are passed dependecies both like [count1,count2].




// import { useEffect, useState } from "react"

// const App = ()=>{

//  let [data,setData] = useState(0)   
//  let [count,setCount] = useState(0) 


// const incre1 = ()=>{
//     setData(data +1)
//     console.log("function incr1 - setData")
// }

// const incre2 =()=>{
//     setCount(count + 1)
//     console.log("function incr2 - setCount")
// }

// useEffect(()=>{
//     console.log("this is useEffect")
// },[data,count])

//   return(

//     <div>
//         <h1>FirstData:{data}</h1>
//   <button onClick={incre1}>incre1</button>

//        <h1>SecondCount:{count}</h1>
//   <button onClick={incre2}>incre2</button>
//     </div>
//   )
// }
// export default App 





// ------ 2) UseEffect Fetching data ------- 



// e) 
// EX24:

// ANS: Here we are taken JSON placeholder API Link for getting data for explaining useEffect concept., 

// we can directly get api link from JSON Placeholder Website for free. 



// import axios from "axios";
// import { useEffect} from "react";

// const Fetch = ()=>{
// useEffect(()=>{

//  axios.get( 'https://jsonplaceholder.typicode.com/todos/1').then(()=>{

//          console.log("Got The Data");
//     })
//     .catch(()=>{
//  console.log("something wrong check API Fetch link or Internet conncetion")
//     })
// })
// }
// export default Fetch


// ------------------------------------- 





// ---------- Important Hooks ------------

//  4 - Methods are very important in below,

// 33) useMemo,
// 34) useCallback
// 35) ControlledComponent with Props
// 36) useRef()
// 37) UnControlledComponent by Telugu Skillhub






// --------------- HOOK4 ----------------

// ----------- 13) useMemo ------------ 




// what is useMemo ?

// ANS: useMemo is using for to increase application performance or enhance application performance.

// And useMemo returns a memoized value., means in EX b) we can see, that is adding inside of useMemo() function i.e., memoized value - "plus + 0"



// NOTE : useMemo examples are, a) b) c) 

// ---------------------------------------- 

// a) 
// EX31:

// ANS: Here in this example we are not got a "multiplus" output., we will see in b)



// import { useState } from "react"

// const App = ()=>{

// const [plus,setPlus] = useState(0);
// const [minus,setMinus] = useState(0);

// const incre = ()=>{
//     setPlus(plus + 1)
//     console.log("plus function called")
// }
// const decre = ()=>{
//     setMinus(minus - 1)
//     console.log("minus function called")
// }
// const multiplus = (()=>{

//  console.log("multi plus function called")

//   return(

//     plus + 0
//   )
// },[plus])

//     return(

//        <div>
//          <h1>multi plus: {(multiplus)} </h1> 
//        <h1>incre : {plus}</h1>
//        <button onClick={incre}>plus</button>

//        <h1>minus : {minus}</h1>
//        <button onClick={decre}>minus</button>
//        </div>
//     )
// }
// export default App



// ----------------------------------

// b) 
// EX31:

// ANS: Here we are used useMemo concept.,
// ** <h2>Multiplus :{(multiplus)}</h2>




// import { useMemo, useState } from "react"

// const App = ()=>{

// const [plus,setPlus] = useState(0);
// const [minus,setMinus] = useState(0);

// const incre = ()=>{
//     setPlus(plus + 1)
//     console.log("plus function called")
// }
// const decre = ()=>{
//     setMinus(minus - 1)
//     console.log("minus function called")
// }
// const multiplus = useMemo(()=>{

//  console.log("multi plus function called")

//   return(

//     plus + 0
//   )
// },[plus])

//     return(

//        <div>
//          <h1>multi plus: {(multiplus)} </h1> 
//        <h1>incre : {plus}</h1>
//        <button onClick={incre}>plus</button>

//        <h1>minus : {minus}</h1>
//        <button onClick={decre}>minus</button>
//        </div>
//     )
// }
// export default App




// --------------------------------------

// c) 
// EX31:

// ANS: "Both plus and minus values will perform again" because of we are passed dependency values[plus,minus] if we pass one dependecy then it will work like[plus] only plus function will perform if we want to perform only "minus" function then [minus].




// import { useMemo, useState } from "react"

// const App = ()=>{

// const [plus,setPlus] = useState(0);
// const [minus,setMinus] = useState(0);

// const incre = ()=>{
//     setPlus(plus + 1)
//     console.log("plus function called")
// }
// const decre = ()=>{
//     setMinus(minus - 1)
//     console.log("minus function called")
// }
// const multiplus = useMemo(()=>{

//  console.log("multi plus function called")

//   return(

//     plus + 0
//   )
// },[plus,minus])

//     return(

//        <div>
//          <h1>multi plus: {(multiplus)} </h1> 
//        <h1>incre : {plus}</h1>
//        <button onClick={incre}>plus</button>

//        <h1>minus : {minus}</h1>
//        <button onClick={decre}>minus</button>
//        </div>
//     )
// }
// export default App




// ---------- Multiplication ------------ 

// d) 
// EX31:



// import { useMemo, useState } from "react"

// const App = ()=>{

// const [plus,setPlus] = useState(0);
// const [minus,setMinus] = useState(0);

// const incre = ()=>{
//     setPlus(plus + 1)
//     console.log("plus function called")
// }
// const decre = ()=>{
//     setMinus(minus - 1)
//     console.log("minus function called")
// }
// const multiplus = useMemo(()=>{

//  console.log("multi plus function called")

//   return(

//     plus * 2
//   )
// },[plus,minus])

//     return(

//        <div>
//          <h1>multi plus: {(multiplus)} </h1> 
//        <h1>incre : {plus}</h1>
//        <button onClick={incre}>plus</button>

//        <h1>minus : {minus}</h1>
//        <button onClick={decre}>minus</button>
//        </div>
//     )
// }
// export default App



// ------------ Dividing ------------- 

// e) 
// EX31:



// import { useMemo, useState } from "react"

// const App = ()=>{

// const [plus,setPlus] = useState(0);
// const [minus,setMinus] = useState(0);

// const incre = ()=>{
//     setPlus(plus + 1)
//     console.log("plus function called")
// }
// const decre = ()=>{
//     setMinus(minus - 1)
//     console.log("minus function called")
// }
// const multiplus = useMemo(()=>{

//  console.log("multi plus function called")

//   return(

//     plus / 2
//   )
// },[plus,minus])

//     return(

//        <div>
//          <h1>multi plus: {(multiplus)} </h1> 
//        <h1>incre : {plus}</h1>
//        <button onClick={incre}>plus</button>

//        <h1>minus : {minus}</h1>
//        <button onClick={decre}>minus</button>
//        </div>
//     )
// }
// export default App







// --------------- HOOK5 ----------------

// --------- 14) useCallback -----------



// what is useCallback ?

// ANS: it follows props concept"., parent to child.


// 1) The useCallBack and useMemo Hooks are similar. The main diffrence is that useMemo returns a memoized value and useCallback returns a memoized function., 

// 2) we will perform Props concept in useCallback() concept.

// 3) In this example we will pass parent function to child component, from parent component we will pass useCallback() empty function to the child component in child component we will use memo()(Hook)., is known as memoized function.





// source :  Yoshita  - YouTube channel.


//  a) 
// EX35: 
// ANS:  


// 1) Here dependency value is assigned [plus] but we are getting both outputs whenever we are clicked plus,minus simultaneously., plus,minus along with child component output also getting, which is from UseCallback.jsx file Component. 

// 2) For avoiding this issue we will use useCallback()., we will see in b)




// import { useCallback,  useState } from "react"

// const App = ()=>{

// const [plus,setPlus] = useState(0);
// const [minus,setMinus] = useState(0);

// const incre = ()=>{
//     setPlus(plus + 1)
//     console.log("plus function called")
// }
// const decre = ()=>{
//     setMinus(minus - 1)
//     console.log("minus function called")
// }
// const multiplus = (()=>{

 
// },[plus])

//     return(

//        <div>
      
//       <useCallback output = {multiplus}/>
//        <h1>incre : {plus}</h1>
//        <button onClick={incre}>plus</button>

//        <h1>minus : {minus}</h1>
//        <button onClick={decre}>minus</button>
//        </div>
//     )
// }
// export default App




// OUTPUT: 

//  plus function called
//  minus function called

// ------------------------------------------ 


//  b)
// EX35: 
// ANS: parent file App.js giving instructions whenever we click plus button then only useCallback hook has working ., minus button won't work ., and useCallback output receiving by passing memo at UseCallback.jsx file.



// import { useCallback,  useState } from "react"
// import UseCallback from "./Components/useCallback/UseCallback";

// const App = ()=>{

// const [plus,setPlus] = useState(0);
// const [minus,setMinus] = useState(0);

// const incre = ()=>{
//     setPlus(plus + 1)
//     console.log("plus function called")
// }
// const decre = ()=>{
//     setMinus(minus - 1)
//     console.log("minus function called")
// }
// const multiplus = useCallback(()=>{

 
// },[plus])

//     return(

//        <div>
      
//       <UseCallback output = {multiplus}/>
//        <h1>incre : {plus}</h1>
//        <button onClick={incre}>plus</button>

//        <h1>minus : {minus}</h1>
//        <button onClick={decre}>minus</button>
//        </div>
//     )
// }
// export default App


// ----------------------------------------











// --- 15) ControlledComponent with Props --


// source : Telugu Skillhub - YouTube 




// What is Control Component ? 

// ANS: 
 
//  *** Controlled Components : 

// 1)  In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component state. The alternative is uncontrolled components, where form data is handled by the DOM itself.

// 2) The Controlled Components take its target value through props and make changes through callbacks like onClick, onChange, etc.

// -------------------------------- 


// EX34: 
// ANS: 

// In this example we are controlling  onChange = {}, event handler as a Callback - Here onChange = {} event handler is nothing but callback.


// 1) changeHandler = {} we sre sending as a prop to the B_ControlledComponent.





// import React, { useState } from "react"
// import ControlledComponent from "./Components/controlledComponent/ControlledComponent"


// const App = ()=>{
// const [name,setName] = useState("")

// const changeHandler = (e) =>{
//     setName(e.target.value)
// }

// return(

//     <div>

//      <h1>Name : {name}</h1>

// <input type="text" onChange={changeHandler} 
// placeholder="Component_A"/>

// <ControlledComponent output = {changeHandler}/>

//     </div>
// )
// }
// export default App








// -- 16) Diff b/w UnControlled & Controlled Components --


// ANS: 

// In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component state. The alternative is uncontrolled components, where form data is handled by the DOM itself.


// To write an uncontrolled component, instead of writing an "event handler" for every state update, we can use a useRef(Hook) to get form values from the DOM.


// ------------------------------------------ 


// Difference between Ref and useRef​  !!!


//  ANS: useRef is used to create a reference object, while ref is used to access and assign DOM nodes 


// ------------------------------------------ 








// --------- 17) useRef (Hook) ----------



// source : Code Step By Step - YouTube channel.



//  What is useRef ?

// ANS: useRef is used in functional Component, it is a (Hook)., with help of useRef we will manipulate DOM directly.

// 1) we can not manipulate DOM directly with help of Props and State.., in that condition we will use useRef.
// 2) we can manipulate HTML Elements.
// 3) for changing HTML focus, color, values etc..


//// DOM Manipulating Formate : 

// input.current.value = "1000"
// input.current.focus();
// input.current.style.color = "red"



// a) 

// EX33: 

// ANS: in this example we are only used one DOM formate that is  "input.current.style.color = "red"  user entering value will becomes red., and cursor is movoing outside after clicking button for that issue we will clear in ex:b) below,





// import { useRef } from "react";

// const App = ()=>{

//     const input = useRef(null);


//     const HandleInput =()=>{
    
//     input.current.style.color = "red"   
//     console.log(input.current.value)
//     }

//     return(
//         <div>
//             <h1>useRef in React</h1>
//           <input type="text" ref={input} />
//     <button onClick={HandleInput}> Handle </button>  
//         </div>
//     )
// }
// export default App



// ------------------------------------------ 



// b) 

// EX33: 
// ANS: Here we are used  input.current.focus();  DOM formate for cursor consistent on input., in below example c) we will see constant value 1000 on input.




// import { useRef } from "react";

// const App = ()=>{

//     const input = useRef(null);


//     const Handle_Input =()=>{

//     input.current.focus();
//     input.current.style.color = "red"   
//     console.log(input.current.value)
//     }
//     return(

//         <div>
//             <h1>useRef in React</h1>
//           <input type="text" ref={input} />
//     <button onClick={Handle_Input}>Handle input</button>  
//         </div>
//     )
// }
// export default App

// -------------------------------------------- 



// c) 

// EX33: 
// ANS:  Here we are added value inside of console.




// import { useRef } from "react"

// const App = ()=>{

// const input = useRef(null);

// const btnHandler = ()=>{

//     input.current.style.color = "red"
//     input.current.focus();
//     console.log(input.current.value)
// }
//     return(

//         <div>
//     <input type="text" ref={input}/>
//     <button onClick={btnHandler}>click</button>
//         </div> 
//     )
// }
// export default App



// --------------------------------------------- 


// d) 

// EX33: 
// ANS: 




// import { useRef } from "react";

// const App = ()=>{

//     const input = useRef(null);


//     const btn_Input =()=>{

//      input.current.value = "1000"
//     console.log(input.current.value)
        
//     }
//     return(

//         <div> 
//             <h1>useRef in React</h1>
//           <input type="text" ref={input} />
//     <button onClick={btn_Input}>btn_Input</button>  
//         </div>
//     )
// }
// export default App









// ------------ UNCONTROLLED ------------

// ------ 18) UnControlledComponent -------


// source : Telugu Skillhub - YouTube 




// what is Uncontrolled component  ? 

// ANS: 

// 1) Uncontrolled Components: Uncontrolled Components are the components that are not controlled by the React state it's handled by the DOM (Document Object Model) it self. 

// 2) To write an uncontrolled component, instead of writing  an event handler for every state update, we will use a "useRef"(Hook)to get form values from the DOM., 

// 3) we will write like ref = {name}, ref = {salary}, ref ={company}, And we dont write event handlers like onChange = {name}, onChange = {salary}, onChange = {company}.

// 4) we never going to use callback funtionalities in Uncontrolled component whereas we use callback functionalities in "Controlled components".



// EX35: 
// ANS: a),b)- Arithmetic operations important interview

// a) 
// EX35: 
// ANS:  ref - is a attribute.


//   NOTE : 
// If we removed  e.preventDefault() method then output at console will be erase within seconds  





// import React, { useRef} from "react"

// const UnControlled = ()=>{
// const Name = useRef(null)
// const salary = useRef(null)
// const company = useRef(null)

//  const submitHandler = (e)=>{
//     e.preventDefault();
//     console.log(Name.current.value)
//     console.log(salary.current.value)
//     console.log(company.current.value)
// }
//     return(
//         <div>
//             <center>
//    <form onSubmit={submitHandler}>
//         <label >Name: </label>
//         <input type="text" ref={Name} /> <br />
//         <label >Salary: </label>
//         <input type="number" ref={salary} /> <br />

//         <label >Company: </label>
//         <input type="text" ref={company} /> <br />

//         <input type="submit" name = "submit" value= "submit" />
//     </form>
//       </center>
//         </div>
//     )
// }
// export default UnControlled







// ----- Arthmetic operations + - / *  ----

// Important Topic for interview + - / *

// Source : prajwal sir.

// b) 

// EX35: 
// ANS: 



// import { useState } from "react";
// import { useRef } from "react"

// const Uncontrolled = ()=>{

// let num1 = useRef(null);
// let num2 = useRef(null);
// let [results,setResults] = useState("")


// let add = ()=>{

//     let a = Number(num1.current.value)
//     let b = Number(num2.current.value)
//     setResults(a+b);
//     console.log("values added")
// }
// let sub = ()=>{

//     let a = Number(num1.current.value)
//     let b = Number(num2.current.value)
//     setResults(a-b)
//     console.log("values subtracted")
// }
// let mul = ()=>{

//     let a = Number(num1.current.value)
//     let b = Number(num2.current.value)
//     setResults(a*b)
//     console.log("values mul")
// }

// let division = ()=>{

//     let a = Number(num1.current.value)
//     let b = Number(num2.current.value)
//     setResults(a/b)
//     console.log("values div")
// }
//     return(

//         <div>

//        <label htmlFor="">enter number 1</label> <br />
//        <input type="text" ref={num1} /> <br />

//        <label htmlFor="">enter number 2</label> <br />
//        <input type="text" ref={num2} /> <br /> <br />

//        <button onClick={add}>add +</button> 
//        <button onClick={sub}>sub -</button>
//        <button onClick={mul}>mul *</button>
//        <button onClick={division}>div /</button>

//        <h1>Result : {results}</h1>

//         </div>
//     )
// }
// export default Uncontrolled









// -------- 19) React Router DOM ---------



// npm install react-router-dom@6
// source : Thapa Technical - youtube


// What is React-Router-DOM ?
// ANS: 

// 1) React Router DOM is using To create an application, with multiple page routes, 
// 2) Within the src folder, we'll create a folder with several files,
// 3) let's first start with the file structure.
// src\pages\:

// Home.js
// Contact.js
// About.js
// Blogs.js
// Layout.js
// NoPage.js


// To build Router Dom we will use React Components such as:

// import {BrowserRouter, Routes, Route}
// import {Link}
// import {NavLink}


// --------------------------------- 


// INLINE STYLE COMPONENT CREATION :

// 1) Home page, 2) about page, 3) contact
/* <BrowserRouter>
<Routes>
    <Route path="/" element = {<div>Home page</div>} />
    <Route path="/about" element = {<div>About page</div>} />
    <Route path="/contact" element = {<div>contact page</div>} />
</Routes>
</BrowserRouter> */





// -------- 1) URL / Page Component -------


// EX27:   a) b) c) d) e) 

// ANS:  if we enter,
// 1) '/' slash on browser section then HOME PAGE will be appears,
// 2) /about, on browser ABOUT PAGE will be Appears., 
// 3) /contact,on browser CONTACT PAGE Appears., 
// 4) if we entered wrong text on browser instead of about and contact then ERROR PAGE will be appears.



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/ReactRouterDom/Home";
// import About from "./Components/ReactRouterDom/About";
// import Contact from "./Components/ReactRouterDom/Contact";
// import Error from "./Components/ReactRouterDom/Error";


// function App (){

//     return(
//         <BrowserRouter>
//        <Routes>


//     <Route path = "/" element = {<Home/>}/>
//     <Route path = "/about" element = {<About/>}/>
//     <Route path = "/contact" element = {<Contact/>}/>
//     <Route path = "/*" element = {<Error/>}/>
//        </Routes>
//         </BrowserRouter>
//     );
// }
// export default App





// ------------ 2) Link Component ------------



// What is Link component ? 

// ANS: Link component is using for avoiding page reload. for example below,

// 1) Link tag its similar to anchor tag, in anchor tag attribute we will use href whereas in Link tag we will use (to = "") attribute

// ----------------------------------------- 

// ANS:


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/ReactRouterDom/Home";
// import About from "./Components/ReactRouterDom/About";
// import Contact from "./Components/ReactRouterDom/Contact";
// import Error from "./Components/ReactRouterDom/Error";


// function App (){

//     return(
//       <BrowserRouter>
//        <Routes>

//     <Route path = "/" element = {<Home/>}/>
//     <Route path = "/about" element = {<About/>}/>
//     <Route path = "/contact" element = {<Contact/>}/>
//     <Route path = "/*" element = {<Error/>}/>
    
//        </Routes>
//     </BrowserRouter>
//     );
// }
// export default App






// --------- 3) NavLink Component ----------



// NOTE : In {NavLink} Component should be use Global css which is "ReactR.css" not a module.css


// What is NavLink component ? 

// ANS: NavLink component is using for Knowing color of page TITLE, knowing which page is currently running,whenever user action has occured on particular page.





// import './Components/ReactRouterDom/ReactR.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Components/ReactRouterDom/Home';
// import About from './Components/ReactRouterDom/About';
// import Contact from './Components/ReactRouterDom/Contact';
// import Error from './Components/ReactRouterDom/Error';


// function App (){

//     return(

//         <BrowserRouter>
        
//        <Routes>

//     <Route path = "/" element = {<Home/>}/>
//     <Route path = "/about" element = {<About/>}/>
//     <Route path = "/contact" element = {<Contact/>}/>

//     <Route path = "*" element = {<Error/>}/>
       
//        </Routes>
//         </BrowserRouter>
  
//     );
// }
// export default App









// ----- 24) image adding by reactJS ------


// source : Telugu skillhub - youtube

// EX28: 
// ANS:  a) image b) Audio c) Video



// import AddPhotos from "./Components/Addphotos/AddPhotos"

// function App (){

//     return(
//         <div>
//           <AddPhotos/>
//         </div>
//     )
// }
// export default App


// ------------------------------------ 















// --- very very important Fetch Api ----- 

// ------------- axios -------------- 



// --------- 20) Fetch axios  ------------




// EX26: 

// ANS: a) b) c) d) e) f) g) h) i) examples,



//  npm install axios - VS code command

// NOTE : we will use URL Link to fetch data - From jsonplaceholder webpage only.,will not use Youtube link or anyother links. 


// a) 
// EX26: 

// ANS: In this example we are only fetching "get" the data we will not do "post", "delete" etc...



// 1) fetch('') is using for to put URL link as a 'path of the page'  

// 2) ***we will fetch URL link data using with axios package of Reactjs.


// 3) if fetch link is wrong like,

// a) correct Link : ('https://jsonplaceholder.typicode.com/posts'); 

// b) wrong Link :('https://jsonplaceholder.typicode.com/posts12345');

// in last we added numbers 12345 that is wrong link.

// if wrong link enter then,  .catch(()=>{ function will be executed automatically., console.log("Something is Wrong") error.


// a)




// import axios from "axios";
// import { useEffect} from "react";

// const Fetch = ()=>{
   
// useEffect(()=>{

//  axios.get('https://jsonplaceholder.typicode.com/posts/').then(()=>{

//          console.log("Got The Data");
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
// })
// }
// export default Fetch




// OUTPUT: Got The Data

// ------------------------------------ 


// b) 
// EX26: 
// ANS: 
// 1) Here we got entire {} object data.,



// import axios from "axios";
// import { useEffect } from "react";

// const Fetch = ()=>{
   
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts/')
//         .then((response)=>{
//             console.log("Got The Data");
//             console.log(response); 
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
// })
// }
// export default Fetch



// OUTPUT: 

// {data: Array(100), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

// --------------------------------------------- 


// c) 
// EX26: 
// ANS: Here we are adding just data object at console like  console.log(res.data); 1 to 100 datas has found.



// import axios from "axios";
// import { useEffect } from "react";

// const Fetch = ()=>{
   
   
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts/')
//         .then((res)=>{
//             console.log("Got The Data");
//             console.log(res.data); 
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
// })
// }
// export default Fetch





// -------------- {  useState } --------------


// d) 
// EX26: 
// NOTE : 
// ANS: we must pass empty dependency[] in useState([]) to get output at console.





// import axios from "axios";
// import { useEffect, useState } from "react";

// const Fetch = ()=>{

// let [content,setContent] = useState([])//map []
  
//     useEffect(()=>{

//         axios.get(`https://jsonplaceholder.typicode.com/posts/`).then((res)=>{

//             console.log("Got The Data");
//             console.log(res.data); 
//             setContent(res.data);    
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
    
// },[])

// // below new part for this example d)

// return(
//     <div>
//     {
//     content.map((x)=>{
//     return(

//         <div>

//          <h1>Id's : {x.id}</h1> 
//          <h1>Title : {x.title}</h1>   
    
//         </div>
//     )
//     })
//     }
//    </div> 
// )
// }
// export default Fetch







// ** without Map() and adding input search engine 

// *** we will use Here single return()   

// --------*** Important Example --------



// e) 
// EX26: 
// ANS: adding input search engine,


// 1) Here we are adding another useState that is let [id, setId] = useState("")

// 2) Here we are creating one input box, and then we are targetting id number as a input directly entering with particular id numbers as a input., we will get output id: number and title: content on browser as well as console.

// 3) Here we are passing useEffect dependecy value that is [id]., passing dependency value we should mention in backtick closing along with dollar `${id}` like (`https://jsonplaceholder.typicode.com/posts/${id}`)





// import axios from "axios";
// import { useEffect, useState } from "react";

// const Fetch = ()=>{
//     let [content, setContent] = useState([])
//     let [id, setId] = useState("")

//     useEffect(()=>{

//   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((res)=>{
//             console.log("Got The Data");
//             console.log(res.data)
//             setContent(res.data);   
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
    
// },[id])

// const idHandler =(e)=>{
//     setId(e.target.value)
// }

// return(
//   <div>
//  <input type="text" value={id} onChange={idHandler}/>

//       <h1> id: {content.id}</h1>
//       <h1> title: {content.title}</h1>
 
//   </div>
// )
// }
// export default Fetch




// -------- Adding Button Fetch --------

// source : Prajwal sir
// f) 
// EX26: 
// ANS:

// ANS:  Here we are Fetching Api data from Github link the datas are id's and title using with search button.




// import axios from "axios";
// import { useEffect} from "react";
// import { useState } from "react";

// const Fetch = ()=>{
//     let [content, setContent] = useState([])
//     let [id, setId] = useState("")
//     let [btn, setBtn] = useState("")

//     useEffect(()=>{
//  axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
//  .then((res)=>{
//             console.log("Got The Data");
//             console.log(res.data)
//             setContent(res.data);
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
    
//   },[btn])

//  let idHandler =(e)=>{  
//     setId(e.target.value)
// }

// let ButtonHandler =()=>{
//  setBtn(id)

// }
// return(
//     <div>
        
//     <input type="text" value={id} onChange={idHandler}/>
    
//     <button onClick={ButtonHandler}>Search</button>

//     <h1> id: {content.id}</h1>
//     <h1> ti tle: {content.title}</h1> 
 
//     </div>
// )
// }
// export default Fetch

// ----------------------------------- 








// ------ 21) Github Link Fetch Data ---------


// source : Prajwal sir

// EX1: 
// ANS: Here we are Fetching API, id, login name, avatar_url and node_id  of Github link.



// import axios from "axios";
// import { useEffect, useState } from "react";

// const Fetch = ()=>{
//     let [content, setContent] = useState([])  

//     useEffect(()=>{
//         axios.get('https://api.github.com/users')
//         .then((res)=>{
//             console.log("Got The Data");
//             console.log(res.data);
//             setContent(res.data);
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
    
// })

// return(
//     <div>
//  { 
//  content.map((x)=>{
//     return(
//         <div>
//             <p>{x.id}</p>
//             <p>{x.login}</p>
//             <p>{x.node_id}</p>
//             <img src= {x.avatar_url} alt="" />
//         </div>
//     )
//     })
//     }
//    </div> 
// )
// }
// export default Fetch


// ------------------------------------ 

// source : Prajwal sir

// EX2: 
// ANS: Image printing using input
// ANS: avatar printing



// import axios from "axios";
// import { useEffect, useState } from "react";

// const Fetch = ()=>{
//     let [content, setContent] = useState([])  
//    let [id,setId] = useState("")

//     useEffect(()=>{
//         axios.get(`https://api.github.com/users/${id}`)
//         .then((res)=>{
//             console.log("Got The Data");
//             console.log(res.data);
//             setContent(res.data);
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
    
// },[id])

// const idData = (e)=>{
//     setId(e.target.value)
// }

// return(
//     <div>

// <input type="text" value={id} onChange={idData} placeholder="Enter id number" />

//      <h1>id :{content.id}</h1>
//      <h1>loginID :{content.login}</h1>
//      <h1>Image :<img src={content.avatar_url} alt=""/></h1> 

//     </div>
// )
// }
// export default Fetch



// ------------------------------------- 


// EX3: 
// ANS: Image printing using search button





// import axios from "axios";
// import { useEffect, useState } from "react";

// const Fetch = ()=>{
//     let [content, setContent] = useState([])  
//    let [id,setId] = useState("")
//    let [btn,setBtn] = useState("")

//     useEffect(()=>{
//         axios.get(`https://api.github.com/users/${btn}`)
//         .then((res)=>{
//             console.log("Got The Data");
//             console.log(res.data);
//             setContent(res.data);
//     })
//     .catch(()=>{
//      console.log("Something is Wrong")
//     })
    
// },[btn])

// const idData = (e)=>{
//     setId(e.target.value)
// }
// const btnHandle = ()=>{
//     setBtn(id)
// }
// return(
//     <div>

// <input type="text" value={id} onChange={idData} placeholder="Enter id number" />
// <button onClick={btnHandle} value={btn}>search</button>

//      <h1>id :{content.id}</h1>
//      <h1>login :{content.login}</h1>
//      <h1>Image :<img src={content.avatar_url} alt=""/></h1> 

//     </div>
// )
// }
// export default Fetch


// -------------------------------------- 








// ------- 22) fileName.module.css  -------

// ....---.... Css1_Module.jsx ..............

// a) 

// EX5: 
// ANS: 

// 1) import Style from "./css1.module.css" in css file first letter should be starts with small letter., that is css1.module.css

// 2) For every component we will create seperate CSS file that is rule of module.css concept.

// 3)  in module.css method we will use for importing css file like (import Style from "./filename.module.css") whereas in Global css or external css we won't mention Style like that just we will written (import "./Cssfilename")



// import ModuleDotcss from "./Components/moduleCSS/FileNameModuleCss"

// const App =()=>{

//     return(

//         <div>
//             <ModuleDotcss/>
//         </div>
//     )
// }
// export default App



// --------------------------------- 







// ----- 23) Global OR External css -----


// b)
// EX5:  
// ANS: 

// 1) Global or external css file using for entire react project, it will target all the components.

// 2) in module.css method we will use for importing css file like (import Style from "./filename.module.css") whereas in Global css or external css we won't mention Style like that just we will written (import "./Cssfilename")




// import GlobalCss from "./Components/GlobalCSS/GlobalCss"

// const App =()=>{

//     return(
//         <div>
//    <GlobalCss/>
//         </div>
//     )
// }
// export default App


// ---------------------------------- 






// -------- 23) Inline_CSS in Reactjs --------

// c)
// EX6: 
// ANS: 

// 1) Inline css is mainly using for particular tag with "Style" Attribute.

// 2) The inline css properties should be written inside an expression in the form of "Object".




// import InLineCSS from "./Components/inlineCSS/InLine"

// const App =()=>{

//     return(
//         <div>
//             <InLineCSS/>
//         </div>
//     )
// }
// export default App






// ------ 24) onClick in Reactjs ---------


// EX7: 
// ANS: we are not use (useState) Hook in this example,



// import React from "react";
// const App = ()=>{

//   return(
//  <div>

// <button onClick= {()=>console.log("clicked")}>click here</button>

// </div>
//  )
// }
// export default App



// OUTPUT: clicked




// ----------- 25) onChange ------------ 

// source: Telugu Skillhub - YouTube



// EX9: 
// ANS: onChange eventHandler.

// 1) meaning of (e.target.value) is we are typing each event assigning to a [user] variable using with setUser.




// import React, { useState } from "react";

// const App = ()=>{
//     const [user,setUser] = useState("");

//     const handler = (e) =>{
//         setUser(e.target.value)
//     }
//     return(
//      <div>
//      <center>
    
//      <input type="text" placeholder="username" value ={user} onChange={handler}/>
//        <br/>

//        {user}
       
//      </center>
//     </div>
//     )
// }
// export default App







// ----------- 26) onSubmit ---------


// EX10: 
// ANS: 

// 1) onSubmit is using for to Call a function when form is submitted.

// 2) in this example Output will be save at console as a object of Array.{[]}





// import React from "react";
// import { useState } from "react";

// // 1 Here useState Hook created in functionComponent
// const App = ()=>{
// const [data,setData] = useState({
//     username:'',
//     password:'',
// })
// // 2 Here Property values has converted into Array De-structuring formate.
// const {username,password} = data;

// // BELOW EVENT HANDLERS : 3, 4

// // 3 Here username password - onChange Event used
// const OnChangeHandler = (e)=>{
// setData({...data,[e.target.name]:[e.target.value]})
// }
// // 4  Here input submit - onSubmit Event used
// const submitHandler = (e)=>{
//     e.preventDefault();
//     console.log(data);
// }

// return(
//     <div>
//         <center>
//     <form onSubmit = {submitHandler}>

//     <input type="text" name = "username"value = {username} placeholder="username" onChange ={OnChangeHandler}/>
//     <br />

//     <input type= "password" name= "password" value={password} onChange={OnChangeHandler} placeholder="password"/>

//     <br />
//     <input type="submit" name ="submit"/> 
//      </form>

//         </center>
//     </div>
// )
//  }
//  export default App







// OUTPUT: Array formate

// password: ['8998876']
// username: ['ARAAA']







// --- 27) Create Login (OR) Signin Form --


// EX13: 

// ANS: onSubmit concept and LoginForm same concepts.



// import React from "react";
// import { useState } from "react";

//   const App = ()=>{

//  const [data,setData] = useState({
//     username:"",
//     password: "",
//  })

// // Destructuring...
// const {username,password} = data 
// const changeHandler = (e)=> {
//     setData({...data,[e.target.name]:e.target.value})
// }

// const submitHandler = (e)=>{

//  // if have any actions pending values then we will use preventDefault.
//    e.preventDefault(); 
//    console.log(data)
// }
//  return(

//     <div>
//         <form onSubmit={submitHandler}>

//     <input type="text" name = "username" value = {username} onChange={changeHandler}/>  <br />
//     <input type="password" name = "password" value={password
//     } onChange={changeHandler}/>
//     <br />
//     <input type="submit" name ="submit" />

//         </form>
//     </div>
//  )
// }
// export default App





// OUTPUT: string "" formate

// password: "12321d"
// username: "aaaa"








// ---- 28) Filter with ArrayOfDigits ---- 


// ----------- Filter in Reactjs ------------

// a) 

// EX12: 
// ANS: Here we are filtering numeric values 40 above values.



// import React from "react"

// const Filter =()=>{
// const arr =[10,20,30,40,50,60,70,80];
// const filtered = arr.filter((item) => item > 40)

//     return(

//         <div>
//             {
//      filtered.map( (mapfn) => 
//      <li >{mapfn}</li>)
//             }
//         </div>
//     );
// };
// export default Filter





// ---- 29) Filter with ArrayOfValues -----


// b) 
// EX12: 
// ANS: 

// 1) Here we are filtering person names from crowd.



// import React from "react"

// const Filter =()=>{

// const arr =["jameer","arshad1","arshad2","john","rahul1","jameer","jameer","rahul2","rahul3","rahul4","rahul5","wat1","wat1","wat1","wat1","wat1","wat1","wat1","wat1","cat","dog","goat","arshad33","arshad100"];

// const filtered = arr.filter( (item) => item.includes("arshad") )

//     return(

//         <div>
//             {
//      filtered.map( item => 
//      <li >{item}</li>)
//             }
//         </div>
//     );
// };
// export default Filter










// ------- 30) Create Signup Form -------


// EX14: 
// ANS:



// import React, { useState } from "react";

// const SignupForm = ()=>{
// const [data,setData] = useState({

//     Email: "",
//     username: "",
//     password: "",
//     Confirmpassword:"",

// })

// const {Email,username,password,Confirmpassword} = data;

// const changeHandler = (e)=>{

//     setData({...data,[e.target.name]:e.target.value})
// } 

// const submitHandler = (e)=>{
//     e.preventDefault();
// if(password === Confirmpassword){
//     console.log(data)
// }
// else{
//     console.log("passwords are not matching")
// }
// }

// return(

//     <div>
//         <center>

// <form onSubmit={submitHandler}>

//     <input type="text" name="username" value = {username}  onChange={changeHandler} placeholder="username"/> <br />

//     <input type="email" name="Email" value={Email} onChange={changeHandler} placeholder="Email"/> <br />

//     <input type="password" name="password" value={password} onChange={changeHandler} placeholder="password"/> <br />

//     <input type="password" name="Confirmpassword" value={Confirmpassword} onChange={changeHandler} placeholder="Confirmpassword"/> <br />

//     <input type="submit" name = "submit" />
// </form>

//         </center>
//     </div>
// )
// }
// export default  SignupForm 






// ----- 31) Create FormValidation ------



// a)
// EX15: 
// ANS:  Error notification Type,


// 1) username should be at least 5 characters.
// 2) password and Confirmpassword should be same.




// import React, { useState } from "react";

// const FormValidation = ()=>{
// const [data,setData] = useState({

//     Email: "",
//     username: "",
//     password: "",
//     Confirmpassword:"",
// })

// const {Email,username,password,Confirmpassword} = data;

// const changeHandler = (e)=>{

//     setData({...data,[e.target.name]:e.target.value})
// } 

// const submitHandler = (e)=>{
//     e.preventDefault();

// if (username.length <5){
//     alert("username should be at least 5 characters")
// }
// // if password and confirm password are not same then we will use this condtions.
// else if(password !== Confirmpassword){
//     alert("passwords are not matching")
// }
// // if both are true then else console will be executed.
// else{

//     console.log(data)
// }
// }

// return(

//     <div>
//         <center>

// <form onSubmit={submitHandler}>

//     <input type="text" name="username" value = {username}  onChange={changeHandler} placeholder="username"/> <br />

//     <input type="email" name="Email" value={Email} onChange={changeHandler} placeholder="Email"/> <br />

//     <input type="password" name="password" value={password} onChange={changeHandler} placeholder="password"/> <br />

//     <input type="password" name="Confirmpassword" value={Confirmpassword} onChange={changeHandler} placeholder="Confirmpassword"/> <br />

//     <input type="submit" name = "submit" />
// </form>

//         </center>
//     </div>
// )
// }
// export default FormValidation



// --------------------------------------- 


// b)
// EX15: 
// ANS:  Error in characters type,


// 1) username should be at least 5 characters.
// 2) password and Confirmpassword should be same.





// import React, { useState } from "react";

// const FormValidation = ()=>{
// const [data,setData] = useState({

//     Email: "",
//     username: "",
//     password: "",
//     Confirmpassword:"",
// })

// const {Email,username,password,Confirmpassword} = data;

// const changeHandler = (e)=>{

//     setData({...data,[e.target.name]:e.target.value})
// } 

// const submitHandler = (e)=>{
//     e.preventDefault();

// if (username.length <4){
//     alert("username should be at least 5 characters")
// }
// // if password and confirm password are not same then we will use this condtions.
// else if(password !== Confirmpassword){
//     alert("passwords are not matching")
// }
// // if both are true then else console will be executed.
// else{

//     console.log(data)
// }
// }

// return(

//     <div>
//         <center>

// <form onSubmit={submitHandler}>

//     <input type="text" name="username" value = {username}  onChange={changeHandler} placeholder="username"/> <br />


//     <input type="email" name="Email" value={Email} onChange={changeHandler} placeholder="Email"/> <br />

//     <input type="password" name="password" value={password} onChange={changeHandler} placeholder="password"/> <br />

//     <input type="password" name="Confirmpassword" value={Confirmpassword} onChange={changeHandler} placeholder="Confirmpassword"/> <br />



// {password !== Confirmpassword ? <p style={{color:"red"}}>passwords not matching</p>:null }
//     <input type="submit" name = "submit" />
// </form>

//         </center>
//     </div>
// )
// }
// export default FormValidation






// ------- 32) Firebase signup Form ------


// EX16: 
// ANS:



// 1) username should be at least 5 characters.
// 2) password and Confirmpassword should be same.



// import React, { useState } from "react";
// import axios from "axios";

// const App = ()=>{
// const [data,setData] = useState({

//     Email: "",
//     username: "",
//     password: "",
//     Confirmpassword:"",
// })

// const {Email,username,password,Confirmpassword} = data;

// const changeHandler = (e)=>{

//     setData({...data,[e.target.name]:e.target.value})
// } 

// const submitHandler = (e)=>{
//     e.preventDefault();
    
//     axios.post('https://formvalidation-ec5f6-default-rtdb.firebaseio.com/register.json',data).then(()=> alert("submitted successfully"))
//     .catch(()=>{

//         alert("something wrong")
//     })

// if (username.length <5){
//     alert("username should be at least 5 characters")
// }
// // if password and confirm password are not same then we will use this condtions.
// else if(password !== Confirmpassword){
//     alert("passwords are not matching")
// }
// // if both are true then else console will be executed.
// else{

//     console.log(data)
// }
// }

// return(

//     <div>
//         <center>

// <form onSubmit={submitHandler}>

//     <input type="text" name="username" value = {username}  onChange={changeHandler} placeholder="username"/> <br />

//     <input type="email" name="Email" value={Email} onChange={changeHandler} placeholder="Email"/> <br />

//     <input type="password" name="password" value={password} onChange={changeHandler} placeholder="password"/> <br />

//     <input type="password" name="Confirmpassword" value={Confirmpassword} onChange={changeHandler} placeholder="Confirmpassword"/> <br />

// {password !== Confirmpassword ? <p style={{color:"red"}}>passwords not matching</p>:null }
//     <input type="submit" name = "submit" />
// </form>

//         </center>
//     </div>
// )
// }
// export default App





// -------- 33) Create Calculator  --------


// EX23: 
// ANS:    



// import Calculator from "./Components/Calculator";

// const App = ()=>{

//     return(
//         <div>
//             <Calculator/>
//         </div>
//     )
// }
// export default App







// ----- Below one is not important ------

// ----- 34) MapFunction in Reactjs -----


// EX11: 
// ANS: 
// a) Array of Values., AND 
// b) Array of Objects

// a) Array of Values., 

// ANS: 
// 1) Array of Values along with index values., printing <li> values using []Array of values in React js
// 2) key = {index}  it is using for remove errors from console it is not mandatory. 




// import React from "react"
// const Mapfunction =()=>{

// const arr = ["react js","node js", "express js", "angular js"];

//     return(
// <div>
//      {
//   arr.map((value,index) => 
// < li key = {index}> {value}{index} </li>
//     )
//       }
//   </div>
//  )
// }
// export default  Mapfunction


// ----------------------------------------- 


// b) Array of Objects,

// EX12: 
// ANS: 

// 1) Array of objects along with index values., printing <li> values using []Array of Objects in React js
// 2) instead of {value.title} {index}., we can use {value.id} {index} only we will get id digits along with index values. 




// import React from "react"

// const Mapfunction =()=>{

// const arr = [

//     {
//       id:1,
//       title: "react-js",
//     },
//     {
//          id:2,
//         title: "angular-js",
//     },
//     {
//         id:3,
//         title: "express-js", 
//     },
//     {
//         id:4,
//         title: "node-js", 
//     }
// ];

//     return(

//       <div>
//   {

// arr.map((id,index) => 
// < li key = {index}> {id.title} {index} </li>
//  )
//  }
//   </div>
//  )
// }
// export default  Mapfunction





// ----------- COMPLETED ------------ 

