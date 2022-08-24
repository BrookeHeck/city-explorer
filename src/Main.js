import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import City from './City.js';
import Error from './Error.js';
import './Main.css';
import SelectedMap from './SelectedMap.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      cityData: [],
      cityCards: [],
      mapUrl: [],
      error: false,
      showMap: false,
      selectedCity: {},
      weatherData: []
    }
  }

  handleSearchBar = (e) => {
    e.preventDefault();
    this.setState({searchString: e.target.value});
  }

  setMapUrl = () => {
    if(!this.state.error) {
      let newArr = [...this.state.mapUrl]
      try {
        newArr.unshift( `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData[0].lat},${this.state.cityData[0].lon}&zoom=12`);
        this.setState( {mapUrl:newArr}, this.createCityCards);
      } catch(e) {
        console.log('Error: ', e);
        this.setState({error: true});
      }
    }
  }

  removeCity = cityName => {
    let cityIndex = -1;
    let newCityArr = this.state.cityData.reduce((accumulator, city) => {
      if(city.display_name !== cityName) accumulator.push(city);
      else cityIndex = accumulator.length;
      return accumulator;
    }, []);
    let newMapArr = this.state.mapUrl;
    newMapArr.splice(cityIndex, 1);
    let newWeatherArr = this.state.weatherData;
    newWeatherArr.splice(cityIndex, 1);
    this.setState({cityData: newCityArr, mapUrl: newMapArr, weatherData: newWeatherArr}, this.createCityCards);
  }

  createCityCards() {
    this.setState(
      {cityCards: this.state.cityData.map((city, idx) => (
          <City 
            cityData={city}
            mapUrl={this.state.mapUrl[idx]}
            key={city.place_id}
            removeCity={this.removeCity}
            handleMapSelect={this.handleMapSelect}
            weatherData={this.state.weatherData[idx]}
          />
        ))
      });
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchString}&format=json`);
      let newArr = [...this.state.cityData];
      newArr.unshift(response.data[0]);
      this.setState({
        cityData: newArr,
        error: false}, this.handleWeatherSubmit);
    } catch(error) {
      console.log('Error: ', error);
      this.setState({error: true});
    }
  }

  handleMapSelect = (cityName, map) => {
    this.setState({selectedCity: {cityName: cityName, map: map}}, this.showMapModal);
  }

  showMapModal = () => {
    this.setState({showMap: true})
  }

  closeErrorModal = () => {
    this.setState({error: false});
  }

  closeMapModal = () => {
    this.setState({showMap: false})
  }

  handleWeatherSubmit = async () => {
    try {
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${this.state.cityData[0].lat}&lon=${this.state.cityData[0].lon}`);
      let newWeatherData = this.state.weatherData;
      newWeatherData.unshift(weatherData.data);
      this.setState({weatherData: newWeatherData}, this.setMapUrl);
    } catch(e) {
      console.log('Error: ', e);
      let cityData = this.state.cityData;
      cityData.shift();
      this.setState({error: true, cityData: cityData});
    }
  }

  
  render() {
    return(
      <main>
        <Form id="searchForm">
          <Form.Group className="mb-3">
            <Form.Label htmlFor='citySearch'>Search</Form.Label>
            <Form.Control type="text" placeholder="City" id='citySearch' name='citySearch' onChange={this.handleSearchBar}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleCitySubmit}>
            Explore!
          </Button>
        </Form>
        <section id='cityCards'>
          {this.state.cityCards}
        </section>
        <SelectedMap closeMapModal={this.closeMapModal} cityName={this.state.selectedCity.cityName} map={this.state.selectedCity.map} showMap={this.state.showMap}/>
        <Error error={this.state.error} closeErrorModal={this.closeErrorModal}/>
      </main>
    );
  }
}

export default Main;