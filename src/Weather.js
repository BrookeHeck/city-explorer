import React from 'react'

class Weather extends React.Component {
  render() {
    
    return (
      <>
        <p>Weather</p>
        <ul>
          {
            this.props.weatherData.map(forecast => <li>{`${forecast.date}: ${forecast.description}`}</li>)
          }
        </ul>
      </>
    );
  }
}

export default Weather;