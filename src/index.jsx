import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import Header from './components/layout/Header';
// import Search from './components/layout/Search';
// import YelpContainer from './components/yelpContainer/YelpContainer';
import Search from './components/Game/Game';
import '../src/components/YelpContainer/yelp.css'

// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = null;
//     }
    
//     render(){
//         return(
//             <div className="page">
//                 {/* <Header />
//                 <Search />  */}
//                 <Tournament />
//             </div>
//         )
//     }

// }

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)
