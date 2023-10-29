import {useState} from 'react'
import '../App.css';
import Landing from '../components/LandingSection/landing';
import Navbar from '../components/Nav/navbar.js'
import UserData from '../components/UserSection/userdata';
import WeekDetail from '../components/UserSection/weekDetail';

const HomePage = () => {

    const [selectedValue, setSelectedValue] = useState(1);

    const handleListItemClick = (value) => {
      setSelectedValue(value);
    };


    return (<>
           <Navbar />
           <Landing />
           <div className="nav-main">
        <h2>Top leaders</h2>
        <ul>
          <li onClick={() => handleListItemClick(1)} className={selectedValue === 1 ? 'nav-text1' : ''}>
            <p>Daily</p>
          </li>
          <li onClick={() => handleListItemClick(2)} className={selectedValue === 2 ? 'nav-text1' : ''}>
            <p>Weekly</p>
          </li>
        </ul>
      </div>
      {
        selectedValue === 1? <UserData /> : <WeekDetail />
      }
            <footer>
                <p>Footer</p>
            </footer>
        </>);
}

export default HomePage;