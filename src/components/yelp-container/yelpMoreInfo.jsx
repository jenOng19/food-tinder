import React, {Component} from "react";
import axios from "axios";
import API_key from "../game/keys";
import Slider from "react-slick";

class YelpMoreInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pictures: []
      }
    }

    getYelpPics () {

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
        this.setState({pictures : res.data.photos})
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
          <div>Name:</div>
          <div>Phone:</div>
          <div>Address:</div>
          <div>Pics
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
  
