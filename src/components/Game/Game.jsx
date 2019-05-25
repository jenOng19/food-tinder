import React, {Component} from "react";
import axios from "axios";
import API_key from "./keys";
import Header from '../layout';
import FoodChoiceButtons from './food-buttons';
import YelpContainer from "../yelp-container/yelp-container";
import './game.css';

class Game extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        search: '', 
        filter: '',
        gameStart: false,
        yelp: [],
        bracket: [],
        round: 0,
        param: '',
        error: false
      };
      this.getYelpData = this.getYelpData.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.limit = null;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clickHandler = this.clickHandler.bind( this );
      this.handleRandomPick=this.handleRandomPick.bind(this)
    }

    getYelpData() {
      this.yelpDate(this.state.search);
    }

    yelpDate(location) {
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
      headers: {
        Authorization: `Bearer ${API_key}`
      },
      params: {
        term : this.state.param,
        limit: 8
      }
      })
      .then((res) => {
        this.setState({
          yelp: res.data.businesses,
          round: this.state.round + 1,
          gameStart: true
        }, () => {
          this.limit = this.state.yelp.length / 2
        })
      })
      .catch((err) => {
        this.setState({error: true})
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

    renderYelpData() {
      console.log('this.state.yelp :', this.state.yelp);
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
      console.log('this.state after change :', this.state);
    }

    handleSubmit(event) {
      event.preventDefault(); 
    }    
    handleClick(event) {
      const keyword = event.target.getAttribute('value')
      this.setState({param: keyword }, () => {  
        this.getYelpData()})      
    }

    render() {
      return (
        <div>
          <Header />
          {!this.state.gameStart ? <div className="search">
            <form className="search__form" onSubmit={this.handleSubmit}>
              <label>
                search :
                <input className = "input__form" type="text" value={this.state.search} onChange={this.handleChange} /><p className="error"></p>
                <br/>
            </label> 
            </form>  
            <FoodChoiceButtons choice={this.handleClick} />
          </div> : null}
          <div>
            { this.state.yelp.length > 0 ? <h1>Round { this.state.round }</h1> : null}
            <div className="section__container">{this.state.yelp ? this.renderYelpData():'loading'}</div>
            <button className={this.state.yelp.length>=1?'random-button':'hide'} onClick={this.handleRandomPick}>Pick for Me!</button>
            { this.state.bracket.length === 1 && <button>Reset</button>}
          </div>
        </div>
        
      )
    }
} 

export default Game;
