import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import './yelp.css'

class YelpContainer extends Component{
    constructor(props){
        super(props);
        
    }

    handleRender(){
        
    }

    render(){
        
        return(
            <div>   
                <div className ="yelpContainer">
                    <div className="silver yelpInside">
                        <div className="imgContainer"></div>
                        <div className="yelpInfo">
                            <div className="name">Name</div>
                            <div className="reviews">Review</div>
                            <div className="price">Price</div>
                        </div>
                    </div>
                </div> 
                <div className="yelpContainer">
                    <div className="silver yelpInside">
                        <div className="imgContainer"></div>
                        <div className="yelpInfo">
                            <div className="name">Name</div>
                            <div className="reviews">Review</div>
                            <div className="price">Price</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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
