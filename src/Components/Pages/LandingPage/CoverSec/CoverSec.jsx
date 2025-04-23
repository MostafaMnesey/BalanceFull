import coverBg from '../../../../assets/Cover.png';

export default function CoverSec() {
  return (
    <section className="relative w-full h-screen " id='/'>
      {/* Background Image */}
      <img
        src={coverBg}
        alt="cover"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mainColor/70 to-mainColor/70 z-10"></div>

      {/* Content on top of overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
          Your First Step Toward a New Life
        </h1>
        <p className="max-w-2xl text-base md:text-lg mb-6 font-poppins">
          We’re here to support you every step of the way. Comprehensive treatment programs, professional counseling, and personalized recovery plans – just for you.
        </p>
        <button className="bg-subColor hover:bg-hoverSubColor transition px-6 py-3 rounded-full text-textColor font-poppins font-semibold text-sm md:text-base">
          Start Your Journey Now
        </button>
      </div>
    </section>
  );
}
