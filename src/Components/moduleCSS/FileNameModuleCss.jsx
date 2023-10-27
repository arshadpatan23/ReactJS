

// EX5: 
// ANS:  

// 1) import Style from "./css1.module.css" in css file first letter should be starts with small letter., that is filename.module.css

// 2) For every component we will create seperate CSS file that is rule of module.css concept.



import React from "react";
import Style from './filename.module.css'

const ModuleDotcss = ()=>{

    return (
    <div>
 <h1 className={Style.CSScontainer}>hello world !!</h1>
    </div>
    )
}
export default ModuleDotcss