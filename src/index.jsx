import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import Header from './components/layout/Header';
// import Search from './components/layout/Search';
// import Tournament from './components/Tournament/Tournament.jsx';
import Search from './components/Tournament/Form';

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
