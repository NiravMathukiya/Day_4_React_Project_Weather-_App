import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Footer from './components/Footer'

const API_KEY = '30b8388b93194aa9b2a175627240909'; // Replace with your WeatherAPI key

function App() {
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');

  // Function to fetch weather data based on location
  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
      const data = await response.json();

      // Log the data to check its structure
      console.log('Weather data:', data);

      // Check if the response contains the required data
      if (data && data.current) {
        setWeatherDataList((prevList) => [
          ...prevList,
          {
            city: data.location.name,
            temp: data.current.temp_c,
            wind: data.current.wind_kph,
            status: data.current.condition.text,
            time: new Date().toLocaleTimeString(),
            icon: data.current.condition.icon,
          },
        ]);
      } else {
        console.error('Incomplete weather data:', data);
        alert('Could not fetch weather details. Please try another location.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('An error occurred while fetching weather data.');
    }
  };

  // Fetch weather data for current location
  useEffect(() => {
    // Attempt to get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        useEffect(() => {
          // Function to handle successful location retrieval
          const success = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lon: longitude });
          };

          // Function to handle errors
          const error = (err) => {
            setError(err.message);
            console.error('Error getting location:', err);
          };

          // Check if Geolocation API is available
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
          } else {
            setError('Geolocation is not supported by this browser.');
          }
        }, []);
      },
      (error) => {
        console.error('Error getting location:', error);
        // Fallback: Set default location if geolocation fails
        fetchWeatherData('Surat'); // Replace with a default location if desired
      }
    );
  }, []);

  // Handle the search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeatherData(searchLocation);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
        <Header />
        <div className="flex justify-center mt-6 ">
          <form onSubmit={handleSearch} className="flex items-center space-x-4">
            <input
              type="text"
              className="p-2 border border-gray-400   rounded bg-gray-800 text-white"
              placeholder="Search location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600" type="submit">
              Search
            </button>
          </form>
        </div>
    

      <div className="flex flex-wrap justify-center mt-10 space-x-4">
        {weatherDataList.length > 0 ? (
          weatherDataList.map((weatherData, index) => (
            <WeatherCard
              key={index}
              city={weatherData.city}
              temp={weatherData.temp}
              wind={weatherData.wind}
              status={weatherData.status}
              time={weatherData.time}
              icon={weatherData.icon}
            />
          ))
        ) : (
          <p className="text-center text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text h-[300px]">
            Search location to find the weather
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
