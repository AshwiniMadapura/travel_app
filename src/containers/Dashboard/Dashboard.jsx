import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav"
import Home from "../../components/Home/Home";
import LocationList from "../../components/LocationList/LocationList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = () => {
    const [locations, setLocations] = useState([]);

  const getLocations = () => {
    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(json => setLocations(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getLocations();
  }, []);

    return(
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/locations" element={<LocationList locations={locations}/>}/>
            </Routes>
        </Router>
    )
}

export default Dashboard