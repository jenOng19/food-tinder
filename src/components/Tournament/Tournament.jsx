import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import yelpFakeApi from '../../data/yelpdata.js';
import YelpContainer from '../YelpContainer/YelpContainer'

class Tournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bracket: null
        };
        // this.handleClick=this.handleClick.bind(this);
    }

    // handleClick() {
    // this.setState(state => ({
    //   isClicked: !state.isClicked   
    //     }));
    // }

    // callApi() {
    //     this.setState( {bracket: yelpFakeApi.businesses});
    // }

    componentDidMount() {
        const getYelpData = yelpFakeApi['businesses'].map( restaurant => {
            return restaurant
        });
        
        this.setState({ bracket: getYelpData })
    }

    // getFourRestuarantApi() {

        //    console.log(this.state.bracket);
        //    const cutrestaurantData = this.state.bracket.splice(0,4)
        //    const restaurant = cutrestaurantData.map( restaurant => {
        //       return (
        //       <YelpContainer 
        //                 name={restaurant.name}
        //                 image={restaurant.image_url}
        //                 // location={restaurant.coordinates}
        //                 // rating={restaurant.rating}
        //                 // keyrestaurant.id   
        //             />
        //             )
        //    })
    // }

    render() {
        // console.log('render:', this.state.bracket);
        return (
            <div>
                <div className="tournamentHeader">
                    <h1>Tournament</h1>
                </div>
                <YelpContainer data={this.state.bracket} />
            </div>
        )
        // {/* <YelpContainer data={this.state.bracket} /> */}
    }
}

export default Tournament