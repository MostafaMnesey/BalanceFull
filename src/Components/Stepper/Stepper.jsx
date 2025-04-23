import { HiCheck } from "react-icons/hi";

const steps = [
  { number: 1, label: "Personal Details" },
  { number: 2, label: "Password" },
  { number: 3, label: "Gender" },
  { number: 4, label: "Avatar" },
];

export default function Stepper({ currentStep }) {
  return (
    <div className="w-full  p-6 rounded-md">
        <p className="text-[#1B514F] text-xl font-bold mb-5 font-poppins">Your Journey Begins Here</p>
      <ol className="relative border-l-2 border-white">
        {steps.map((step, index) => {
          const isActive = currentStep === step.number;
          const isDone = currentStep > step.number;

          return (
            <li key={step.number} className="mb-10 ml-6">
              <span className={`absolute flex items-center justify-center w-6 h-6 ${isDone ? "bg-[#1B514F]" : "bg-white"} text-white  rounded-full -left-3`}>
                {isDone ? (
                  <HiCheck className="text-bluee" />
                ) : (
                  <span className={`text-sm font-bold text-bluee`} >
                    {String(step.number).padStart(2, "0")}
                  </span>
                )}
              </span>
              <h3
                className={`font-medium font-poppins text-base leading-tight ${
                  isDone ? "text-[#1B514F] font-bold" : "text-white"
                }`}
              >
                {step.label}
              </h3>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
