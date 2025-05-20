import errPop from "../../../../../assets/images/avatars/undraw_page-not-found_6wni 1.png";
export default function ErrPopUp({onClose,title}) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-8 relative   ">
               <button
              onClick={() => {
                onClose();
              }}
              className="absolute top-4  right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          <div className="w-full  ">
            <div className="  bg-white shadow-lg p-6 rounded-2xl">
              <div className="flex flex-col gap-6  ">
                <div className="flex flex-col items-center justify-center gap-6 ">
                  <h2 className="text-6xl font-bold font-poppins text-center capitalize text-[#FF0000]">
                    error!
                  </h2>

                  <img src={errPop} alt="errPop" className=" object-fill" />
                  <p className="text-[#676767] font-medium">
                   {title}
                  </p>
                  <button
                  onClick={onClose}
                  className="capitalize bg-[#FF0000] w-full rounded-md p-4 text-white font-medium transition-all hover:bg-red-600">
                    try again{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
