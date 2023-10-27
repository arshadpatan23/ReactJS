
// EX1: 
// ANS: Here this.props key word should be used., Here we are receiving parent data with 'output' variable.



// import React from "react"
// import { Component } from "react"

// class ClassBased extends Component{

//     render(){
//         return(
//      <div>
//  <h1> welcome to {this.props.output}</h1>   
//       </div>
//         )
//     }
// }
// export default ClassBased



// --------------------------------------- 


// EX2: 
// ANS: 




// b) 
// EX4: 
// ANS: Here this.props key word should be used., Here we are receiving parent data with 'output' variable.



import React from "react"
import { Component } from "react"

class ClassBased extends Component{

    render(){
        return(
     <div>
 <h1>{this.props.output}</h1>   
      </div>
        )
    }
}
export default ClassBased