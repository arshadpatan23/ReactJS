


// ------------- Context API ------------- 


// Source:  YouTube - Yoshirta jain

// c) 
// EX4: 
// ANS: 

import React  from "react";
import { FirstName,Age } from "../../App";

const Context3 = ()=>{
    return(

        <FirstName.Consumer>
         {
          
            (FirstName)=>{

                return(

                    <Age.Consumer>
                   {
                          (Age)=>{

                            return(
 
      <h1>My neme is {FirstName} and Age is {Age} </h1>
                            )
                          }
                   }
                 </Age.Consumer>      
                )
            }
         }
         </FirstName.Consumer>
    )
}
export default Context3



