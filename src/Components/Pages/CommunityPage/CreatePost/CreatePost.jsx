import gallerySvg from '../../../../assets/images/gallery.svg'
import videoSvg from '../../../../assets/images/video-play.svg'
export default function CreatePost() {
    return <>
        <section className='mt-28 '>
            <div className="container">
                <div className=" flex  gap-4">
                    <form className="w-[80%]">
                        <div className="relative">
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-[100px] bg-[#F5F5F5] focus:outline-none"
                                placeholder="What’s in your mind"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute inset-y-0 end-8 flex items-center ps-3 cursor-pointer"
                            >

                            </button>
                        </div>
                    </form>



                    <div className="flex justify-center items-center gap-5">
                        <button>
                            <img
                                src={gallerySvg}
                                alt="gallerySvg"
                                className="transition-transform transform hover:scale-110"
                            />
                        </button>
                        <button>
                            <img
                                src={videoSvg}
                                alt="videoSvg"
                                className="transition-transform transform hover:scale-110"
                            />
                        </button>
                    </div>



                </div>
            </div>

        </section>
    </>
}
