import React from 'react';
import { img100, img101, img102, img103 } from '../../imports';

const steps = [
    {
        icon: img100,
        title: 'Initial Consultation',
        description: 'We discuss your cleaning needs and expectations in detail to ensure we understand your specific requirements.',
    },
    {
        icon: img102,
        title: 'Customized Cleaning Plan',
        description: 'A personalized cleaning plan is created, tailored specifically to your home or office.',
    },
    {
        icon: img103,
        title: 'Thorough Cleaning Execution',
        description: 'Our experienced team executes the plan with meticulous attention to detail, leaving your space spotless.',
    },
    {
        icon: img101,
        title: 'Final Inspection & Feedback',
        description: 'We conduct a final walk-through to ensure your complete satisfaction and welcome any feedback you may have.',
    },
];

const Process = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl text-indigo-600 font-semibold tracking-wide">Our Process</h2>
                    <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900">
                        A Simple Path to a Spotless Space
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We follow a clear, four-step process to ensure a consistent and high-quality cleaning experience every time.
                    </p>
                </div>

                {/* Two per row for all screen sizes */}
                <div className="grid grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center"
                        >
                            <img
                                src={step.icon}
                                alt={step.title}
                                className=" mx-auto mb-4 object-contain"
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
