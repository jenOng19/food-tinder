import React, { Component } from 'react';
import YelpMoreInfo from './yelpMoreInfo';
import './yelp.css';

class YelpContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMoreInfo: false
		}

		this.clickHandler = this.clickHandler.bind(this);
		this.showMoreInfo = this.showMoreInfo.bind(this);
	}

	clickHandler() {
		this.props.click(this.props.id)
	}

	showMoreInfo() {
		this.setState({ showMoreInfo: !this.state.showMoreInfo })
	}

	render() {
		const { name, image, rating, price } = this.props;
		return (
			<div >
				<div className="yelpContainer">
					<div className="silver yelpInside">
						<div className="imgContainer">
							<img src={image} alt={name} className="yelp-img" onClick={this.clickHandler} />
						</div>
						<div className="yelpInfo">
							<p className="yelp-name" onClick={this.clickHandler}>{name}</p>
							<p className="yelp-reviews">Rating: {rating}</p>
							<p className="yelp-price">Price: {price}</p>
							<div className="yelpInfoButton" onClick={this.showMoreInfo}>More Info</div>
						</div>
					</div>

					<div className={"yelpMoreInfo " + (this.state.showMoreInfo ? "showInfo" : null) }>
						<div className="yelpMoreInfoExit" onClick={this.showMoreInfo}><i className="fas fa-angle-double-left fa-2x"></i></div>
						<div className="yelpMoreInfoContent">
							<YelpMoreInfo id={this.props.id} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default YelpContainer;
