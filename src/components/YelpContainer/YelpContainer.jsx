import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// props = <YelpBox name={restaurant.name} 
// image={restaurant.image_url}
// location={restaurant.coordinates}
// rating={restaurant.rating}
// key={restaurant.id}
function YelpContainer (props){
    console.log(props)
    return (
        <div className = "yelpimg">
        <YelpImg img={image} alt={name}/>
        </div>
    )
};



function YelpImg (image, name) {
    return <img src ={image} alt={name} />
}



export default YelpContainer;
