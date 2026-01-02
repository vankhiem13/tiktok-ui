function Top_right_action_bar() {
    return (
        <div className="fixed top-9 right-9 z-[100]">
            <div
                className="
      flex items-center
      min-h-[48px]
      rounded-full
      bg-white/80
      shadow-[0_0_6px_rgba(0,0,0,0.15)]
      px-2
    "
            >
                <button className="inline-flex shrink-0 items-center justify-center gap-1 h-12 px-3 rounded-full font-semibold hover:bg-black/5">
                    <i className="fa-brands fa-tiktok" />
                    <span className="text-[14px]">Get Coins</span>
                </button>

                <button className="inline-flex shrink-0 items-center justify-center gap-1 h-12 px-3 rounded-full font-semibold hover:bg-black/5">
                    <i className="fa-solid fa-mobile" />
                    <span className="text-[14px]">Get App</span>
                </button>

                <button className="inline-flex shrink-0 items-center justify-center gap-1 h-12 px-3 rounded-full font-semibold hover:bg-black/5">
                    <i className="fa-solid fa-download" />
                    <span className="text-[14px]">PC App</span>
                </button>

                <div className="mx-2 w-px h-8 bg-gray-300" />
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10
                                cursor-pointer mr-2">
                    <img
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/99741b40f1a9f3dfc98b8fd9b466f5c7~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=72a2faf5&x-expires=1767528000&x-signature=65JsSgVTIexKAioIeESouGc%2FymM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                        className="w-9 h-9 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Top_right_action_bar;
