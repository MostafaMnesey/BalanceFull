import doc1 from "../../../../assets/Ellipse 1506.png";
import doc2 from "../../../../assets/Ellipse 1507.png";
import doc3 from "../../../../assets/Ellipse 1508.png";
import doc4 from "../../../../assets/Ellipse 1509.png";
import doc5 from "../../../../assets/Ellipse 1510.png";
import doc6 from "../../../../assets/Ellipse 1511.png";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import GallarySec from "../GallarySec/GallarySec";
import { a, button } from "motion/react-client";

export default function TopDoc({ data }) {


  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    dots: false,
    arrows: false,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-20" id="experts">
      <div className="container">
        <div className="bg-gray-100 overflow-hidden py-6 pl-6">
          <h2 className="text-center text-3xl font-poppins font-bold mb-2">
            Top Rated Doctors
          </h2>
          <p className="text-center text-sm font-poppins font-medium mb-5">
            Meet our highest-rated physicians
          </p>
          <div className="slider-container w-full">
            <Slider {...settings}>
              {data.map((doc, index) => (
                <div key={index} className="flex gap-2 px-1">
                  <div className="w-full bg-[#ECF9F8] rounded-lg shadow-sm flex flex-col items-center p-4">
                    <div className="overflow-hidden flex justify-center items-center mb-3">
                      <img
                        className="w-28 h-28 rounded-full border-[0.5px] border-[#7E53FD] "
                        src={`https://beige-wildcat-74200.zap.cloud${doc.Image}`}
                        alt={doc.FirstName}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h5 className="text-base font-semibold text-gray-800 mb-1">
                        Dr. {doc.FirstName} {doc.LastName}
                      </h5>
                      <div className="flex items-center gap-1 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-800 text-sm font-semibold">
                          {doc.Rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <GallarySec />
    </section>
  );
}
