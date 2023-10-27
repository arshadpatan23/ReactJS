 

 

// -------- 20) React Router --------

// source : Thapa Technical - youtube



// -------- 2) Link Component --------------- 


// d) 
 
// EX21:
// ANS:  

// 1) This { Link }  component values we are transfering to remaining componets such as, Home,About,Contact instead of writing in each component directly we are written all component values in this component.

// 2) after that This component name "Header" we are importing in remaining components for accessing this component.

// 3) And we are printing output in the form of <unorderlist> and <li> formate.




// import { Link } from "react-router-dom";

// const LinkComponent = ()=>{
//     return(
// <div>
//     <ul>
// <li><Link to = "/"> Home page </Link></li>
// <li><Link to = "/about"> About page </Link></li>
// <li><Link to = "/contact"> Contact page </Link></li>
//     </ul>
//     </div>
//     )
// }
// export default LinkComponent






// --------- 3) NavLink Component ----------


// d) 

// EX21:
// ANS:  

// 1) This { NavLink }  component values we are transfering to remaining componets such as, Home,About,Contact instead of writing in each component directly we are written all component values in this component.

// 2) after that This component name "Header" we are importing in remaining components for accessing this component.





import { NavLink } from "react-router-dom";

const LinkComponent = ()=>{
    return(
   
<div>
    <ul>
<li><NavLink to = "/"> Home page </NavLink></li>
<li><NavLink to = "/about"> About page </NavLink></li>
<li><NavLink to = "/contact"> Contact page </NavLink></li>
    </ul>
       </div>
     
    )
}
export default LinkComponent