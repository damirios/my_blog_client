import Link from "next/link";

import s from './header.module.css';

export function LinksList() {
    return <ul className={s.header__links_list}>
        <li className={s.header__item}>
            <Link className={s.header__link} href='/portfolio'>portfolio</Link>
        </li>
        <li className={s.header__item}>
            <Link className={s.header__link} href='/about-me'>about me</Link>
        </li>
        <li className={s.header__item}>
            <Link className={s.header__link} href='/blog'>blog</Link>
        </li>
    </ul>
}