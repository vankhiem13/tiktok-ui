import Header from "@/components/Layout/components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <>
            <div>
                <div className='container'>
                    <Header/>
                    <Sidebar/>
                    <div className='content'>
                        {children}
                    </div>
                </div>
            </div>
        </>
     );
}

export default DefaultLayout;