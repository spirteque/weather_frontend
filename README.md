# Weather Application with Photovoltaic Energy Forecast

## Project Description

This React application fetches and displays weather forecasts and photovoltaic energy estimates for the upcoming 7 days. The application is integrated with the [FastAPI backend](https://github.com/spirteque/weather_backend.git) and offers two main functionalities:
1. Automatically fetches user's current location (if browser allows) to display the weather data for that location.
2. Allows users to manually input geographic coordinates to get weather data for any desired location.

The weather data is displayed in a user-friendly format by intuitive tables and icons which represent conditions such as temperature or sunshine duration.

## Main Features and Workflow

- **Geolocation**: Automatically detects user's location using browser's geolocation API. If permission is denied or unavailable, default coordinates are used (`latitude: 0, longitude: 0`).
- **Dynamic API Requests**: Requests are sent to the FastAPI backend whenever the location changes (using Axios).
  - `/api/v1/week_forecast`: 7-day weather forecast and estimated energy production,
  - `/api/v1/week_summary`: summary of weekly weather conditions.
- **User Interactions**:
  - Users can manually update their location through a form,
  - The weather data is updated dynamically based on the provided coordinates.
- **Error and Loading Handling**:
  - Spinner is displayed during data loading,
  - Error messages are shown in case of API error.

## Components Overview

### Main Components:
1. **`Location`**: Allows user to view or update geographic coordinates.
2. **`WeatherForecastTable`**: Displays weekly weather forecast in a table format.
3. **`WeatherSummary`**: Shows a weather summary for the week.

### Data Flow:
  - `location` and `initialLocation`: Current and initial geographic coordinates.
  - `weatherForecast` and `weatherSummary`: API responses for forecast and summary.
  - `weatherForecastLoading`, `weatherSummaryLoading`: Loading states for each API request.
  - `weatherForecastError`, `weatherSummaryError`: API errors.


## Technologies Used

- React 19.0.0
- Bootstrap 5.3.3 (CSS styling)
- Axios (API calls)
- Font Awesome (weather icons)
- Lodash (utility functions)


### Installation and Launch

#### Clone the repository:
```bash
git clone https://github.com/spirteque/weather_frontend.git
cd weather_frontend
```

#### Install dependencies:
```bash
npm install
```

#### Start the development server:
```bash
npm run start
```

#### Build application
```bash
npm run build
```

The application will be available at http://localhost:3000.

## Deployment

The application is publicly accessible.  
Visit: [weather.spirteque.com](https://www.weather.spirteque.com)

## Tests
E2E tests are available: [weather_e2e](https://github.com/spirteque/weather_e2e)

## Notes

- The application does not require API keys or environment variables since all external API calls are managed by the [FastAPI backend](https://github.com/spirteque/weather_backend.git).
- **Future Improvements**:
  - Dark Mode,
  - Map with location selection.

