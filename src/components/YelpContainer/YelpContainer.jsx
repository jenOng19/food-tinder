import React, {Component} from 'react';

let style = {
    width: "200px",
    height: "200px"
}

class YelpContainer extends Component {
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind( this );
    }

    clickHandler() {
        console.log( this.props.id )
        this.props.click( this.props.id )
    }
// {name,image,rating,price}) 
    render() {
        const { name, image, rating, price } = this.props;
        return(
            <div onClick={ this.clickHandler } >   
                <div className ="yelpContainer">
                    <div className="silver yelpInside">
                        <div className="imgContainer">
                            <img src={image} alt={name} className="yelp-img" style={style}/>
                        </div>
                        <div className="yelpInfo">
                            <p className="yelp-name">{name}</p>
                            <p className="yelp-reviews">Rating: {rating}</p>
                            <p className="yelp-price">Price: {price}</p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}


export default YelpContainer;
