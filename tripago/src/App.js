import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';



function App() {
  const [showTrips,setshowTrips] = useState(true)

  return (
    <div className="App">
      <button onClick={()=>setshowTrips(false)}>Hide Trips</button>
      {showTrips && < TripList/>} 
    </div>
  );
}

export default App;
