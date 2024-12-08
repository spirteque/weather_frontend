import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WeatherForecastTable from "./components/WeatherForecastTable";
import Location from "./components/Location";
import WeatherSummary from "./components/WeatherSummary";


function App() {
	const [location, setLocation] = useState({latitude: 0, longitude: 0});
	const [initialLocation, setInitialLocation] = useState({latitude: 0, longitude: 0});
	const [weatherForecast, setWeatherForecast] = useState({})
	const [weatherSummary, setWeatherSummary] = useState({})
	const [error, setError] = useState(null);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const currentLocation = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					}
					setLocation(currentLocation);
					setInitialLocation(currentLocation);
				},
				(err) => {
					setError(err.message);
				}
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	}, []);

	useEffect(() => {
		if (location.latitude && location.longitude) {
			const params = {latitude: location.latitude, longitude: location.longitude}

			axios.get('/api/v1/week_forecast', {params})
				.then(response => setWeatherForecast(response.data))

			axios.get('api/v1/week_summary', {params})
				.then(response => setWeatherSummary(response.data));
		}
	}, [location]);

	return (
		<div className="h-100 d-flex flex-column">
			<Navigation/>
			<div className="container flex-grow-1 my-3">
				<Location location={location} initialLocation={initialLocation} handleLocation={setLocation}/>
				<WeatherForecastTable weatherForecast={weatherForecast}/>
				<hr className="my-4"/>
				<WeatherSummary weatherSummary={weatherSummary}/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
