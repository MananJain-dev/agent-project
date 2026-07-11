import {
    Thermometer,
    Droplets,
    Wind,
    Gauge,
    Sunrise,
    Sunset,
} from "lucide-react";

function WeatherCard({ weather }) {
    if (!weather) {
        return (
            <div className="bg-white rounded-3xl shadow-xl p-10 mb-8 text-center">

                <h2 className="text-3xl font-bold text-slate-800">
                    🌤 Welcome!
                </h2>

                <p className="text-slate-500 mt-3">
                    Ask about any city's weather to get started.
                </p>

            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

            {/* Top Section */}

            <div className="flex flex-col md:flex-row justify-between items-center">

                <div className="flex items-center gap-5">

                    <img
                        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                        alt={weather.description}
                        className="w-28 h-28"
                    />

                    <div>

                        <h2 className="text-4xl font-bold text-slate-800">
                            {weather.city}
                        </h2>

                        <p className="text-slate-500">
                            {weather.country}
                        </p>

                        <p className="capitalize text-lg mt-2">
                            {weather.description}
                        </p>

                    </div>

                </div>

                <div className="text-center mt-6 md:mt-0">

                    <h1 className="text-7xl font-bold text-blue-600">
                        {Math.round(weather.temperature)}°
                    </h1>

                    <p className="text-slate-500">
                        Current Temperature
                    </p>

                </div>

            </div>

            {/* Metrics */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">

                <MetricCard
                    icon={<Thermometer />}
                    label="Feels Like"
                    value={`${Math.round(weather.feelsLike)}°C`}
                />

                <MetricCard
                    icon={<Droplets />}
                    label="Humidity"
                    value={`${weather.humidity}%`}
                />

                <MetricCard
                    icon={<Wind />}
                    label="Wind"
                    value={`${weather.windSpeed} m/s`}
                />

                <MetricCard
                    icon={<Gauge />}
                    label="Pressure"
                    value={`${weather.pressure} hPa`}
                />

                <MetricCard
                    icon={<Sunrise />}
                    label="Sunrise"
                    value={weather.sunrise}
                />

                <MetricCard
                    icon={<Sunset />}
                    label="Sunset"
                    value={weather.sunset}
                />

            </div>

        </div>
    );
}

function MetricCard({ icon, label, value }) {
    return (
        <div className="bg-slate-100 rounded-2xl p-5">

            <div className="text-blue-600 mb-3">

                {icon}

            </div>

            <p className="text-slate-500 text-sm">

                {label}

            </p>

            <h3 className="text-xl font-bold mt-1">

                {value}

            </h3>

        </div>
    );
}

export default WeatherCard;