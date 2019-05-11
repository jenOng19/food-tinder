import React from "react";
import YelpDate from "./API";

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = { search: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({ search: event.target.value });
    }
    handleSubmit(event) {
      event.preventDefault();
      console.log('this.state :', this.state);
      <YelpDate location ={this.state.search}/>
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            search :
            <input type="text" value={this.state.search} onChange={this.handleChange} />
            <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
            {/* <p>{JSON.parse(yelp_date)}</p> */}
          </label>
        </form>
      );
    }
  }

export default Search;
  
