import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';

import Login from 'modules/Login';
import Main from 'modules/Main';

import './style.css';

const App = () => {
  
  const [username, setUsername] = useState();

  return (
    <div className="App">
      {
        username
          ? <Login setUsername={setUsername} />
          : <Main username={username} />
      }
    </div>
  );
};

ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'));
