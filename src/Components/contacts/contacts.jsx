import ico from './images/contacts-ico.png'
import address from './images/address-ico.png'
import phone from './images/phone-ico.png'
import GoogleMapReact from 'google-map-react';

function Contacts() {

    const goHome = () => {
        window.scrollTo(0,0)        
    }

    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        <section className="contact" id="contact">
            <div id="map" className="map">
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={{ lat: 49.195179, lng: 28.367740 }}
                    defaultZoom={16}
                    yesIWantToUseGoogleMapApiInternals
                // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <AnyReactComponent
                        lat={49.195179}
                        lng={28.367740}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
            <div className="contact__title title-ext">
                <img className="contact__title-ico title-ext__ico" src={ico} alt='Title ico'></img>
                <h1 className="contact__title-text title-ext__text">
                    GET IN TOUCH
                </h1>
            </div>
            <form action="" className="form">
                <div className="form__inputs">
                    <input type="text" className="form__input" placeholder="Your Name" />
                    <input type="email" className="form__input" placeholder="Your Email" />
                </div>
                <textarea name="" id="" className="form__textarea" cols="30" rows="10" placeholder="Your message"></textarea>
                <button className="form__button">
                    Send message
                </button>
            </form>
            <div className="contact-slide slide-location">
                <div className="contact-slide__ico-wrap">
                    <img src={address} alt='Address' className="contact-slide__ico"></img>
                </div>
                <address className="contact-slide__text-wrap">
                    <p className="contact-slide__text">
                        Ikan Piranha Atas 220C
                        Malang - East Java
                        Indonesia
                    </p>
                </address>
            </div>
            <div className="contact-slide slide-phone">
                <div className="contact-slide__ico-wrap">
                    <img src={phone} alt='Pnone' className="contact-slide__ico"></img>
                </div>
                <address className="contact-slide__text-wrap">
                    <p className="contact-slide__text">
                        Ikan Piranha Atas 220C
                        Malang - East Java
                        Indonesia
                    </p>
                </address>
            </div>
            <button className="button-home" onClick={goHome}>
                ^
            </button>
        </section>
    );
}

export default Contacts;
