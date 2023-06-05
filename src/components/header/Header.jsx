import { AboutAuthor } from "./AboutAuthor";
import Container from "../Container";
import { Logo } from "./Logo";
import { SidebarToggleButton } from "../sidebar/SidebarToggleButton";

export function Header(props) {
    const {openSidebar} = props;

    return <header className="header">
        <Container>
            <div className="header__row">
                <SidebarToggleButton handleClick={openSidebar} className="header__sidebar-toggler" />
                <Logo />
                <AboutAuthor />
            </div>
        </Container>
    </header>
}