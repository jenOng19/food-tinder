import React, {Component} from "react";
import axios from "axios";
import API_key from "./KEYS";
import YelpContainer from "../YelpContainer/YelpContainer";

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        search: '', 
        yelp: [],
        chosen:[]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(res.data.businesses);
        this.setState({yelp: res.data.businesses})
      })
      .catch((err) => {
        console.log ('error')
      })  
    }   

    chosen(food){
      const{chosen}=this.state;
      
      this.setState({...chosen, food})
    }

    renderYelpData () {
      // const chosen={...this.state.yelp};
      const yelpData = this.state.yelp.map( business => {
        console.log('business :', business);
        // for(var food=0; food<2;food++){
        // return <p key={business.id}>{business.name}</p>
        return <YelpContainer name={business.name}
                              image={business.image_url}
                              key={business.name}
                              rating={business.rating}
                              price={business.price}
                              chosen={this.chosen}        
              />
        // }
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

export default Search;
  
