import {useEffect, useState} from "react";
import isNumber from "lodash-es/isNumber";

export default function Location({location, initialLocation, handleLocation}) {
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')

	useEffect(() => {
		if (isNumber(location.latitude)) {
			setLatitude(`${location.latitude}`)
		}

		if (isNumber(location.longitude)) {
			setLongitude(`${location.longitude}`)
		}
	}, [location]);

	return (
		<>
			<div className="row mb-5">
				<div className="col-12 col-md-6 col-lg-6 mb-5 mb-md-0">
					<h3>Your location</h3>
					<div className="overflow-hidden rounded">
						<table className="table table-striped mb-0">
							<thead>
							<tr className="bg-blue-900">
								<th scope="row">Latitude</th>
								<th scope="row">Longitude</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th scope="row">{initialLocation.latitude}</th>
								<th scope="row">{initialLocation.longitude}</th>
							</tr>
							</tbody>
						</table>
					</div>

				</div>
				<div className="col-12 col-md-6 col-lg-6">
					<h3>Selected location</h3>
					<div className="mb-3">
						<label htmlFor="latitude-input" className="form-label">Latitude</label>
						<input type="text"
							   className="form-control"
							   value={latitude}
							   onChange={(e) => setLatitude(e.target.value)}
							   id="latitude-input"/>
					</div>
					<div className="mb-3">
						<label htmlFor="longitude-input" className="form-label">Longitude</label>
						<input type="text"
							   className="form-control"
							   value={longitude}
							   onChange={(e) => setLongitude(e.target.value)}
							   id="longitude-input"/>
					</div>
					<button type="button" className="btn btn-dark bg-blue-900"
							onClick={() => handleLocation({latitude, longitude})}>Update location
					</button>
				</div>
			</div>
		</>
	)
}