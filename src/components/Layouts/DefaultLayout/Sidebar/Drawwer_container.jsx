function Drawwer_container() {
    return (
        <>
            <div className="fixed top-0 left-[24.5rem] w-[100vw] h-[100vh] z-[99] hidden"></div>

            <div
                className="w-[20rem] h-[100vh] fixed left-[4.5rem] bg-white z-[99]
             border-x border-[rgba(0,0,0,0.12)] overscroll-contain hidden"
            >
                <div className="p-[0.5rem] pe-0">
                    <div className="h-[4.5rem] pt-[1rem] pl-[0.5rem]">
                        <h2 className="text-[20px] font-semibold">Search</h2>
                    </div>

                    <div>

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
