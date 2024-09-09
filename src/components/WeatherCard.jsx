import React from 'react';

const WeatherCard = ({ city, temp, wind, status, time, icon }) => {
  return (
    <div className="bg-gray-800 w-54  p-6 mt-4 rounded-lg shadow-lg ">
      <div className="flex flex-col items-center gap-2">
        <img
          src={`https:${icon}`} // Use the icon URL from WeatherAPI
          alt={status}
          className="w-24 h-24 mb-4"
        />
        <h2 className="text-2xl font-bold">{city}</h2>
        <p className="text-xl">{temp}°C</p>
        <p className="text-sm">Wind: {wind} kph</p>
        <p className="text-sm">{status}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
