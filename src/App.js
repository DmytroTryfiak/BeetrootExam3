import './App.scss'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import AboutUs from './Components/about-us/about-us'
import Services from './Components/services/services'
import Works from './Components/works/works'
import Team from './Components/team/team'
import Contacts from './Components/contacts/contacts'
import Footer from './Components/footer/footer'


function App() {
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

export default App;
