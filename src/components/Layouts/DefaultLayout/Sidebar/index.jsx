import images from '@/assets/image';
import { Link } from 'react-router-dom';
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

                        <Link to="/">
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
                        </Link>

                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                       <i className="fa-regular fa-compass"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Explore</p>
                            </div>
                        </h2>
                        <Link  to="/following">
                        
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
                        </Link>
                        
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
                        <div className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-bell"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Activity</p>
                            </div>
                        </div>
                        <div className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Upload</p>
                            </div>
                        </div>
                        <h2 className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <img
                                        src={images.avatar}
                                        className="w-6 h-6 rounded-full"
                    />
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">Profile</p>
                            </div>
                        </h2>
                        <div className="w-[13rem] h-[2.5rem] ml-1 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                            <div className="pl-2 pt-1 flex items-center gap-2">
                                <div className="text-[21px]">
                                    <div className="w-[2rem] h-[2rem] justify-center items-center flex relative">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                                <p className="text-[16px] text-black font-semibold pl-2">More</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mx-1 h-px w-[85%] bg-gray-200 mb-3 mt-4" />
                        <div>
                            <div>
                                <div className="pl-2 text-[14px] text-gray-600 font-semibold">Following accounts</div>
                        
                                <div className="w-[13rem] flex items-center gap-3 mt-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                                    <div className="pl-2">
                                        <div>
                                            <img className="w-7 h-7 rounded-full" src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/cfad1886bf6c13d8d0debfbfa9177343~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=c87d5b36&x-expires=1767682800&x-signature=I0zi0yu4YXRlSH8Fo3Nz0Sq7cXk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li className="text-[14px] font-medium">CrisDevilGamer
                                                <i className="fa-solid fa-circle-check ml-1 text-[rgb(32,213,236)]"></i>
                                            </li>
                                            <li className="text-[14px] font-normal">crisdevilgamer7</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-[13rem] flex items-center gap-3 mt-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md">
                                    <div className="pl-2">
                                        <div>
                                            <img className="w-7 h-7 rounded-full" src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/cfad1886bf6c13d8d0debfbfa9177343~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=c87d5b36&x-expires=1767682800&x-signature=I0zi0yu4YXRlSH8Fo3Nz0Sq7cXk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li className="text-[14px] font-medium">CrisDevilGamer
                                            </li>
                                            <li className="text-[14px] font-normal">crisdevilgamer7</li>
                                        </ul>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                        
                        <div className="mx-1 h-px w-[85%] bg-gray-200 mt-4" />
                    </div>
                    <div>
                        <div className="mt-3 w-[13rem] ml-2 ">
                            <h3 className="text-[15px] text-gray-500 font-semibold mb-1 cursor-pointer">Company</h3>
                            <h3 className="text-[15px] text-gray-500 font-semibold mb-1 cursor-pointer">Program</h3>
                            <h3 className="text-[15px] text-gray-500 font-semibold mb-1 cursor-pointer">Terms & Policies</h3>
                            <p className="text-[12px] text-gray-500 ">© 2026 TikTok</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
