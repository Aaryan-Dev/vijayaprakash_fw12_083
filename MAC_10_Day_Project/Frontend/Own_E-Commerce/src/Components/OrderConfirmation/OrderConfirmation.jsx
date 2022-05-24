import React from "react";

export const OrderConfirmation = () => {
  return <div>OrderConfirmation</div>;
};

// import React, { useEffect, useState } from "react";
// import "./OrderConfirmation.css";
// import { BarLoader } from "react-spinners";
// import { NavBar } from "../NavBar/NavBar";
// import { Footer } from "../Footer/Footer";

// export const OrderConfirmation = () => {
//   const [orderStatus, setOrderStatus] = useState(false);
//   console.log("orderStatus:", orderStatus);

//   useEffect(() => {
//     setTimeout(() => {
//       setOrderStatus(true);
//     }, 5000);
//   }, []);

//   return (
//     <div>
//       <div>
//         <NavBar />
//       </div>
//       <div>{orderStatus ? <p>1234</p> : <BarLoader />}</div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };
