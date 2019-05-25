import React, {Component} from "react";
import axios from "axios";
import API_key from "../game/keys";
import Slider from "react-slick";
import yelpBusData from '../../data/yelp-business-data';

class YelpMoreInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        pictures: [],
        name: null,
        phone: null,
        rating: null,
        review_count: null,
        url: null
      }
    }

    getYelpPics () {
    let picArray = this.state.pictures.map( ( x, index) => <img key={index} className='slickPics' src={x} /> );
    
      return(
        picArray
      )
      
    }

    componentDidMount(){
      //FETCH REQUEST

      // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${ this.props.id }`, {
      // headers: {
      //   Authorization: `Bearer ${API_key}`
      // }
      // })
      // .then((res) => {
      //   console.log( 'res', res )
      //   this.setState({
      //     data: res.data,
      //     pictures: res.data.photos,
      //     name: res.data.name,
      //     phone: res.data.display_phone,
      //     rating: res.data.rating,
      //     review_count: res.data.review_count,
      //     url: res.data.url
      //   })
      // })
      // .catch((err) => {
      //   console.log ('error')
      // })  

      //  ------ Dummy Data Test -------

      this.setState({
        data: yelpBusData,
        pictures: yelpBusData.photos,
        name: yelpBusData.name,
        phone: yelpBusData.display_phone,
        rating: yelpBusData.rating,
        review_count: yelpBusData.review_count,
        url: yelpBusData.url
      })
    }

    starRating() {
      const baseRate = Math.floor( this.state.rating );
      let rating = [];
      for ( let index = 0 ; index < baseRate ; index++ ){
        rating.push( <i key={ index } className="fas fa-star"></i> )
      }
      if (this.state.rating % 1 !== 0 ) {
        rating.push( <i key={ rating.length } className="fas fa-star-half"></i> )
      }
      if ( rating.length !== 5 ){
        rating.push( <i key={ rating.length } className="far fa-star"></i> )
      }
      return rating
    }
    
    render() {

      var settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
        };

      return (
        <div className='modalContainer'>
          <div className="modalPicContainer">
              <Slider className='slickClass' {...settings}>
                  {this.getYelpPics()}
              </Slider>
          </div>
          <div className="modalBody">
            <div className='modalName'>{this.state.name}</div>
            <div className='modalInfo'>Rating: {this.starRating() } 
              <span className="reviewCount">({this.state.review_count})</span>
            </div>
            {/* <div className='modalInfo'>Review Count: {this.state.review_count}</div> */}
            <div className='modalInfo'>Phone: {this.state.phone}</div>
            <div className='modalInfo'><a href={this.state.url}>Visit Yelp Page</a></div>
          </div>
        </div>
      );
    }
  }

export default YelpMoreInfo;

