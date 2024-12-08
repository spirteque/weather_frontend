import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faArrowsDownToLine, faCircleInfo,
	faSolarPanel,
	faTemperatureEmpty,
	faTemperatureFull
} from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";
import capitalize from 'lodash-es/capitalize'
import Spinner from "./Spinner";
import Error from "./Error";
import isEmpty from "lodash-es/isEmpty";


export default function WeatherSummary({weatherSummary, weatherSummaryLoading, weatherSummaryError}) {
	const header = <h3 className="mb-3">Your week summary</h3>;

	if (weatherSummaryLoading) {
		return (
			<>
				{header}
				<Spinner/>
			</>
		)
	}

	if (weatherSummaryError) {
		return (
			<>
				{header}
				<Error/>
			</>
		)
	}

	if (!isEmpty(weatherSummary)) {
		const mean_sunshine_duration_in_minutes = weatherSummary.mean_sunshine_duration / 60
		const sunshine_minutes = mean_sunshine_duration_in_minutes % 60
		const sunshine_hours = (mean_sunshine_duration_in_minutes - sunshine_minutes) / 60;

		return (
			<>
				{header}

				<div className="row mb-3">
					<div className="col-12 col-md-6 col-lg-3">
						<div className="bg-blue-900 m-1 rounded d-flex p-4 flex-column gap-3 h-100">
						<span className="d-flex align-items-center">
							<FontAwesomeIcon icon={faTemperatureFull} size={"2x"} className="me-3"/>
							Max: {weatherSummary.temp_max_week} [{weatherSummary.temp_max_unit}]
						</span>
							<span className="d-flex align-items-center">
							<FontAwesomeIcon icon={faTemperatureEmpty} size={"2x"} className="me-3"/>
							Min: {weatherSummary.temp_min_week} [{weatherSummary.temp_min_unit}]
						</span>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-3 mt-3 mt-md-0">
						<div className="bg-blue-900 m-1 rounded p-4 h-100 d-flex">
						<span className="d-flex align-items-center">
							<FontAwesomeIcon icon={faArrowsDownToLine} size={"2x"} className="me-3"/>
							{weatherSummary.mean_pressure} [{weatherSummary.pressure_msl_unit}]
						</span>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
						<div className="bg-blue-900 m-1 rounded p-4 h-100 d-flex">
						<span className="d-flex align-items-center">
							<FontAwesomeIcon icon={faSolarPanel} size={"2x"} className="me-3"/>
							{(sunshine_hours ? sunshine_hours : 0) + "h"} {(sunshine_minutes ? Math.round(sunshine_minutes) : 0) + "min"}
						</span>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
						<div className="bg-blue-900 m-1 rounded p-4 h-100 d-flex">
						<span className="d-flex align-items-center">
							<FontAwesomeIcon icon={faCircleInfo} size={"2x"} className="me-3"/>
							<div className="d-flex flex-column">
								{weatherSummary?.weather_types?.map(weatherType => {
									return (<p key={weatherType}
											   className="mb-0">{capitalize(weatherType.replaceAll('_', ' '))}</p>)
								})}
							</div>
						</span>
						</div>
					</div>
				</div>
			</>
		)
	}
}