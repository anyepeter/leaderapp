
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Profile from './pages/profile';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
        
     
    </>
  );
}

export default App;
