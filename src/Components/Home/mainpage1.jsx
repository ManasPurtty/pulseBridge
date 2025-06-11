import React from "react";
import { Link } from "react-router-dom";
function Mainpage1() {
return(
<>
 <div className="mx-auto w-full max-w-8xl  bg-cover bg-center"
 >
    <div
          className="absolute top-0 right-0 h-full w-56 bg-cover bg-no-repeat z-10"
          style={{ backgroundImage: "url('/src/assets/Decore.png')" }}
        ></div>
    <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: "url('/src/assets/medi1.jpg')" }}
        ></div>
        
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                           YOUR HEALTH<br></br>OUR PRIORITY
                            <span className="hidden sm:block text-xl">Our system monitors real-time bed availability and automates patient allocation, ensuring immediate response during emergencies such as deliveries or accidents—minimizing delays and maximizing critical care efficiency.</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            
                            &nbsp; Explore More
                        </Link>
                    </div>
                </div>

                <div className="absolute w- inset-0 w-full sm:my sm:pt-1 pt-12 h-full">
                    <img className="w-150" src="src/assets/svg.png" alt="image1" />
                </div>
            </aside>

           

        </div>
</>
);
}
export default Mainpage1;