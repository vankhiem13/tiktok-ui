import video1 from '@/videos/video1.mp4';
import video2 from '@/videos/video2.mp4';
import video3 from '@/videos/video3.mp4';

function Home() {
    return (
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
                    <section className="cursor-pointer relative">
                        <div className="relative">
                            <video src={video1} className="rounded-xl h-[96vh] z-[1]" controls />
                        </div>

                        <div
                            className="absolute inset-0 flex flex-col justify-between
                        rounded-xl pointer-events-none"
                        >
                            <div
                                className="grow-0 shrink-1 flex flex-row justify-between items-center
                            pt-[0.5rem] px-[0.5rem] rounded-t-[1rem] text-white text-[18px] "
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

                            <div></div>
                        </div>

                        <div></div>
                    </section>

                    <section>action bar container</section>
                </div>
            </article>

            
        </div>
    );
}

export default Home;
