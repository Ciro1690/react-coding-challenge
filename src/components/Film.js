import React, { useState} from 'react';
import testData from '../testData.json';
import '../styles/Film.css';

const Film = (props) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);

    function getFilmData() {
       try {
            fetch("./testData.json")
                .then(setItems(sortEntries(testData.entries)))
                .then(setIsLoaded(true))
       }
       catch (err) {
           return <div>Oops, something went wrong...</div>
       }
    }

    function sortEntries(items) {
        const newArray = [].concat(items)
            .filter(item => item.releaseYear >= 2010 && item.programType === props.type)
            .sort(function (a,b) {
                return ('' + a.title).localeCompare(b.title);
            })
            .slice(0,21);
            setItems(newArray)
        return newArray
    }
        
    return (
        <div className="container">
        {(!isLoaded) ? <div>Loading...</div> : null}
        {items.length > 0 ?
            items.map((item, i) => (
                <div className="item" key={i}>
                    <img className="series-img" src={item.images["Poster Art"].url} alt="img"/>
                    <h4>
                        {item.title}
                    </h4>
                </div>

                ))
                :
                getFilmData()
        }
        </div>
    )
}

export default Film;