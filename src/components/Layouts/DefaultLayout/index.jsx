import Header from "@/components/Layouts/components/Header";
import Sidebar from "./Sidebar";
import Top_right_action_bar from "./Top_right_action_bar";

function DefaultLayout({children}) {
    return ( 
            <div>
                <div className='wrapper'>
                    <Top_right_action_bar/>

                    <div className='flex h-screen'>
                        <Sidebar/>
                        <div className='w-full my-0 mx-auto relative min-w-[420px] shrink-1 flex justify-center items-stretch'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default DefaultLayout;