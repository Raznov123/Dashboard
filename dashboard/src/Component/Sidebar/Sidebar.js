import { MdForum, MdTask, MdOutlineMessage, MdOutlineHistory,MdHome, MdOutlinePerson,MdOutlineBorderVertical,MdOutlineSettings,MdSupportAgent,MdShield } from "react-icons/md";
const Sidebar = () =>{
    return(
        <div className="Sidebar">
            <div className="dashboard-logo">
                <span className="icons">
                    <MdOutlineBorderVertical/>
                    </span>
                    Dashboard
            </div>
            <div className="topSidebar">
                <a href=".">
                    <span className="icons">
                    <MdHome/>
                    </span>
                    Home
                </a>
                <a href=".">
                    <span className="icons">
                    <MdOutlinePerson/>
                    </span>
                    Profile
                </a>
                <a href=".">
                    <span className="icons">
                    <MdOutlineMessage/>
                    </span>
                    Message
                </a>
                <a href=".">
                    <span className="icons">
                    <MdOutlineHistory/>
                    </span>
                    History
                </a>
                <a href=".">
                    <span className="icons">
                    <MdTask/>
                    </span>
                    Tasks
                </a>
                <a href=".">
                    <span className="icons">
                    <MdForum/> 
                    </span>
                    Communities
                </a>
            </div>
            <div className="bottomSidebar">
                <a href=".">
                    <span className="icons">
                    <MdOutlineSettings/>
                    </span>
                    Settings
                </a>
                <a href=".">
                    <span className="icons">
                    <MdSupportAgent/>
                    </span>
                    Support
                </a>
                <a href=".">
                    <span className="icons">
                    <MdShield/>
                    </span>
                    Privacy
                </a>
            </div>
        </div>
    );
}

export default Sidebar;