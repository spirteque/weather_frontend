import WeatherIcon from "./WeatherIcon";
import WeekDay from "./WeekDay";
import Date from "./Date";
import Spinner from "./Spinner";
import Error from "./Error";
import isEmpty from "lodash-es/isEmpty";

export default function WeatherForecastTable({weatherForecast, weatherForecastLoading, weatherForecastError}) {
	const header = <h3 className="mb-3">Your week forecast</h3>;

	if (weatherForecastLoading) {
		return (
			<>
				{header}
				<Spinner/>
			</>
		)
	}

	if (weatherForecastError) {
		return (
			<>
				{header}
				<Error/>
			</>
		)
	}

	if (!isEmpty(weatherForecast)) {
		return (
			<>
				{header}
				<div className="overflow-x-auto rounded">
					<table className="table table-striped mb-0">
						<thead>
						<tr className="bg-blue-900">
							<th scope="col"></th>
							{weatherForecast.days?.map(day => {
								return (
									<th key={day.day} scope="col" className="align-middle">
										<WeekDay day={day.day}/>
									</th>
								)
							})}
						</tr>
						</thead>
						<tbody>
						<tr>
							<th scope="row">Date</th>
							{weatherForecast.days?.map(day => {
								return (
									<th key={day.day} scope="col" className="align-middle">
										<Date date={day.time}/>
									</th>
								)
							})}
						</tr>
						<tr>
							<th scope="row" className="py-3">Weather</th>
							{weatherForecast.days?.map(day => {
								return (
									<th key={day.day} scope="col" className="align-middle py-3">
										<WeatherIcon weatherType={day.weather_type} size="xl"/>
									</th>
								)
							})}
						</tr>
						<tr>
							<th scope="row">Max [{weatherForecast.temp_max_unit}]</th>
							{weatherForecast.days?.map(day => {
								return (
									<th key={day.day} scope="col" className="align-middle">{day.temp_max}</th>
								)
							})}
						</tr>
						<tr>
							<th scope="row">Min [{weatherForecast.temp_min_unit}]</th>
							{weatherForecast.days?.map(day => {
								return (
									<th key={day.day} scope="col" className="align-middle">{day.temp_min}</th>
								)
							})}
						</tr>
						<tr>
							<th scope="row">
								<span> Generated<br/> energy [{weatherForecast.generated_energy_unit}]</span>
							</th>
							{weatherForecast.days?.map(day => {
								return (
									<th key={day.day} scope="col" className="align-middle">
										<span>{day.generated_energy}</span>
									</th>
								)
							})}
						</tr>
						</tbody>
					</table>
				</div>
			</>
		)
	}
}