import "./style.scss";
import ico from './images/services-ico.png'
import graphicDesign from './images/graphic-design-ico.png'
import webDev from './images/web-dev-ico.png'
import seo from './images/seo-ico.png'
import mobileDev from './images/mobile-dev-ico.png'

function Services() {
    return (
        <section className="services" id="services">
            <div class="services__grid">
                <div className="services__title title-ext">
                    <img className="services__title-ico title-ext__ico" src={ico}></img>
                    <h1 className="title-ext__text">
                        OUR SERVICES
                    </h1>
                    <blockquote className="title-ext__quote quote">
                        <p className="quote__text">
                            “Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.”
                        </p>
                        <p className="quote__author">
                            - Borat -
                        </p>
                    </blockquote>
                </div>
    
                <ServiceItem
                    classAux='service-item-design'
                    img={graphicDesign}
                    title='GRAPHIC DESIGN'
                    desc='Cras mattis consectetur purus sit amet fermentum.'
                />
                <ServiceItem
                    classAux='service-item-web-dev'
                    img={webDev}
                    title='WEB DEVELOPMENT'
                    desc='Cras mattis consectetur purus sit amet fermentum.'
                />
                <ServiceItem
                    classAux='service-item-seo'
                    img={seo}
                    title='SEO & MARKETING'
                    desc='Cras mattis consectetur purus sit amet fermentum.'
                />
                <ServiceItem
                    classAux='service-item-mob-dev'
                    img={mobileDev}
                    title='MOBILE DEVELOPMENT'
                    desc='Cras mattis consectetur purus sit amet fermentum.'
                />
            </div>
        </section>
    );
}

function ServiceItem({ classAux, img, title, desc }) {
    return (
        <div className={"service-item" + ' ' + classAux}>
            <img className="service-item__ico" src={img}></img>
            <h2 className="service-item__title">
                {title}
            </h2>
            <p className="service-item__desc">
                {desc}
            </p>
        </div>

    );
}

export default Services;
