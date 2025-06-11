import React from "react";
import { Link } from "react-router-dom";
function Mainpage3() {
    return (
        <div className="mx-auto w-full px-4 sm:px-12 lg:px-32">
            {/* Title Section */}
            <div className="flex items-center justify-center flex-col my-14">
                <h1 className="text-4xl text-cyan-800 font-bold text-center">Our Services</h1>
                <p className="text-center max-w-2xl mt-2">
                    A hospital isn’t just a place to heal — it’s a bridge between life and hope. PulseBridge turns that bridge into a high-speed, tech-enabled lifeline.
                </p>
            </div>

            {/* Service 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10 my-16">
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img className="rounded-lg max-w-full h-auto" src="/src/assets/bed.jpg" alt="Bed Management" />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl text-cyan-800 font-semibold mb-2">Bed Management</h2>
                    <p className="text-lg mb-4">
                        Our system monitors real-time bed availability and automates patient allocation, ensuring immediate response during emergencies such as deliveries or accidents—minimizing delays and maximizing critical care efficiency.
                    </p>
                    <Link
                        className="inline-flex text-white  mr-110 items-center mt-2 px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                        to="/"
                    >
                        &nbsp; Explore More
                    </Link>
                </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col sm:flex-row-reverse items-center justify-between gap-10 my-16">
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img className="rounded-lg max-w-full h-auto" src="/src/assets/ambulance.jpg" alt="Live Ambulance Locator" />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl text-cyan-800 font-semibold mb-2">Live Ambulance Locator</h2>
                    <p className="text-lg mb-4">
                        Every second counts in emergencies. PulseBridge connects users with live ambulance tracking through GPS, allowing them to monitor the location and ETA of incoming ambulances. No more blind waiting or repeated calls — just open the app and see exactly when help will arrive. For dispatchers and hospitals, this also enables better preparation and coordination.
                    </p>
                    <Link
                        className="inline-flex mr-110 text-white items-center mt-2 px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                        to="/"
                    >
                        &nbsp; Explore More
                    </Link>
                </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10 my-16">
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img className="rounded-lg max-w-full h-auto" src="/src/assets/ai.jpg" alt="AI-Based Hospital Recommendations" />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl text-cyan-800 font-semibold mb-2">AI-Based Hospital Recommendations</h2>
                    <p className="text-lg mb-4">
                        When every second matters, choosing the nearest hospital isn’t always the best option. PulseBridge’s AI engine considers live data such as current crowd levels, facility capabilities, available beds, and even the nature of the emergency. It then recommends the most suitable hospital based on urgency and treatment compatibility.
                    </p>
                    <Link
                        className="inline-flex mr-110 text-white items-center mt-2 px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                        to="/"
                    >
                        &nbsp; Explore More
                    </Link>
                </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col sm:flex-row-reverse items-center justify-between gap-10 my-16">
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img className="rounded-lg max-w-full h-auto" src="/src/assets/5g.jpg" alt="Next-Gen 5G Medical Communication" />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl text-cyan-800 font-semibold mb-2">Next-Gen 5G Medical Communication</h2>
                    <p className="text-lg mb-4">
                        Ambulances equipped with PulseBridge can transmit real-time patient vitals (like heart rate, blood pressure, and oxygen levels) to the receiving hospital over ultra-fast 5G networks. This allows ER teams to prep before the patient arrives — setting up machines, prepping doctors, and even calling specialists in advance.
                    </p>
                    <Link
  className="inline-flex text-white items-center mt-2 mr-110 px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
  to="/"
>
  &nbsp; Explore More
</Link>
                </div>
            </div>
        </div>
    );
}
export default Mainpage3;