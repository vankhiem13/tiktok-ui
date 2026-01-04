function Home() {
    return ( 

        <div className="w-full relative max-h-[100vh] overflow-y-scroll 
        snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden
        pe-[calc(var(--feed-nav-button-width)+1rem)]">

            <article className="ps-[1rem] pe-[calc(15rem - (var(--feed-nav-button-width) * 2) - 1rem)]
                                 h-[100vh] relative flex flex-row justify-center items-center gap-[1rem]
                                 p-[1rem] pr-[8rem] p-block-[1rem] my-0 mx-auto">

                <div className="h-max flex flex-row grow-1 items-end justify-center gap-[1rem]">
                    
                    <section className="cursor-pointer ">

                    </section>

                    <section>

                    </section>

                </div>

            </article>
        </div>
     );
}

export default Home;