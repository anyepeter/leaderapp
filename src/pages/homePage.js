
import '../App.css';
import Landing from '../components/LandingSection/landing';
import Navbar from '../components/Nav/navbar.js'
const HomePage = () => {
    
    return (<>
           <Navbar />
           <Landing />
            <footer>
                <p>Footer</p>
            </footer>
        </>);
}

export default HomePage;