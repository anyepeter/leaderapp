
import '../App.css';
import Landing from '../components/LandingSection/landing';
import Navbar from '../components/Nav/navbar.js'
import UserData from '../components/UserSection/userdata';
const HomePage = () => {
    
    return (<>
           <Navbar />
           <Landing />
           <UserData />
            <footer>
                <p>Footer</p>
            </footer>
        </>);
}

export default HomePage;