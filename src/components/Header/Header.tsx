import { Container } from "../Container/Container";
import { LinksList } from "./LinksList";
import { Logo } from "./Logo";

import s from './header.module.css';

export function Header() {
    return <header className={s.header}>
        <Container>
            <div className={s.header__row}>
                <Logo />
                <LinksList />
            </div>
        </Container>
    </header>
}