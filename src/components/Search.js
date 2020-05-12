import React from 'react'

function Search({handleInput, search}) {
    return (
        <div className='searchbox-wrap'>
            <input 
                type='text' 
                placeholder='Найти фильм ...' 
                className="searchbox" 
                onChange={handleInput}
                onKeyPress={search}
            />
        </div>
    )
}

export default Search
