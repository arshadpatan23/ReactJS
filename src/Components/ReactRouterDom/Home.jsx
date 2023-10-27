

// ---------- 20) React Router -----------

// source : Thapa Technical - youtube


// EX21:


// --------- 1) URL / Page Component ----------

// a)  

// ANS: if we enter on browser /  automatically Home page will shows.



// import React  from "react";

// const Home =()=>{

//     return(
//       <div>
// <h1>Finally, My Home Page</h1>
//       <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi delectus ut sapiente repellat illo accusamus rem nemo dolor consectetur porro ratione quaerat impedit officiis voluptatem autem dignissimos, modi quis! </h5>
//        </div>
//     )
// }
// export default Home





// --------- 2) Link Component ----------



// a) 
// ANS: *** Here if we click on  Homepage name it will navigates to the Homepage.




// import React  from "react";
// import LinkComponent from "./LinkComponent";

// const Home =()=>{

//        return(
//         <div>
//      < LinkComponent/>
//      <h1>Finally, My Home Page</h1>
//      <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi delectus ut sapiente repellat illo accusamus rem nemo dolor consectetur porro ratione quaerat impedit officiis voluptatem autem dignissimos, modi quis! </h5>
//      </div>
//     )
// }
// export default Home





// --------- 3) NavLink Component -----------

// a) 



import React  from "react";

import LinkComponent from "./LinkComponent";

const Home =()=>{

    return(
    <> 
    <div>
     < LinkComponent/>

     <h1>Finally, My Home Page</h1>
     <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi delectus ut sapiente repellat illo accusamus rem nemo dolor consectetur porro ratione quaerat impedit officiis voluptatem autem dignissimos, modi quis! </h5>

     </div>
      </>
    )
}
export default Home