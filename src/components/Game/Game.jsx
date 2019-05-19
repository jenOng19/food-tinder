import React, {Component} from "react";
import axios from "axios";
import API_key from "./keys";
import YelpContainer from "../yelp-container/yelp-container";
import './game.css';

class Game extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        search: '', 
        filter: '',
        yelp: [],
        bracket: [],
        round: 0
      };
      this.limit = null;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clickHandler = this.clickHandler.bind( this );
      this.handleRandomPick=this.handleRandomPick.bind(this)
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
        // 8 , 16 , 32 bracket
        limit: 16
      }
      })
      .then((res) => {
        this.setState({
          yelp: res.data.businesses,
          round: this.state.round + 1
        }, () => {
          this.limit = this.state.yelp.length / 2
        })
      })
      .catch((err) => {
        console.log ('error')
      })  
    } 
    
    handleRandomPick(){
      const yelpData = [...this.state.yelp];
      const bracket = yelpData.slice(0 , 2)
      console.log('bracket', bracket)
      const pick=Math.floor(Math.random()* 2);
      this.clickHandler(bracket[pick].id)
    }

    clickHandler( id ) {
      const chosenOne = this.state.yelp.findIndex( restaurant => {
        return restaurant.id === id;
      })
      const updatedYelp = this.state.yelp.slice( 2 , this.state.yelp.length );
      this.setState({ 
        yelp: updatedYelp,
        bracket: [...this.state.bracket, this.state.yelp[chosenOne]]
      }, this.nextRound );
    }

    nextRound() {
      console.log( this.state )
      if ( this.state.bracket.length === this.limit ) 
        return ( this.state.bracket.length === 1 && this.state.yelp.length === 0) 
          ? this.setState( {
            yelp: [...this.state.bracket ],
            bracket: [],
            round: 'Winner'} )
          : this.setState( {
            yelp: [...this.state.bracket ],
            bracket: [],
            round: this.state.round + 1}, () => {
            this.limit = this.state.yelp.length / 2
          })
      
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
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              search :
              <input type="text" value={this.state.search} onChange={this.handleChange} />
              <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
              { (this.state.yelp.length > 0) ? <h1>Round: {this.state.round}</h1> : null}
              <div>{this.state.yelp ? this.renderYelpData():'loading'}</div>
            </label>
          </form>
          <button className={this.state.yelp.length>=1?'random-button':'hide'} onClick={this.handleRandomPick}>Pick for Me!</button>
        </div>
      );
    }
  }

export default Game;
  
