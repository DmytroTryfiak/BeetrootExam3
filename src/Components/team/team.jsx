import ico from './images/team-ico.png'
import img1 from './images/team-item-1.png'
import img2 from './images/team-item-2.png'
import img3 from './images/team-item-3.png'
import Slider from "react-slick";
import Social from '../social/social'




function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='slide-arr team-arr-next'
            onClick={onClick}
        >{'>'}
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='slide-arr team-arr-prev'
            onClick={onClick}
        >{'<'}
        </div>
    );
}

function Team() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className='slide-arr works-arr-next' />,
        prevArrow: <SamplePrevArrow className='slide-arr works-arr-prev' />,
              responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <section className="team" id="team">
            <div className="team__title title-ext">
                <img className="team__title-ico title-ext__ico" src={ico} alt='Title icon'></img>
                <h1 className="team__title-text title-ext__text">
                    MEET OUR TEAM
                </h1>
            </div>
            <div className="team__slider">
                <Slider {...settings}>
                    <TeamItem src={img1} alt='Image slide' name='Miguel Obrien' position='CEO & Founder' />
                    <TeamItem src={img2} alt='Image slide' name='Miguel Obrien' position='CEO & Founder' />
                    <TeamItem src={img3} alt='Image slide' name='Miguel Obrien' position='CEO & Founder' />
                    <TeamItem src={img2} alt='Image slide' name='Miguel Obrien' position='CEO & Founder' />
                    <TeamItem src={img1} alt='Image slide' name='Miguel Obrien' position='CEO & Founder' />
                    <TeamItem src={img3} alt='Image slide' name='Miguel Obrien' position='CEO & Founder' />
                </Slider>
            </div>
        </section>
    );
}

function TeamItem({ src, alt, name, position }) {
    return (
        <div className="team-item-wrap">
            <div className="team-item">
                <img src={src} alt={alt} className="team-item__img"></img>
                <h3 className={"team-item__name"}>
                    {name}
                </h3>
                <p className="team-item__position">
                    {position}
                </p>
                <Social classAux='team-item__social'/>
            </div>
        </div>
    );
}

export default Team;
