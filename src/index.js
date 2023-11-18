import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Event from './Login/LoginRegister';
import EventRegister from './Login/UserRegister';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import EventUser from './Login/UserLogin';
import EventUserHome from './EventUserHome';
import EventCatBtn from './Components/EventCatBtn';
import ResponsiveAppBar from './Components/header';
import EventOrganizer from './Login/OrganizerLogin';
import EventAdmin from './Login/AdminLogin';
import ActionAreaCard from './Components/eventCard';
import EventCategory from './EventCategory';
import Upcoming from './Upcoming';
import Popular from './Popular';
import JoinedEvents from './User/UserJoinedEvents';
import OrganizerReq from './Components/OrganizerReq';
import LandingPage from './Components/LandingPage';
import BackButton from './BackButton';
import UserHomePage from './User/UserHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
      <BrowserRouter>

      <Routes>
      <Route path="/" element={<Event />} />
      <Route path="/EventRegister" element={<EventRegister />} />
      <Route path="/EventUser" element={<EventUser />} />
      <Route path="/EventOrganizer" element={<EventOrganizer />} />
      <Route path="/EventAdmin" element={<EventAdmin />} />
      <Route path="/EventUserHome" element={<UserHomePage/>} />
      </Routes>


{/* <ResponsiveAppBar /> */}
{/* <ResponsiveAppBar /> */}
{/* <EventCategory /> */}
{/* <EventCatBtn /> */}
{/* <ActionAreaCard /> */}
{/* <Upcoming /> */}
{/* <Popular /> */}
{/* <BackButton /> */}
{/* <OrganizerReq /> */}
{/* <LandingPage /> */}


{/* <UserHomePage /> */}
{/* <JoinedEvents /> */}

  
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";// Update this line

// import Home from './Home';
// import Login from './Login';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/Home" element={<Home/>} />
//     </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );