import ico from './images/works-ico.png'
import img1 from './images/work-item.png'
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='slide-arr works-arr-next'
            onClick={onClick}
        >{'>'}
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='slide-arr works-arr-prev'
            onClick={onClick}
        >{'<'}
        </div>
    );
}

function Works() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className='slide-arr works-arr-next' />,
        prevArrow: <SamplePrevArrow className='slide-arr works-arr-prev' />,
        customPaging: i =>
            (
                <div
                    className="marker"
                    id={i}>
                </div>
            ),
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                }
            }
        ]

    };
    return (
        <section className="works" id="works">
            <div className="works__title title-ext">
                <img className="works__title-ico title-ext__ico" src={ico} alt='Title icon'></img>
                <h1 className="works__title-text title-ext__text">
                    RECENT WORKS
                </h1>
            </div>

            <div className="works__slider">
                <Slider {...settings}>
                    <WorkItem src={img1} alt='Image slide' />
                    <WorkItem src={img1} alt='Image slide' />
                    <WorkItem src={img1} alt='Image slide' />
                </Slider>
            </div>

            <button className="works__button button">
                View gallery
            </button>


        </section>
    );
}

function WorkItem({ src, alt }) {
    return (
        <div className="work-item">
            <img src={src} alt={alt} className="work-item__img"></img>
        </div>

    );
}

export default Works;
