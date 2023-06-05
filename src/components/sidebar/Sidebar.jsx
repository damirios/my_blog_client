import { Link } from "react-router-dom";
import { SidebarToggleButton } from "./SidebarToggleButton";

export function Sidebar(props) {
    const {closeSidebar, isOpen} = props;

    return <div className={`sidebar ${isOpen ? '_active' : ''}`}>
        <div className="sidebar__cover" onClick={closeSidebar}></div>
        <div className="sidebar__content">
            <SidebarToggleButton handleClick={closeSidebar} className="sidebar__sidebar-toggler" />
            <div className="sidebar__userinfo-block">
                <div className="sidebar__image-box">
                    <img src="/assets/images/avatar.jpg" alt="avatar" className="sidebar__image" />
                </div>
                <div className="sidebar__info info-sidebar">
                    <div className="info-sidebar__login">damirios</div>
                    <div className="info-sidebar__last-name">digaz</div>
                    <div className="info-sidebar__first-name">damir</div>
                </div>
            </div>
            <div className="sidebar__links-block links-sidebar">
                <ul className="links-sidebar__list">
                    <li className="links-sidebar__item">
                        <Link className="links-sidebar__link" to='/post'>Posts</Link>
                    </li>
                    <li className="links-sidebar__item">
                        <Link className="links-sidebar__link" to='#'>Comments</Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar__logout-block">
                <Link className="sidebar__logout-link">Выйти из аккаунта</Link>
            </div>
        </div>
    </div>
}