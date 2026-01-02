import Header from "@/components/Layouts/components/Header";
import Sidebar from "./Sidebar";
import Top_right_action_bar from "./Top_right_action_bar";

function DefaultLayout({children}) {
    return ( 
            <div>
                <div className='wrapper'>
                    <Top_right_action_bar/>

                    <div className='flex'>
                        <Sidebar/>
                        <div className='content'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default DefaultLayout;