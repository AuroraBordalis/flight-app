import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomerPage from './pages/CustomerPage';
import SystemPage from './pages/SystemPage';
import AirportsPage from './pages/AirportsPage';
import AddAirports from './pages/AddAirports';
import FlightsPage from './pages/FlightsPage';
import AddFlights from './pages/AddFlights';
import BookFlights from './pages/BookFlights';
import AddReservation from './pages/AddReservation';
import ViewReservations from './pages/ViewReservations';
import FlightReservations from './pages/FlightReservations';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import UserContextProvider from './contexts/UserContext';
function App() {
  return (
    <UserContextProvider>
    <Router>
      
      <div>
       
          <Navbar/>
        

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Customer" element={<CustomerPage />} />
            <Route exact path="/System" element={<SystemPage />} />
            <Route exact path="/Airports" element={<AirportsPage />} />
            <Route path="/AddAirports/:id" element={<AddAirports />} />
            <Route path="/AddFlights/:id" element={<AddFlights />} />
            <Route path="/AddReservation/:id" element={<AddReservation />} />
            <Route exact path="/Flights" element={<FlightsPage />} />
            <Route exact path="/Reservations" element={<ViewReservations />} />
            <Route path="/FlightReservation/:id" element={<FlightReservations />} />
            <Route exact path="/BookFlightsPage" element={<BookFlights />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route exact path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
      
    </Router>
    </UserContextProvider>

  );
}

export default App;
