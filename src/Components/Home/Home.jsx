import React from "react";
import { Link } from "react-router-dom";
import Mainpage1 from "./mainpage1";
import Mainpage2 from "./Mainpage2";
import Mainpage3 from "./Mainpage3";
import HowItWorks from "./HowItWORKS.JSX";
import CustomerReviews from "./CustomerReviews.jsx";
import ContactOptions from "./ContactOptions.jsx";
function Home() {
return(
<>
 <Mainpage1/>
    <Mainpage2/>
    <Mainpage3/>
    <HowItWorks/>
    <CustomerReviews/>
    <ContactOptions/>
</>
);
}
export default Home;