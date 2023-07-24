import Image from 'next/image';
import s from './minicard.module.css';

export function MiniCard() {
    return <div className={s.minicard}>
        <div className={s.minicard__image_box}>
            <Image src='/next.svg' alt='mini-poster' />
        </div>
        <div className={s.minicard__info}>
            <div className={s.minicard__title}>
                название статьи
            </div>
            <div className={s.minicard__date}>сегодня | 18:30</div>
        </div>
    </div>
}