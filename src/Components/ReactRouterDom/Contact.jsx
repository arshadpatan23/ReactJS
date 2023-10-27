
// c) 

// ---------- 20) React Router -----------

// source : Thapa Technical - youtube


// -------- 1) Page component ------------- 

// EX21:

// ANS: if we enter on browser /contact  automatically contact page will shows.



// import React  from "react";

// const Contact =()=>{
//     return(
//         <div>
//             <h1>Welcome to Contact page</h1>
//         </div>
//     )
// }
// export default Contact




// // --------- 2) Link Component ----------


// ANS: *** Here if we click on contactpage name it will navigates to the Contactpage.




// import React  from "react";
// import LinkComponent from "./LinkComponent";

// const Contact =()=>{

// return(

// <div>
// <LinkComponent/>

//   <h1>Finally, My CONTACT Page</h1>
//   <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi delectus ut sapiente repellat illo accusamus rem nemo dolor consectetur porro ratione quaerat impedit officiis voluptatem autem dignissimos, modi quis! </h5>
// </div>

// )
// }
// export default Contact





// --------- 3) NavLink Component ----------



import React  from "react";
import LinkComponent from "./LinkComponent";

const Contact =()=>{
    return(
        
<>
        <div>
<LinkComponent/>
<h1>Contact Page</h1>
       </div>
</>
    )
}
export default Contact
