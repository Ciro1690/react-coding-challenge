import React from 'react';

const Item = (props) => {
    let {item, i} = props;

    return (
        <div className="item" key={i}>
            <img className="series-img" src={item.images["Poster Art"].url} alt="img"/>
            <h4>
                {item.title}
            </h4>
        </div>
    )
}

export default Item;