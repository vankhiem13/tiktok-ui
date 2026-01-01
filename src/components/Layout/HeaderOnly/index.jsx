import Header from "@/components/Layout/components/Header";

function DefaultLayout({children}) {
    return ( 
        <>
            <div>
                <div className='container'>
                    <Header/>
                    <div className='content'>
                        {children}
                    </div>
                </div>
            </div>
        </>
     );
}

export default DefaultLayout;