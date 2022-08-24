import React from 'react'

class Weather extends React.Component {
  weatherArr = [`Date: ${this.props.weatherData.date}`, `Temp: ${this.props.weatherData.temp}`, `Description: ${this.props.weatherData.description}`];
  render() {
    return (
      <>
        <ul>
          {this.weatherArr.map(data => <li>{data}</li>)}
        </ul>
      </>
    );
  }
}

export default Weather;