import Social from '../social/social'

function Footer() {
    return (
        <footer className="footer">
            <p className="copyright">
                ©2014 <span className="copyright__highlite">tulus</span>driyo. All Rights Reserved.
            </p>
            <Social classAux='footer__social'/>
        </footer>
    );
}

export default Footer;
