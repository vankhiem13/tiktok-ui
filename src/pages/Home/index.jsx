import { useState, useEffect, useRef } from 'react';
import video1 from '@/videos/video1.mp4';
import video2 from '@/videos/video2.mp4';
import video3 from '@/videos/video3.mp4';
import images from '@/assets/image';
import videos from '@/data/videoData';

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const videoRefs = useRef([]);
    const containerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
            const video = entry.target;
        if (!(video instanceof HTMLVideoElement)) return;

        if (entry.isIntersecting) {
        video.play().catch(() => {});
        } else {
        video.pause();
        video.currentTime = 0;
        }
            });
        },
        {
            threshold: 0.6, // video chiếm 60% màn hình mới play
        }
        );

        videoRefs.current.forEach(video => {
        if (video) observer.observe(video);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToVideo = (index) => {
  if (index < 0 || index >= videos.length) return;

  containerRefs.current[index]?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setCurrentIndex(index);
};

    useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo instanceof HTMLVideoElement) {
        firstVideo.play().catch(() => {});
    }
    }, [videos]);

    return (
        <div>
            <div
                className="w-full relative max-h-[100vh] overflow-y-scroll
            snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden
            pe-[calc(var(--feed-nav-button-width)+1rem)]"
            >
            {videos.map((video, index) => (
            <article
                key={video.id}
                ref={el => (containerRefs.current[index] = el)}
                className="ps-[1rem] pe-[calc(15rem - (var(--feed-nav-button-width) * 2) - 1rem)]
                        h-[100vh] relative flex flex-row justify-center items-center gap-[1rem]
                        p-[1rem] pr-[8rem] my-0 mx-auto snap-start"
            >
                <div className="h-max flex flex-row grow items-end justify-center gap-[1rem]">
                
                {/* VIDEO */}
                <section className="cursor-pointer relative group">
                    <div className="relative">
                    <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video.src}
                        className="rounded-xl h-[96vh] z-[1]"
                        controls
                    />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-between rounded-xl pointer-events-none">
                    <div
                        className="flex justify-between items-center pt-[0.5rem] px-[0.5rem]
                                text-white text-[18px] opacity-0 group-hover:opacity-100
                                transition-opacity duration-200"
                    >
                        <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                        <i className="fa-solid fa-volume-high"></i>
                        </div>
                        <div className="h-[3rem] w-[3rem] flex items-center justify-center pointer-events-auto">
                        <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    </div>
                </section>

                {/* ACTION BAR */}
                <section className="flex flex-col gap-[0.5rem] w-[48px]">
                    <div className="relative cursor-pointer mb-[1rem]">
                    <img className="rounded-full" src={video.avatar} />
                    <div className="absolute bottom-[-0.5rem] right-[0.75rem]
                                    w-[24px] h-[24px] bg-[var(--primary-color)]
                                    rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-plus text-white text-[12px]"></i>
                    </div>
                    </div>

                    <button className="flex flex-col items-center">
                    <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-200 rounded-full mb-[0.5rem]">
                        <i className="fa-solid fa-heart text-[20px]"></i>
                    </div>
                    <p className="text-[12px] text-gray-600 font-semibold">{video.likes}</p>
                    </button>

                    <button className="flex flex-col items-center">
                    <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-200 rounded-full mb-[0.5rem]">
                        <i className="fa-solid fa-comment-dots text-[20px]"></i>
                    </div>
                    <p className="text-[12px] text-gray-600 font-semibold">{video.comments}</p>
                    </button>

                    <button className="flex flex-col items-center">
                    <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-200 rounded-full mb-[0.5rem]">
                        <i className="fa-solid fa-bookmark text-[20px]"></i>
                    </div>
                    <p className="text-[12px] text-gray-600 font-semibold">{video.bookmarks}</p>
                    </button>

                    <button className="flex flex-col items-center">
                    <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-200 rounded-full mb-[0.5rem]">
                        <i className="fa-solid fa-share text-[20px]"></i>
                    </div>
                    <p className="text-[12px] text-gray-600 font-semibold">{video.shares}</p>
                    </button>

                    <img className="rounded-full w-[44px] h-[44px]" src={video.avatar} />
                </section>
                </div>
            </article>
            ))}
                
            </div>
            <aside>
  <div className="fixed w-[48px] top-[19rem] right-[1rem] flex flex-col gap-[1rem] z-50">
    {/* UP */}
    <button
      disabled={currentIndex === 0}
      onClick={() => scrollToVideo(currentIndex - 1)}
      className={`w-[48px] h-[48px] flex items-center justify-center rounded-full
        ${currentIndex === 0 ? "bg-gray-100 opacity-40" : "bg-gray-200 hover:bg-gray-300"}
      `}
    >
      <i className="fa-solid fa-angle-up"></i>
    </button>

    {/* DOWN */}
    <button
      disabled={currentIndex === videos.length - 1}
      onClick={() => scrollToVideo(currentIndex + 1)}
      className={`w-[48px] h-[48px] flex items-center justify-center rounded-full
        ${currentIndex === videos.length - 1 ? "bg-gray-100 opacity-40" : "bg-gray-200 hover:bg-gray-300"}
      `}
    >
      <i className="fa-solid fa-angle-down"></i>
    </button>
  </div>
</aside>
        </div>
    );
}

export default Home;
