import clsx from "clsx";
import { ClockIcon, DeleteIcon, DotIcon, ArrowIcon, TrendIcon } from "./icon_Search";
import { useEffect, useState } from 'react';
import { searchApi } from '@/api/searchApi';


function Drawwer_container({onClose, isOpen}) {
    const [recentSearches, setRecentSearches] = useState([]);
    const [youMayLike, setYouMayLike] = useState([]);

    useEffect(() => {
    searchApi.getRecentSearches().then(setRecentSearches);
    }, []);

    useEffect(() => {
    searchApi.getYouMayLike().then(setYouMayLike);
    }, []);

    const handleDelete = async (id) => {
    await searchApi.deleteRecentSearch(id);
    setRecentSearches(prev => prev.filter(item => item.id !== id));
    };

    return (
        <>
            
            {isOpen && ( <div  className="fixed top-0 left-[24.5rem] w-[100vw] h-[100vh] z-[99]" onClick={onClose}></div>)}
            <div
                className={clsx(' h-[100vh] fixed left-[4.5rem] bg-white z-[99] border-x border-[rgba(0,0,0,0.12)] overscroll-contain transition-[width] duration-300 origin-left',
                            isOpen ? 'w-[20rem] opacity-100' : 'w-0 opacity-0 pointer-events-none')}
            >
                <div className="p-[0.5rem] pe-0 ">
                    <div className="h-[4.5rem] pt-[1rem] pl-[0.5rem]">
                        <h2 className="text-[20px] font-semibold">Search</h2>
                    </div>

                    <div className="relative group">
                        <form className="flex flex-row items-center py-[0.6rem] pr-[4px] pl-[16px] bg-[rgba(22,24,35,0.06)]
                        rounded-full relative overflow-hidden z-[1] m-0 me-[0.5rem] text-[14px]">

                            <input className="text-ellipsis font-normal  bg-transparent border-0 outline-none 
                            p-0 w-full text-[rgb(22,24,35)] caret-[var(--primary-color)] appearance-none 
                            placeholder:text-[rgba(22,24,35,0.5)] placeholder:text-[14px] leading-[21px] h-[21px]" placeholder="Search"/>
                            
                            <div className="hidden absolute inset-0 rounded-full border border-[rgba(22,24,35,0.2)] -z-10  group-focus-within:block "></div>
                        </form>

                        <ul className="absolute w-full max-h-[min(calc(100vh-150px),734px)] overflow-x-hidden
                                        overflow-y-auto list-none ps-0 my-[14px]">

                            <div className="font-semibold text-[14px] leading-[22px] text-[rgba(22,24,35,0.75)]
                            px-[12px] pt-[5px] pb-[3px]">Recent searches</div>

                            {/* {recentSearches.map((text, index) => (
                                <li
                                key={index}
                                className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]"
                                >
                                <ClockIcon />

                                <h4 className="font-medium text-[16px] leading-[24px] truncate whitespace-nowrap pr-[12px] pl-[8px]">
                                    {text}
                                </h4>

                                <DeleteIcon />
                                </li>
                            ))} */}

                            {recentSearches.map(item => (
                            <li
                                key={item.id}
                                className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]"
                            >
                                <ClockIcon />

                                <h4 className="flex-1 font-medium text-[16px] leading-[24px] truncate whitespace-nowrap pr-[12px] pl-[8px]">
                                {item.text}
                                </h4>

                                <span onClick={() => handleDelete(item.id)}>
                                <DeleteIcon />
                                </span>
                            </li>
                            ))}

                            <div className="font-semibold text-[14px] leading-[22px] text-[rgba(22,24,35,0.75)]
                            px-[12px] pt-[5px] pb-[3px]">You may like</div>

                            {youMayLike.map(item => (
                            <li
                            key={item.id}
                            className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]"
                            >
                            {item.type === 'dot' && <DotIcon />}
                            {item.type === 'arrow' && <ArrowIcon />}
                            {item.type === 'trend' && <TrendIcon />}

                            <h4 className="font-medium text-[16px] leading-[24px] truncate whitespace-nowrap pr-[12px] pl-[8px]">
                                {item.text}
                            </h4>
                            </li>
                        ))}

                        </ul>

                    </div>
                </div>

                <div className="absolute top-[1.5rem] right-[1rem] flex items-center justify-center">
                    {isOpen && (<button
                        className="min-w-0 w-[28px] h-[1.75rem] p-0 bg-[rgba(0,0,0,0.05)] rounded-full
                         hover:bg-[rgba(0,0,0,0.1)]"
                    onClick={onClose}>
                        <div className="w-[16px] items-center flex justify-center w-full overflow-hidden">
                            <div className="text-[19px] flex shrink-0">
                                <i className="fa-solid fa-x text-[10px]"></i>
                            </div>
                        </div>
                    </button>)}
                </div>

                <div>

                </div>
            </div>
        </>
    );
}

export default Drawwer_container;
