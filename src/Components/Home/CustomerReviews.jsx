import React from 'react';

const reviews = [
  {
    name: 'Kajal',
    location: 'Seattle, WA',
    image: '/src/review/Avatar1.png', // replace with actual image path
    stars: 5,
    text: `Thanks again for your help – I had absolutely no idea how to get this done when I got up this morning. You've made it remarkably easier than I expected. I hope you're not stuck at the office all night...`,
  },
  {
    name: 'Ramesh',
    location: 'Eustis, FL',
    image: '/src/review/Avatar2.png',
    stars: 5,
    text: `I truly appreciate the quick response and will think of you in the future if I need to make any changes to my insurance plans.`,
  },
  {
    name: 'Krishna',
    location: 'Winter Springs, FL',
    image: '/src/review/Avatar3.png',
    stars: 5,
    text: `A million thank you for your prompt attention to all the details concerning this process. You've made it that much easier to enroll.`,
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex justify-center items-center gap-2">
          Customer Reviews
          <span role="img" aria-label="people">👨‍👩‍👧‍👦</span>
        </h2>
        <p className="text-gray-500 mt-2">
          See why over 500,000 users love Cal Health
        </p>

        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow p-6 space-y-4 text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-700">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.location}</p>
            </div>
            <div className="flex justify-center">
              {Array.from({ length: review.stars }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
