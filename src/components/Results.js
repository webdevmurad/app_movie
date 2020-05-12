import React from 'react'

import Result from './Result'

function Results({results, openPopup}) {
    return (
        <div className="results">
            {results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup}/>
            ))}
        </div>
    )
}

export default Results
