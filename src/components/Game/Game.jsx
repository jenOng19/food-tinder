import React, {Component} from "react";
import axios from "axios";
import API_key from "./KEYS";
import YelpContainer from "../YelpContainer/YelpContainer";
import './Game.css';

class Game extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        search: '', 
        yelp: [],
        bracket: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clickHandler = this.clickHandler.bind( this );
    }
    getYelpData () {
      this.yelpDate(this.state.search);
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
        this.setState({yelp: res.data.businesses})
      })
      .catch((err) => {
        console.log ('error')
      })  
    }   

    clickHandler( id ) {
      const chosenOne = this.state.yelp.findIndex( restaurant => {
        return restaurant.id === id;
      })
      const updatedYelp = this.state.yelp.slice( 2 , this.state.yelp.length );
      this.setState({ 
        yelp: updatedYelp,
        bracket: [...this.state.bracket, this.state.yelp[chosenOne]]}, () => console.log(this.state.bracket))
    }

    renderYelpData () {
      const yelpData = [...this.state.yelp];
      const bracket = yelpData.slice(0 , 2)
      const yelpBracket = bracket.map( business => {
        return <YelpContainer name={business.name}
                              image={business.image_url}
                              key={business.name}
                              id={ business.id}
                              rating={business.rating}
                              price={business.price} 
                              click={ this.clickHandler }   
              />
      })
      return yelpBracket;
    }
    handleChange(event) {
      this.setState({ search: event.target.value });
    }
    handleSubmit(event) {
      event.preventDefault();
      this.getYelpData();
      this.renderYelpData();
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            search :
            <input type="text" value={this.state.search} onChange={this.handleChange} />
            <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
            <div>{this.state.yelp ? this.renderYelpData():'loading'}</div>
          </label>
        </form>
      );
    }
  }

export default Game;
  
