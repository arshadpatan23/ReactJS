



// ------------ useContext() ----------------- 

// source: Yoshita Jain - YouTube

// e) 
// EX4: 

// ANS: in useContext (hook) we will not use <Consumer> but at same time we will use <Provider> ., Here we are not used <Consumer>




import React, { Fragment } from "react"
import { useContext } from "react"
import { FirstName,Age } from "../../App";

const UseContext3 =()=>{ 

const Name = useContext(FirstName);
const Ages = useContext(Age);

    return(

  <Fragment>
  <h1>my name is {Name} and age is {Ages} </h1>
  </Fragment>
    )
}
export default UseContext3