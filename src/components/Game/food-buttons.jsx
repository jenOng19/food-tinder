import React from 'react';

function FoodButtons(props) {
    const { choice } = props;

    return (
        <div className="food__button">            
            <button value="korean" className="food1" onClick={choice}>Korean Food</button>
            <button value="mexican" className="food2" onClick={choice}>Mexican Food</button>
            <button value="american" className="food3" onClick={choice}>American Food</button>
            <button value="desert" className="desert" onClick={choice}>Desert</button>
            <button value="tea" className="desert" onClick={choice}>Tea</button>
            <button value="bar" className="drink" onClick={choice}>Drink</button>
        </div>
    )
}

export default FoodButtons;