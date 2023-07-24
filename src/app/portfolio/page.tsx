import { Container } from "@/components/Container/Container";

import s from './portfolio.module.css';

export default function Portfolio() {
    return <main className={s.portfolio}>
        <Container>
            <div className={s.portfolio__grid}>
                <h1 className={s.portfolio__title}>Portfolio</h1>
            </div>
        </Container>
    </main>
}