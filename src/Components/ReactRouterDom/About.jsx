
// b) 


// ---------- 20) React Router -----------

// source : Thapa Technical - youtube

// EX21:
// ANS:

// --------- 1) Page Component ----------


// ANS: if we enter on browser /about automatically contact page will shows.



// import React  from "react";

// const About =()=>{
//     return(
//         <div>
//             <h1>Welcome to About page</h1>
//         </div>
//     )
// }
// export default About




// // --------- 2) Link Component ----------


// b)
// ANS: *** Here if we click on aboutpage name it will navigates to the aboutpage.




// import React  from "react";
// import LinkComponent from "./LinkComponent";

// const About =()=>{

//  return(

//  <div>
// <LinkComponent/>

//  <h1>Finally, My ABOUT Page</h1>
//  <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi delectus ut sapiente repellat illo accusamus rem nemo dolor consectetur porro ratione quaerat impedit officiis voluptatem autem dignissimos, modi quis! </h5>
// </div>
  
//     )
// }
// export default About




// --------- 3) NavLink Component ----------

// b) 

import React  from "react";
import LinkComponent from "./LinkComponent";

const About =()=>{

    return(
        <>
    <div>
         <LinkComponent/>
         <h1>About Page</h1>
    </div>
       </>
    )
}
export default About