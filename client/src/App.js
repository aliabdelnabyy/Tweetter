import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Upload from './pages/Upload/Upload';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Route path="/" exact render={()=> <Home />} />
        <Route path="/register" exact render={()=> <Register />} />
        <Route path="/login" exact render={()=> <Login />} />
        <Route path="/Upload" exact render={()=> <Upload />} />
        <Route path="/Profile" exact render={()=> <Profile />} />
      </Router>
    </>
  );
}

export default App;
