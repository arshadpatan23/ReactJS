

// ----------- Prop Drilling ---------------- 

// d) 
// EX4: 
// ANS: 


import React  from "react";
import { Fragment } from "react";
import Drilling2 from "./Drilling2";

const Drilling1 = ({AppComponent})=>{

    return(
         <Fragment>
         < Drilling2 Drilling111 =  {AppComponent}/>
         </Fragment>
    )
}
export default Drilling1