


// --------- Prop Drilling ---------------- 

// d) 
// EX4: 
// ANS: 


import React  from "react";
import { Fragment } from "react";
import Drilling3 from "./Drilling3";

const Drilling2 = ({Drilling111})=>{

    return(

     <Fragment>
         < Drilling3 Drilling222 = { Drilling111}/>
         </Fragment>
    )
}
export default Drilling2