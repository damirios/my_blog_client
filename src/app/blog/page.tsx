
import { Container } from '@/components/Container/Container';
import s from './blog.module.css';

export default function Portfolio() {
    return <main className={s.blog}>
        <Container>
            <div className={s.blog__content}>
                <h1 className={s.blog__title}>Blog</h1>
                <div className={s.blog__articles}>

                </div>
            </div>
        </Container>
    </main>
}