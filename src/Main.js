import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import City from './City.js';
import Error from './Error.js';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      cityData: {},
      mapUrl: '',
      error: false
    }
  }

  handleSearchBar = (e) => {
    e.preventDefault();
    this.setState({searchString: e.target.value});
  }

  setMapUrl = () => {
    if(!this.state.error) {
      this.setState( {mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`});
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchString}&format=json`);
      this.setState({
        cityData: response.data[0],
        error: false}, this.setMapUrl);
    } catch(error) {
      console.log('Error: ', error);
      this.setState({error: true});
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
          {!this.state.error ? (JSON.stringify(this.state.cityData) === '{}' ? null : <City cityData={this.state.cityData} mapUrl={this.state.mapUrl}/>) : <Error/>}
        </section>
      </main>
    );
  }
}

export default Main;