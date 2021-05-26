import React, { useState, useEffect } from 'react';
import getData from '../utility/Data';
import Item from './Item';
import '../styles/Film.css';

const ItemList = (props) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
        
    useEffect(() => {
        const data = getData(props.type);
        setItems(data);
        setIsLoaded(true);
    }, [props.type])    

    return (
        <div className="container">
        {(!isLoaded) ? <div>Loading...</div> : null}
        {isLoaded && items.length > 0 ?
            items.map((item, i) => (
                <Item item={item} i={i} />
                ))
                : ""
        }
        </div>
    )
}

export default ItemList;