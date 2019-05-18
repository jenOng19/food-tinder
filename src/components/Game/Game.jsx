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
        yelp: null,
        bracket: [],
        param: '',
        error: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clickHandler = this.clickHandler.bind( this );
      this.getYelpData = this.getYelpData.bind(this);
      this.handleClick = this.handleClick.bind(this);
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
        term : this.state.param
      }
      })
      .then((res) => {
        this.setState({yelp: res.data.businesses})
      })
      .catch((err) => {
        this.setState({error: true})
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
      // this.setState({ param: event.target.value}, () => {
      //   console.log('this.state.param :', this.state.param);})
      // this.getYelpData();
      // this.renderYelpData();
    }    
    handleClick(event) {
      const keyword = event.target.getAttribute('value')
      this.setState({param: keyword }, () => {  
        this.getYelpData();})      
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              search :
              <input type="text" value={this.state.search} onChange={this.handleChange} /><p className="error"></p>
              <br/>
          </label> 
          </form>              
              <button value="Koreanfood" className="food" dataid="restaurant" onClick={this.handleClick}>Korean Food</button>
              <button value="mexicanfood" className="drink" dataid="drink" onClick={this.handleClick}>Mexican Food</button>
              <button value="americanfood" className="drink" dataid="drink" onClick={this.handleClick}>AmericanFood</button>
              <button value="desert" className="desert" dataid="desert" onClick={this.handleClick}>Desert</button>
              <button value="tea" className="desert" dataid="desert" onClick={this.handleClick}>Tea</button>
              <button value="bar" className="drink" dataid="drink" onClick={this.handleClick}>Drink</button>
              <div>{this.state.yelp ? this.renderYelpData():'loading'}</div>
              
        </div>
        
      );
    }
  }

export default Game;
  
