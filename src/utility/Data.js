import testData from './testData.json';

const getData = (type) => {
    return sortEntries(testData.entries,type)
}

function sortEntries(items, type) {
    const newArray = [].concat(items)
        .filter(item => item.releaseYear >= 2010 && item.programType === type)
        .sort(function (a,b) {
            return ('' + a.title).localeCompare(b.title);
        })
        .slice(0,21);
    return newArray
}

export default getData