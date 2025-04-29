import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import commCard1 from '../../../../assets/images/commCard1.svg';
import commCard2 from '../../../../assets/images/commCard2.svg';

export default function CommCards() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const commCardData = [
    {
      image: commCard1,
      title: 'Weekly Challenge',
      content: 'Share something that helped you stay away from triggers this week. *Post in the group and support others with your ideas!*',
    },
    {
      image: commCard2,
      title: 'Join the Community Chat',
      content: "You're not alone on this journey. Join the group chat to connect, share, and support each other.",
      btnTxt: 'Join Chat',
    },
  ];

  const handleJoinChatClick = () => {
    setLoading(true); 
    setTimeout(() => {
      navigate('/chat'); 
    }, 1000);
  };

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-white border-t-mainColor"></div>
        </div>
      )}

      <section className="mt-20">
        <div className="container flex flex-wrap gap-6 justify-center">
          {commCardData.map((card, index) => (
            <div
              key={index}
              className="group px-8 py-6 bg-[#F5F5F5] flex flex-col items-center rounded-lg shadow-sm md:flex-row md:max-w-xl transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div>
              <img
                className="object-fit w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={card.image}
                alt={card.title}
              />

              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900">
                  {card.title}
                </h5>
                <p className="mb-3 font-normal text-sm text-[#696969] dark:text-[#696969]">
                  {card.content}
                </p>
                <div className="flex justify-end">
                  {card.btnTxt ? (
                    <button
                      onClick={handleJoinChatClick}
                      className="bg-mainColor py-3 px-7 rounded-lg text-white text-md font-medium transition-all duration-300 group-hover:bg-white group-hover:text-mainColor group-hover:border group-hover:border-3 group-hover:border-mainColor"
                    >
                      {card.btnTxt}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
