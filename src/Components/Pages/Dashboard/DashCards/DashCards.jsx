import React from 'react';

export default function DashCards() {
    const dashCardsLis = [
        {
            title: "Total patient",
            value: 25,
            bgColor: "bg-[#C4ECEB]",
        },
        {
            title: "Patients treated",
            value: 30,
            bgColor: "bg-[#FCF3D5]",
        },
        {
            title: "Sessions today",
            value: 3,
            bgColor: "bg-[#C4ECEB]",
        },
        {
            title: "Success rate",
            value: "80%",
            bgColor: "bg-[#FCF3D5]",
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10">
            {dashCardsLis.map((item, index) => (
                <div
                    key={index}
                    className={`h-32 p-6 text-black  rounded-3xl shadow-sm flex flex-col justify-center gap-2 ${item.bgColor} transform transition-all duration-300 ease-in-out hover:-translate-y-2`}
                >
                    <h6 className="text-md font-medium">{item.title}</h6>
                    <p className="text-xl font-semibold mt-2">{item.value}</p>
                </div>
            ))}
        </div>
    );
}
