import { Link } from 'react-router-dom';

export function AboutMePage() {


    return <div className="about-me">
        <div className="about-me__box">
            <div className="about-me__links">
                <div className="about-me__image-box">
                    <img src="/assets/images/avatar.jpg" alt="me" />
                </div>
                <ul className="about-me__list">
                    <li className="about-me__item">
                        <Link to="mailto:damirdigaz@gmail.com">
                            <img src="/assets/icons/mail.svg" alt="mail" />
                            <span>damirdigaz@gmail.com</span>
                        </Link>
                    </li>
                    <li className="about-me__item">
                        <Link to="https://github.com/damirios">
                            <img src="/assets/icons/github.svg" alt="github" />
                            <span>my GitHub</span>
                        </Link>
                    </li>
                    <li className="about-me__item">
                        <Link to="https://github.com/damirios">
                        <img src="/assets/icons/notepad.svg" alt="github" />
                            <span>Portfolio</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="about-me__description">
                <div className="about-me__welcome">
                    Hello! My name is Damir Zagidullin, and I am a self-taught developer.
                </div>
                <div className="about-me__studiyng">
                    I started learning web development in March 2022. I found The Odin Project curriculum and decided
                    to become FullStack developer.
                </div>
                <div className="about-me__experience">
                    <h1>Internships and work experience</h1>
                    <ul>
                        <li>
                            <span>Internship "Aston". 30.09.2022 - 30.11.2022</span>
                        </li>
                        <li>
                            <span>Internship "Hotels.ru". 26.02.2023 - 17.04.2022</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}