import doc1 from "../../../../assets/Ellipse 1506.png";
import doc2 from "../../../../assets/Ellipse 1507.png";
import doc3 from "../../../../assets/Ellipse 1508.png";
import doc4 from "../../../../assets/Ellipse 1509.png";
import doc5 from "../../../../assets/Ellipse 1510.png";
import doc6 from "../../../../assets/Ellipse 1511.png";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

export default function TopDoc() {
  const topDocData = [
    { img: doc1, name: "DR. Sami yasser", rating: 4.9 },
    { img: doc2, name: "DR. Mohamed Ali", rating: 4.9 },
    { img: doc3, name: "Dr khalid ahmed", rating: 4.7 },
    { img: doc4, name: "Dr. Sarah Johnson", rating: 4.9 },
    { img: doc5, name: "DR. Anna Smith", rating: 4.9 },
    { img: doc6, name: "Dr. Michael Brown", rating: 4.9 },
    { img: doc1, name: "DR. Emily Davis", rating: 4.9 },
    { img: doc1, name: "DR. Sami yasser", rating: 4.9 },
    { img: doc2, name: "DR. Mohamed Ali", rating: 4.9 },
    { img: doc3, name: "Dr khalid ahmed", rating: 4.7 },
    { img: doc4, name: "Dr. Sarah Johnson", rating: 4.9 },
    { img: doc5, name: "DR. Anna Smith", rating: 4.9 },
    { img: doc6, name: "Dr. Michael Brown", rating: 4.9 },
    { img: doc1, name: "DR. Emily Davis", rating: 4.9 },
  ];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
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
    <section className="mt-20">
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
              {topDocData.map((doc, index) => (
                <div key={index} className="flex gap-2 px-1">
                  <div className="w-10/12 bg-blue-50 rounded-lg shadow-sm">
                    <div className="overflow-hidden rounded-t-lg">
                      <img
                        className="p-8 rounded-t-lg object-cover w-full h-full"
                        src={doc.img}
                        alt={doc.name}
                      />
                    </div>
                    <div className="px-5 pb-5 flex flex-col items-center justify-center">
                      <h5 className="text-sm font-semibold tracking-tight text-black-500">
                        {doc.name}
                      </h5>
                      <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center justify-center gap-1">
                          <FaStar className="text-subColor" />
                          <span className="text-black-500 text-xs font-semibold">
                            {doc.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
