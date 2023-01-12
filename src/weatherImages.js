// Rain
import dayRain from "./assets/images/weatherIcons/forecast_sun_cloud_weather_raining.png";
import nightRain from "./assets/images/weatherIcons/cloud_moon_night_forecast_weather_raining.png";
import rain from "./assets/images/weatherIcons/forecast_rain_cloud_weather_raining.png";
import drip from "./assets/images/weatherIcons/weather_drip_forecast_drop_cloud.png";
// Cloud
import dayCloud from "./assets/images/weatherIcons/cloudy_sunny_forecast_sun_cloud_weather.png";
import nightCloud from "./assets/images/weatherIcons/moon_night_weather_cloud_cloudy.png";
import cloud from "./assets/images/weatherIcons/cloud_weather_forecast_rain_cloudy.png";
import foggyCloud from "./assets/images/weatherIcons/weather_foggy_cloudy_forecast_cloud.png";
// Neutral
import sun from "./assets/images/weatherIcons/sunny_sun_weather_climate_forecast.png";
import moon from "./assets/images/weatherIcons/forecast_moon_weather_night_crescent_climate.png";
import wind from "./assets/images/weatherIcons/forecast_weather_lightning_thunder_climate.png";
import fog from "./assets/images/weatherIcons/cloudy_sunny_forecast_sun_cloud_weather.png";
// Lightning
import lightning from "./assets/images/weatherIcons/forecast_weather_lightning_thunder_climate.png";
import lightningCloud from "./assets/images/weatherIcons/weather_cloudy_lightning_cloud_forecast.png";
// Snow
import snowCloud from "./assets/images/weatherIcons/snowflake_weather_winter_snowing_snow_forecast.png";
import snowfall from "./assets/images/weatherIcons/snow_snowflake_cloud_weather_winter_cloudy.png";
import snowflake from "./assets/images/weatherIcons/weather_winter_snow_forecast_snowflake_snowy.png";



export function updateImage(image) {
    const img = document.getElementById('weather-image');
    img.src = image
}

updateImage(nightCloud)