import React, {useState} from 'react';
import Search from './components/Search';
import Results from './components/Results'
import Popup from './components/Popup'

import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  // API ключ
  // const apiurl = 'http://www.omdbapi.com/?apikey=82069481';

  // Тут реализуется поисковик
  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.s).then(({data}) => {
        let results = data.Search;

        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }

  // Модальное окно
  const openPopup = id => {
    axios(apiurl + '&i=' + id).then(({data}) => {
      let result = data;

      setState(prevState => {
        return {...prevState, selected: result}
      })
    })
  }


  // Тут мы работаем с инпутом
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopup}/> : false}
      </main>
    </div>
  );
}

export default App;
