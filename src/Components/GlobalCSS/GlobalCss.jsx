
// ---- 4)b) Global and External css in Reactjs -----


// EX5:  
// ANS: 

// 1) Global or external css file using for entire react project, it will target all the components.




import React from "react"
import  "./Global.css"

const GlobalCss = ()=>{

    return(
    <div>
 <div className="CSScontainer">
 <h1 className="content">hello world !!</h1>
 </div>
    </div>
    )
}
export default GlobalCss