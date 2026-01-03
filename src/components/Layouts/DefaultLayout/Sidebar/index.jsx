import images from '@/assets/image';
function Sidebar() {
    return (
        <div className="w-[var(--side-nav-width)] shrink-0 z-[99]">
            <div className="h-[100vh] flex flex-col fixed w-[15rem] items-center ">
                <div className="flex flex-col gap-[1rem] items-center shrink-0 w-full ">
                    <div className="flex w-[13rem] pt-4 ps-[0.5rem] ">
                        <a href="">
                            <img src={images.logo} alt="Tiktok" />

                            <div className="hidden">
                                <img src={images.logo2} alt="Tiktok2" />
                            </div>
                        </a>
                    </div>

                    <div className="w-[13rem] flex items-center mt-[0.25rem]">
                        <button className="bg-[rgb(242,242,242)] h-[2.5rem] w-full flex items-center gap-2 cursor-pointer rounded-full">
                            <div className="text-[18px]">
                                <i className="fa-solid fa-magnifying-glass ml-2"></i>
                            </div>
                            <p className="text-[14px] text-gray-400">Search</p>
                        </button>
                    </div>
                </div>

                <div
                    className="flex flex-col w-full items-center pt-[0.25rem] pb-[0.5rem] 
                overflow-y-auto [&::-webkit-scrollbar]:hidden"
                >
                    <div className="flex flex-col gap-[0.25rem] pt-[0.5rem]">
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 pl-2 pt-1 flex items-center gap-2 text-[var(--primary-color)]">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-house"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] font-semibold pl-2">For You</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                       <i class="fa-regular fa-compass"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Explore</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                            <i className="fa-solid fa-user-check"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Following</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-user-group"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Friends</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-video"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">LIVE</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-message"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Messages</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-bell"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Activity</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Upload</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <img
                                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/99741b40f1a9f3dfc98b8fd9b466f5c7~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=72a2faf5&x-expires=1767528000&x-signature=65JsSgVTIexKAioIeESouGc%2FymM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                        className="w-6 h-6 rounded-full"
                    />
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Profile</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">More</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">More</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">More</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">More</p>
                            </div>
                        </h2>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">More</p>
                            </div>
                        </h2>
                        

                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
