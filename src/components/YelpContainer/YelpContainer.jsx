import React, {Component} from 'react';
import './yelp.css' 

let style = {
    width: "200px",
    height: "200px"
}

function YelpContainer ({name,image,rating,price}) {
    return(
        <div>   
            <div className ="yelpContainer">
                <div className="silver yelpInside">
                    <div className="imgContainer">
                        <img src={image} alt={name} className="yelp-img" style={style}/>
                    </div>
                    <div className="yelpInfo">
                        {/* <div className="name">Name</div> */}
                        <p className="yelp-name">{name}</p>
                        {/* <div className="reviews">Review</div> */}
                        <p className="yelp-reviews">Rating: {rating}</p>
                        {/* <div className="price">Price</div> */}
                        <p className="yelp-price">Price: {price}</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

// props = <YelpBox name={restaurant.name} 
// image={restaurant.image_url}
// location={restaurant.coordinates}
// rating={restaurant.rating}
// key={restaurant.id}
// function YelpContainer (props){
//     console.log(props)
//     return (
//         <div className = "yelpimg">
//         <YelpImg img={image} alt={name}/>
//         </div>
//     )
// };



// function YelpImg (image, name) {
//     return <img src ={image} alt={name} />
// }

// function YelpImg(){
//     const styling={
//         backgroundColor: 'yellow',

//     }
//     const element=(
//         <div className="yelp" style={styling}>

//         </div>
//     )
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
    
//     )
// }


// ReactDOM.render(
//     <YelpImg />,
//     document.getElementById('root')

// )



export default YelpContainer;
