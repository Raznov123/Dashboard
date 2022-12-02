import { MdSearch,MdOutlineNotifications } from "react-icons/md";
const Header = () => {
    return (
            <div className="header">
                <div className ="header-grid">
                    <div className ="search">
                        <span className="search-bar">
                            <MdSearch/>
                            <input type="text" placeholder=""></input>
                        </span>
                    </div>
                    <div className="profile">
                            <a href=".">
                                <span class="material-symbols-outlined md-24">
                                    <MdOutlineNotifications/>
                                </span>
                            </a>
                            <span>image</span>
                            <span>Raznov</span>
                    </div>
                </div>
            </div>              
    );
}
 
export default Header;