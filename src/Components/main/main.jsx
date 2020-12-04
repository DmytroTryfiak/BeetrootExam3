import './style.scss'
import Header from '../header/header'
import Nav from '../nav/nav'
import AboutUs from '../about-us/about-us'
import Services from '../services/services'
import Works from '../works/works'
import Team from '../team/team'
import Contacts from '../contacts/contacts'
import Footer from '../footer/footer'


function Main() {
    return (
        <div className='wrapper'>
            <Nav />
            <Header />
            <main>
                <AboutUs />
                <Services />
                <Works />
                <Team />
                <Contacts />
            </main>
            <Footer/>
        </div>
    )
}

export default Main;
