import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import City from './City.js';
import Error from './Error.js'

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
    this.setState({searchString: e.target.value}, ()=>console.log(this.state.searchString))
  }

  setMapUrl = () => {
    console.log(this.state.mapUrl);
    this.setState( {mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`});
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchString}&format=json`);
      this.setState({
        cityData: response.data[0],
        error: false}, this.setMapUrl);
    } catch(error) {
      console.log(error);
      this.setState({error: true});
    }
  }


  
  render() {
    return(
      <main>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor='citySearch'>Search</Form.Label>
            <Form.Control type="text" placeholder="City" id='citySearch' name='citySearch' onChange={this.handleSearchBar}/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleCitySubmit}>
            Explore!
          </Button>
        </Form>
        {!this.state.error ? <City cityData={this.state.cityData} map={this.state.mapUrl}/> : <Error/>}
      </main>
    );
  }
}

export default Main;