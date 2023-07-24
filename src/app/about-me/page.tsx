import { Container } from "@/components/Container/Container";

import s from './about-me.module.css';

export default function AboutMe() {
    return <main className={s.about_me}>
        <Container>
            <div className={s.about_me__grid}>
                <h1 className={s.about_me__title}>About Me</h1>
            </div>
        </Container>
    </main>
}