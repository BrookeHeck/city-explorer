import React from 'react'

class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData);
    return (
      <>
        <p>Weather</p>
        <ul>
          {
            this.props.weatherData.map((forecast, idx) => <li key={idx}>{`${forecast.date}: ${forecast.description}`}</li>)
          }
        </ul>
      </>
    );
  }
}

export default Weather;