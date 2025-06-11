import React from 'react';

const steps = [
  {
    id: 1,
    title: "Login ",
    icon: "/src/assets/howitwork/login.png",
    description:
      "Login to our system with all the required details.",
  },
  {
    id: 2,
    title: "Select Services",
    icon: "/src/assets/howitwork/choose.png", 
    description:
      "Choose the plan that you want to get from our services.",
  },
  {
    id: 3,
    title: "Enrroll Online",
    icon: "/src/assets/howitwork/enroll.jpg", 
    description:
      "Book the needed service with our system.",
  },
  {
    id: 4,
    title: "ENjoy Our services",
    icon: "/src/assets/howitwork/enjoy.png", 
    description:
      "Enjoy our services and save your life with PulseBridge.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        How it works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="text-center space-y-4">
            <div className="relative w-16 h-16 mx-auto">
              <img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 rounded-full shadow-md"
              />
              <span className="absolute -top-2 -left-2 bg-white text-blue-600 font-bold rounded-full px-2 py-0.5 text-sm shadow">
                {step.id}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-teal-800 text-white px-6 py-3 rounded hover:bg-teal-900 transition font-semibold">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
