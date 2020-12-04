import "./style.scss";
import ico from './images/about-us-ico.png'

function AboutUs() {
    return (
        <section className="about-us" id="about-us">
            <div className="about-us__title title-ext">
                <img
                    className="about-us__title-ico title-ext__ico"
                    src={ico}
                    alt='About us'
                ></img>
                <h1 className="title-ext__text">About Us</h1>
            </div>
            <div className="about-us__content">
                <p className="about-us__text">
                    Nullam quis risus eget urna
                    <span className="text-bold">mollis ornare</span> vel eu leo. Donec id elit
                    non mi porta gravida at eget metus. Donec ullamcorper nulla non metus
                    auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor.
                </p>
                <p className="about-us__text">
                    <span className="text-bold">Morbi leo risus</span>, porta ac consectetur
                    ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare
                    sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis
                    interdum. Cras mattis consectetur purus sit amet fermentum. Sed
                    posuere consectetur est at lobortis.
                </p>
                <button className="about-us__button button">Learn More</button>
            </div>
        </section>
    );
}

export default AboutUs;
