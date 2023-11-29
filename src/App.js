import './App.css';
import { createContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';

export const AppContext = createContext();

function App() {
  let [username,setUsername] = useState("Alejandro");

  return (
    <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
        <Router>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<h1>404 Page Not Found</h1>}/>
          </Routes>
        </Router>
      </AppContext.Provider>

    </div>
  );
}

const TopComponent = () => {
  const [state , setState ] =  useState();

  return (
    <div>
      <MiddleComponent state = {state} />
    </div>
  );
};

const MiddleComponent = (state) => {
  return (
    <div>
      <BottomComponent state = {state} />
    </div>
  );
};

const BottomComponent = (state) => {
  return (
    <div>
      {state}
    </div>
  );
};

export default App;
