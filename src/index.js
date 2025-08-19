import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
// function Test() {
//   const [moiveRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating color="red" maxStar={10} onSetRating={setMovieRating} />
//       <p>This moive is rated {moiveRating} star from the realase date</p>
//     </>
//   );
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxStar={5}
      message={["worst", "bad", "avg", "Good", "Amazing"]}
    />
    <StarRating color="blue" size={100} maxStar={3} defaultRating={2} />
    <Test /> */}
  </React.StrictMode>
);
