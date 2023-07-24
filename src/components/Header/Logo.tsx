import Link from "next/link";
import React from "react";

import s from './header.module.css';

export function Logo() {
    return <Link className={s.header__logo} href='/'>
        damir site
    </Link>
};