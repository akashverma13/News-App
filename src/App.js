// Let's import React, our styles and React Async
import React from 'react';
import News from './Components/News.js';
import './App.css';

class App extends React.Component {
    render() {
      return(
        <div>
          <News />
        </div>
      )
    }
}
export default App;