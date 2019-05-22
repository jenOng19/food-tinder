import React, {Component} from "react";
import axios from "axios";
import API_key from "../game/keys";
import Slider from "react-slick";

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
      console.log("this data: ", this.state.data)

    let picArray = this.state.pictures.map( x => <div key={x} className="yelpMoreInfoPic"><img src={x} /></div>);
    
      return(
        picArray
      )
      
    }

    componentDidMount(){
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${ this.props.id }`, {
      headers: {
        Authorization: `Bearer ${API_key}`
      }
      })
      .then((res) => {
        console.log( 'res', res )
        this.setState({
          data: res.data,
          pictures: res.data.photos,
          name: res.data.name,
          phone: res.data.display_phone,
          rating: res.data.rating,
          review_count: res.data.review_count,
          url: res.data.url
        })
      })
      .catch((err) => {
        console.log ('error')
      })  
    }
    
    render() {

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
        };

      return (
        <div>
          <div>Name: {this.state.name}</div>
          <div>Rating: {this.state.rating}</div>
          <div>Phone: {this.state.phone}</div>
          <div>Review Count: {this.state.review_count}</div>
          <div><a href={this.state.url}>Visit Yelp Page</a></div>
          
          <div>Pics:
            <div id="yelpMorePics">
                <Slider {...settings}>
                    {this.getYelpPics()}
                </Slider>
            </div>
          </div>
        </div>
      );
    }
  }

export default YelpMoreInfo;
  
