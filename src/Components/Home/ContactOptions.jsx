import React from 'react';

const contacts = [
  {
    label: 'Call Us',
    value: '955555555',
    icon: '/src/contact/call.png', // Replace with your actual path
  },
  {
    label: 'Text Us',
    value: '9999999999',
    icon: 'src/contact/textus.jpg', // Replace with your actual path
  },
  {
    label: 'Live Chat',
    value: <a href="#" className="text-green-500">Click Here</a>,
    icon: '/src/contact/livechat.jpg', // Replace with your actual path
  },
  {
    label: 'Email Us',
    value: 'pulsebridge.com',
    icon: '/src/contact/email.png', // Replace with your actual path
  },
];

const ContactOptions = () => {
  return (
    <section className="bg-white py-5  px-4 text-center mb-15">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Questions? We have answers!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {contacts.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img src={item.icon} alt={item.label} className="w-10 h-10" />
            <p className="text-lg font-semibold text-slate-800">{item.label}</p>
            <p className="text-gray-600 text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactOptions;
