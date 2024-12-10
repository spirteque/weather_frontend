import {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WeatherForecastTable from "./components/WeatherForecastTable";
import Location from "./components/Location";
import WeatherSummary from "./components/WeatherSummary";
import Separator from "./components/Separator";
import Spinner from "./components/Spinner";

// TODO refactor

function App() {
	const [location, setLocation] = useState({latitude: 0, longitude: 0});
	const [initialLocation, setInitialLocation] = useState({latitude: 0, longitude: 0});
	const [initialLocationLoading, setInitialLocationLoading] = useState(true);
	const [weatherForecast, setWeatherForecast] = useState({})
	const [weatherForecastLoading, setWeatherForecastLoading] = useState(true);
	const [weatherForecastError, setWeatherForecastError] = useState(null);
	const [weatherSummary, setWeatherSummary] = useState({})
	const [weatherSummaryLoading, setWeatherSummaryLoading] = useState(true);
	const [weatherSummaryError, setWeatherSummaryError] = useState(null);

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
					setInitialLocationLoading(false);
				},
				(err) => {
					const currentLocation = {latitude: 0, longitude: 0};

					setLocation(currentLocation);
					setInitialLocation(currentLocation)
					setInitialLocationLoading(false);
				},
			);
		}
	}, []);

	useEffect(() => {
		if (location.latitude !== '' && location.longitude !== '') {
			const params = {latitude: location.latitude, longitude: location.longitude}

			axios.get('/api/v1/week_forecast', {params})
				.then(response => {
					setWeatherForecastError(null)
					setWeatherForecast(response.data);
					setWeatherForecastLoading(false);
				})
				.catch(e => {
					setWeatherForecastError(e);
					setWeatherForecast({});
					setWeatherForecastLoading(false);
				})

			axios.get('api/v1/week_summary', {params})
				.then(response => {
					setWeatherSummaryError(null);
					setWeatherSummary(response.data);
					setWeatherSummaryLoading(false);
				})
				.catch(e => {
					setWeatherSummary({});
					setWeatherSummaryError(e);
					setWeatherSummaryLoading(false);
				});
		}
	}, [location]);

	return (
		<div className="h-100 d-flex flex-column">
			<Navigation/>
			<div className="container flex-grow-1 my-3">
				{initialLocationLoading
					? <Spinner fullHeight={true}/>
					: (<>
							<Location location={location}
									  initialLocation={initialLocation}
									  handleLocation={setLocation}
									  initialLocationLoading={initialLocationLoading}/>
							<Separator/>
							<WeatherForecastTable weatherForecast={weatherForecast}
												  weatherForecastLoading={weatherForecastLoading}
												  weatherForecastError={weatherForecastError}/>
							<Separator/>
							<WeatherSummary weatherSummary={weatherSummary}
											weatherSummaryLoading={weatherSummaryLoading}
											weatherSummaryError={weatherSummaryError}/>
						</>)}
			</div>
			<Footer/>
		</div>
	);
}

export default App;
