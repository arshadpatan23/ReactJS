

// -------- 5) Inline_CSS in Reactjs --------


// EX6: 
// ANS: 

// 1) Inline css is mainly using for particular tag with "Style" Attribute.

// 2) The inline css properties should be written inside an expression in the form of "Object".




import React from "react";
const InLineCSS = ()=>{

  return(
 <div>

<h1 style={{color:"white",backgroundColor:"black",height:"90px",width:"100%",border:"1px solid red",justifyContent: "center",display:"flex",alignItems:"center"}}>

    Hello world
 </h1>
</div>
 )
}
export default InLineCSS



