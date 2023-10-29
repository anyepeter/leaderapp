
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Profile from './pages/profile';
import ProfileForm from './pages/editAccount';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/editAccount' element={<ProfileForm /> } />
    </Routes>
        
     
    </>
  );
}

export default App;
