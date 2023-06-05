import Container from './Container';

import { Link } from 'react-router-dom';

export function Footer() {


    return <footer className="footer">
        <Container>
            <div className="footer__content">
                <span>2023 | <Link className="footer__link" to="https://github.com/damirios">damirios</Link></span>
            </div>
        </Container>
    </footer>
}