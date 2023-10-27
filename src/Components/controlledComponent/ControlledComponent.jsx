


// EX34: 
// ANS: Here onChange = {} event Handler nothing but callback., we are passing inside of input.




import React  from "react";

const ControlledComponent = (Props)=>{

    return(

        <div>
<input type="text" onChange={Props.output} />
        </div>
    )
}
export default ControlledComponent