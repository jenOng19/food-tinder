import React, { Component } from 'react';
import Header from './header';
import '../../../styles.css';

function Landing(props) {
	return (
		<div className='landing__container'>
            <Header />
            <React.Fragment>
            <div className="search">
            <form className="search__form" onSubmit={props.handleSubmit}>
              <label>
                Location :
                <input className = "input__form" type="text" value={props.search} onChange={props.handleChange} /><p className="error"></p>
                <br/>
            </label> 
            </form>  
            </div> 
            <div className="icon__container">
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img breakfast" src="https://image.flaticon.com/icons/svg/926/926255.svg" alt="breakfast" value="breakfast" onClick={props.handleClick}/>
                </div>
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img mexicianfood" src="https://image.flaticon.com/icons/svg/135/135590.svg" alt="mexicianfood" value="mexican" onClick={props.handleClick}/>
                </div>
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img noodles" src="https://image.flaticon.com/icons/svg/135/135658.svg" alt="noodles" value="noodles" onClick={props.handleClick}/>
                </div>
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img pizza" src="https://image.flaticon.com/icons/svg/1810/1810944.svg" alt="pizza" value="pizza" onClick={props.handleClick}/>
                </div>
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img hamburger" src="https://image.flaticon.com/icons/svg/878/878052.svg" alt="hamburger" value="hamburger" onClick={props.handleClick}/>
                </div>
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img coffee" src="https://image.flaticon.com/icons/svg/129/129501.svg" alt="coffee" value="coffee" onClick={props.handleClick}/>
                </div>
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img desertIcon" src="https://image.flaticon.com/icons/svg/1784/1784096.svg" alt="desert" value="desert" onClick={props.handleClick}/>
                </div>
                <div className="icon" onClick={props.handleClick}>
                    <img className="icon__img bar" src="https://image.flaticon.com/icons/svg/1087/1087950.svg" alt="bar" value="bar" onClick={props.handleClick}/>
                </div>
            </div>
            </React.Fragment>
		</div>
	)
}

export default Landing;