function Sidebar() {
    return (
        <div className="w-[var(--side-nav-width)] shrink-0 z-[99]">
            <div
                className="fixed w-[15rem] h-screen flex flex-col
             items-center shrink-0"
            >
                <div>Sidebar</div>
            </div>
        </div>
    );
}

export default Sidebar;
