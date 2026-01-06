import video1 from '@/videos/video1.mp4';
import video2 from '@/videos/video2.mp4';
import video3 from '@/videos/video3.mp4';
import images from '@/assets/image';

function Home() {
    return (
        <div>
            <div
                className="w-full relative max-h-[100vh] overflow-y-scroll
            snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden
            pe-[calc(var(--feed-nav-button-width)+1rem)]"
            >
                <article
                    className="ps-[1rem] pe-[calc(15rem - (var(--feed-nav-button-width) * 2) - 1rem)]
                                     h-[100vh] relative flex flex-row justify-center items-center gap-[1rem]
                                     p-[1rem] pr-[8rem] p-block-[1rem] my-0 mx-auto snap-start"
                >
                    <div className="h-max flex flex-row grow items-end justify-center gap-[1rem]">
                        <section className="cursor-pointer relative group">
                            <div className="relative">
                                <video src={video1} className="rounded-xl h-[96vh] z-[1]" controls />
                            </div>
                            <div
                                className="absolute inset-0 flex flex-col justify-between
                            rounded-xl pointer-events-none"
                            >
                                <div
                                    className="grow-0 shrink-1 flex flex-row justify-between items-center
                                pt-[0.5rem] px-[0.5rem] rounded-t-[1rem] text-white text-[18px] opacity-0 group-hover:opacity-100
                                transition-opacity duration-200"
                                >
                                    <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                                        <i className="fa-solid fa-volume-high "></i>
                                        <i className="fa-solid fa-volume-low !hidden"></i>
                                        <i className="fa-solid fa-volume-xmark !hidden"></i>
                                    </div>
                                    <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                {/* <div>
                                    description
                                </div> */}
                            </div>
                            {/* <div>thanh video</div> */}
                        </section>
                        <section className="flex flex-col gap-[0.5rem] w-[48px]">
                            <div className="relative cursor-pointer mb-[1rem]">
                                <img className=" rounded-full" src={images.avatar} alt="" />
                                <div className="absolute bottom-[-0.5rem] right-[0.75rem] w-[24px] h-[24px] bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-plus text-white text-[12px]"></i>
                                </div>
                            </div>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-heart text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">50.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-comment-dots text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">33.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-bookmark text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">33.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-share text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">7737</p>
                            </button>
                            <a href="">
                                <img className=" rounded-full" src={images.avatar} alt="" />
                            </a>
                        </section>
                    </div>
                </article>

                <article
                    className="ps-[1rem] pe-[calc(15rem - (var(--feed-nav-button-width) * 2) - 1rem)]
                                     h-[100vh] relative flex flex-row justify-center items-center gap-[1rem]
                                     p-[1rem] pr-[8rem] p-block-[1rem] my-0 mx-auto snap-start"
                >
                    <div className="h-max flex flex-row grow items-end justify-center gap-[1rem]">
                        <section className="cursor-pointer relative group">
                            <div className="relative">
                                <video src={video2} className="rounded-xl h-[96vh] z-[1]" controls />
                            </div>
                            <div
                                className="absolute inset-0 flex flex-col justify-between
                            rounded-xl pointer-events-none"
                            >
                                <div
                                    className="grow-0 shrink-1 flex flex-row justify-between items-center
                                pt-[0.5rem] px-[0.5rem] rounded-t-[1rem] text-white text-[18px] opacity-0 group-hover:opacity-100
                                transition-opacity duration-200"
                                >
                                    <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                                        <i className="fa-solid fa-volume-high "></i>
                                        <i className="fa-solid fa-volume-low !hidden"></i>
                                        <i className="fa-solid fa-volume-xmark !hidden"></i>
                                    </div>
                                    <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                {/* <div>
                                    description
                                </div> */}
                            </div>
                            {/* <div>thanh video</div> */}
                        </section>
                        <section className="flex flex-col gap-[0.5rem] w-[48px]">
                            <div className="relative cursor-pointer mb-[1rem]">
                                <img className=" rounded-full" src={images.avatar} alt="" />
                                <div className="absolute bottom-[-0.5rem] right-[0.75rem] w-[24px] h-[24px] bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-plus text-white text-[12px]"></i>
                                </div>
                            </div>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-heart text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">50.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-comment-dots text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">33.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-bookmark text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">33.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-share text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">7737</p>
                            </button>
                            <a href="">
                                <img className=" rounded-full" src={images.avatar} alt="" />
                            </a>
                        </section>
                    </div>
                </article>

                <article
                    className="ps-[1rem] pe-[calc(15rem - (var(--feed-nav-button-width) * 2) - 1rem)]
                                     h-[100vh] relative flex flex-row justify-center items-center gap-[1rem]
                                     p-[1rem] pr-[8rem] p-block-[1rem] my-0 mx-auto snap-start"
                >
                    <div className="h-max flex flex-row grow items-end justify-center gap-[1rem]">
                        <section className="cursor-pointer relative group">
                            <div className="relative">
                                <video src={video3} className="rounded-xl h-[96vh] z-[1]" controls />
                            </div>
                            <div
                                className="absolute inset-0 flex flex-col justify-between
                            rounded-xl pointer-events-none"
                            >
                                <div
                                    className="grow-0 shrink-1 flex flex-row justify-between items-center
                                pt-[0.5rem] px-[0.5rem] rounded-t-[1rem] text-white text-[18px] opacity-0 group-hover:opacity-100
                                transition-opacity duration-200"
                                >
                                    <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                                        <i className="fa-solid fa-volume-high "></i>
                                        <i className="fa-solid fa-volume-low !hidden"></i>
                                        <i className="fa-solid fa-volume-xmark !hidden"></i>
                                    </div>
                                    <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                {/* <div>
                                    description
                                </div> */}
                            </div>
                            {/* <div>thanh video</div> */}
                        </section>
                        <section className="flex flex-col gap-[0.5rem] w-[48px]">
                            <div className="relative cursor-pointer mb-[1rem]">
                                <img className=" rounded-full" src={images.avatar} alt="" />
                                <div className="absolute bottom-[-0.5rem] right-[0.75rem] w-[24px] h-[24px] bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-plus text-white text-[12px]"></i>
                                </div>
                            </div>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-heart text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">50.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-comment-dots text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">33.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-bookmark text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">33.7K</p>
                            </button>
                            <button className="flex flex-col items-center">
                                <div
                                    className="w-[48px] h-[48px] flex items-center justify-center
                                bg-gray-200 rounded-full mb-[0.5rem]"
                                >
                                    <i className="fa-solid fa-share text-[20px]"></i>
                                </div>
                                <p className="text-[12px] text-gray-600 font-semibold">7737</p>
                            </button>
                            <a href="">
                                <img className=" rounded-full" src={images.avatar} alt="" />
                            </a>
                        </section>
                    </div>
                </article>
            </div>
            <aside className="">
                <div className="absolute w-[48px] top-[19rem] right-[1rem] flex flex-col gap-[1rem] ">
                    <div className="bg-gray-200 w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-300">
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                    <div className="bg-gray-200 w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-300">
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Home;
