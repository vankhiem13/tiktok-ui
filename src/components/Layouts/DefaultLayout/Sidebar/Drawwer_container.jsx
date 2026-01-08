function Drawwer_container() {
    return (
        <>
            <div className="fixed top-0 left-[24.5rem] w-[100vw] h-[100vh] z-[99]"></div>

            <div
                className="w-[20rem] h-[100vh] fixed left-[4.5rem] bg-white z-[99]
             border-x border-[rgba(0,0,0,0.12)] overscroll-contain"
            >
                <div className="p-[0.5rem] pe-0">
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

                            <li className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]">

                                <svg className="w-[16px] h-[16px] shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><g clipPath="url(#a)"><path fill="#161823" fillOpacity="0.34" d="M.8 8a7.2 7.2 0 1 1 14.4 0A7.2 7.2 0 0 1 .8 8m9.764 2.853c.15.106.359.069.464-.082l.612-.874a.333.333 0 0 0-.082-.464L9.01 7.65a.33.33 0 0 1-.143-.273V4.334a.333.333 0 0 0-.333-.333H7.467a.333.333 0 0 0-.333.333v3.771c0 .218.106.421.284.546z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>

                                <h4 className="font-medium text-[16px] leading-[24px] truncate text-ellipsis whitespace-nowrap pr-[12px]
                                pl-[8px]">ánh mắt kẻ si tình</h4>

                                <svg className="w-[16px] h-[16px] shrink-0 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fill="#161823" fillOpacity="0.34" d="M7.057 8 3.431 4.374a.333.333 0 0 1 0-.472l.472-.471c.13-.13.34-.13.47 0L8 7.057l3.626-3.626c.13-.13.342-.13.472 0l.471.471c.13.13.13.342 0 .472L8.943 8l3.626 3.626c.13.13.13.341 0 .472l-.471.471a.333.333 0 0 1-.472 0L8 8.943l-3.626 3.626a.333.333 0 0 1-.471 0l-.472-.471a.333.333 0 0 1 0-.472z"></path></svg>
                            </li>

                            <li className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]">

                                <svg className="w-[16px] h-[16px] shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><g clipPath="url(#a)"><path fill="#161823" fillOpacity="0.34" d="M.8 8a7.2 7.2 0 1 1 14.4 0A7.2 7.2 0 0 1 .8 8m9.764 2.853c.15.106.359.069.464-.082l.612-.874a.333.333 0 0 0-.082-.464L9.01 7.65a.33.33 0 0 1-.143-.273V4.334a.333.333 0 0 0-.333-.333H7.467a.333.333 0 0 0-.333.333v3.771c0 .218.106.421.284.546z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>

                                <h4 className="font-medium text-[16px] leading-[24px] truncate text-ellipsis whitespace-nowrap pr-[12px]
                                pl-[8px]">gái xinh</h4>

                                <svg className="w-[16px] h-[16px] shrink-0 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fill="#161823" fillOpacity="0.34" d="M7.057 8 3.431 4.374a.333.333 0 0 1 0-.472l.472-.471c.13-.13.34-.13.47 0L8 7.057l3.626-3.626c.13-.13.342-.13.472 0l.471.471c.13.13.13.342 0 .472L8.943 8l3.626 3.626c.13.13.13.341 0 .472l-.471.471a.333.333 0 0 1-.472 0L8 8.943l-3.626 3.626a.333.333 0 0 1-.471 0l-.472-.471a.333.333 0 0 1 0-.472z"></path></svg>
                            </li>

                            <li className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]">

                                <svg className="w-[16px] h-[16px] shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><g clipPath="url(#a)"><path fill="#161823" fillOpacity="0.34" d="M.8 8a7.2 7.2 0 1 1 14.4 0A7.2 7.2 0 0 1 .8 8m9.764 2.853c.15.106.359.069.464-.082l.612-.874a.333.333 0 0 0-.082-.464L9.01 7.65a.33.33 0 0 1-.143-.273V4.334a.333.333 0 0 0-.333-.333H7.467a.333.333 0 0 0-.333.333v3.771c0 .218.106.421.284.546z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>

                                <h4 className="font-medium text-[16px] leading-[24px] truncate text-ellipsis whitespace-nowrap pr-[12px]
                                pl-[8px]">nà ní</h4>

                                <svg className="w-[16px] h-[16px] shrink-0 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fill="#161823" fillOpacity="0.34" d="M7.057 8 3.431 4.374a.333.333 0 0 1 0-.472l.472-.471c.13-.13.34-.13.47 0L8 7.057l3.626-3.626c.13-.13.342-.13.472 0l.471.471c.13.13.13.342 0 .472L8.943 8l3.626 3.626c.13.13.13.341 0 .472l-.471.471a.333.333 0 0 1-.472 0L8 8.943l-3.626 3.626a.333.333 0 0 1-.471 0l-.472-.471a.333.333 0 0 1 0-.472z"></path></svg>
                            </li>

                            

                            <div className="font-semibold text-[14px] leading-[22px] text-[rgba(22,24,35,0.75)]
                            px-[12px] pt-[5px] pb-[3px]">You may like</div>

                            <li className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]">

                                <div className="w-[16px] h-[16px] flex shrink-0 justify-center items-center">

                                    <div className="w-[6px] h-[6px] rounded-full bg-[rgba(22,24,35,0.34)]"></div>
                                </div>

                                <h4 className="font-medium text-[16px] leading-[24px] truncate text-ellipsis whitespace-nowrap pr-[12px]
                                pl-[8px]">ánh mắt kẻ si tình</h4>
                            </li>

                            <li className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]">

                                <svg className="w-[16px] h-[16px] shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fill="#FE2C55" fillRule="evenodd" d="M8.333.507a.437.437 0 0 0-.666 0L1.105 8.209a.437.437 0 0 0 .333.721h3.529v5.86c0 .24.196.437.437.437H10.6a.437.437 0 0 0 .437-.438V8.93h3.526a.437.437 0 0 0 .333-.72z" clipRule="evenodd"></path></svg>

                                <h4 className="font-medium text-[16px] leading-[24px] truncate text-ellipsis whitespace-nowrap pr-[12px]
                                pl-[8px]">titanic behind the scenes</h4>
                            </li>

                            <li className="py-[9px] px-[16px] cursor-pointer flex items-center hover:bg-[rgba(22,24,35,0.03)]">

                                <svg className="w-[16px] h-[16px] shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 14"><path fill="#FE2C55" fillRule="evenodd" d="M5.461 5.026a.83.83 0 0 1 .642.098l3.61 2.221 3.879-6.57 1.148.679a.333.333 0 0 1 .118.456l-4.14 7.014a.833.833 0 0 1-1.155.286L5.961 6.993l-3.906 6.8a.333.333 0 0 1-.455.123l-.867-.498a.333.333 0 0 1-.123-.455l4.334-7.545a.83.83 0 0 1 .517-.392" clipRule="evenodd"></path><path fill="#FE2C55" fillRule="evenodd" d="m10.585 1.86 3.97-1.77a.358.358 0 0 1 .49.282l.453 4.327a.258.258 0 0 1-.387.25L10.557 2.32a.256.256 0 0 1 .028-.46" clipRule="evenodd"></path></svg>

                                <h4 className="font-medium text-[16px] leading-[24px] truncate text-ellipsis whitespace-nowrap pr-[12px]
                                pl-[8px]">Anh Vẽ Cầu Vòng Thì Lại Thiếu Nắng Trend</h4>
                            </li>

                        </ul>

                    </div>
                </div>

                <div className="absolute top-[1.5rem] right-[1rem] flex items-center justify-center">
                    <button
                        className="min-w-0 w-[28px] h-[1.75rem] p-0 bg-[rgba(0,0,0,0.05)] rounded-full
                         hover:bg-[rgba(0,0,0,0.1)]"
                    >
                        <div className="w-[16px] items-center flex justify-center w-full overflow-hidden">
                            <div className="text-[19px] flex shrink-0">
                                <i className="fa-solid fa-x text-[10px]"></i>
                            </div>
                        </div>
                    </button>
                </div>

                <div>

                </div>
            </div>
        </>
    );
}

export default Drawwer_container;
