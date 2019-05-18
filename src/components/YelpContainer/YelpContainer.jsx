import React, {Component} from 'react';

let style = {
    width: "200px",
    height: "200px"
}

function YelpContainer (props) {
    return(
        <div>   
            <div className ="yelpContainer">
                <div className="silver yelpInside">
                    <div className="imgContainer">
                        <img src={props.image} alt={props.name} className="yelp-img" style={style}/>
                    </div>
                    <div className="yelpInfo">
                        <p className="yelp-name">{props.name}</p>
                        <p className="yelp-reviews">Rating: {props.rating}</p>
                        <p className="yelp-price">Price:{props.price}</p>
                        <button onClick={()=>props.chosen(props.id)}>Choose</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

// {name,image,rating,price}
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
