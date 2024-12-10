import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faCloud, faCloudBolt,
	faCloudRain,
	faCloudShowersWater, faCloudSunRain,
	faDroplet, faSmog,
	faSnowflake,
	faSun
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon({weatherType, size}) {
	switch (weatherType) {
		case 'CLEAR_SKY': return (<FontAwesomeIcon icon={faSun} size={size}/>)
		case 'CLOUDY': return (<FontAwesomeIcon icon={faCloud} size={size}/>)
		case 'FOG': return (<FontAwesomeIcon icon={faSmog} size={size}/>)
		case 'DRIZZLE': return (<FontAwesomeIcon icon={faCloudSunRain} size={size}/>)
		case 'FREEZING_DRIZZLE': return (<FontAwesomeIcon icon={faCloudSunRain} size={size}/>)
		case 'RAIN': return (<FontAwesomeIcon icon={faCloudSunRain} size={size}/>)
		case 'FREEZING_RAIN': return (<FontAwesomeIcon icon={faCloudRain} size={size}/>)
		case 'SNOW': return (<FontAwesomeIcon icon={faSnowflake} size={size}/>)
		case 'SNOW_GRAINS': return (<FontAwesomeIcon icon={faSnowflake} size={size}/>)
		case 'RAIN_SHOWERS': return (<FontAwesomeIcon icon={faCloudShowersWater} size={size}/>)
		case 'SNOW_SHOWERS': return (<FontAwesomeIcon icon={faSnowflake} size={size}/>)
		case 'THUNDERSTORM': return (<FontAwesomeIcon icon={faCloudBolt} size={size}/>)
		case 'THUNDERSTORM_WITH_HAIL': return (<FontAwesomeIcon icon={faCloudBolt} size={size}/>)
	}
}