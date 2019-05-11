import React from "react";
import YelpDate from "./API";
import axios from "axios";
import API_key from "./KEYS";

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = { search: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    getYelpData () {
      const yelpDataFromApi = this.yelpDate(this.state.search);
      this.setState({yelp : yelpDataFromApi });
    }
    yelpDate (location) {
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
      headers: {
        Authorization: `Bearer ${API_key}`
      },
      params: {
        categories: 'lunch',
      }
      })
      .then((res) => {
      console.log(res.data.businesses);
      })
      .catch((err) => {
      console.log ('error')
      })  
    }   
    renderYelpData () {
      const yelpData = this.state.yelp.map( business => {
        console.log('business :', business);
        return <p>{business.name}</p>
      })
      return yelpData;
    }
    handleChange(event) {
      this.setState({ search: event.target.value });
    }
    handleSubmit(event) {
      event.preventDefault();
      console.log('this.state :', this.state);
      this.getYelpData();
      this.renderYelpData();
    }
    render() {
      const {yelp} = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            search :
            <input type="text" value={this.state.search} onChange={this.handleChange} />
            <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
            <div className='yelp'>{this.state.yelp? this.renderYelpData : 'loading'}</div>
          </label>
        </form>
      );
    }
  }

export default Search;
  
