import { Container } from '../Container/Container';
import s from './homepage.module.css';

export function Homepage() {
    return <main className={s.homepage}>
        <Container>
            <div className={s.homepage__grid}>
                <h1 className={s.homepage__title}>Homepage</h1>
                
            </div>
        </Container>
    </main>
}