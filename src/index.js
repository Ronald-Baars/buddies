import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';

import Header from 'components/common/Header';
import Login from 'components/modules/Login';
import Main from 'components/modules/Main';

import './style.css';

const App = () => {
  const [username, setUsername] = useState();

  return (
    <div className="App">
      <Header />
      {username
          ? <Main username={username} />
          : <Login setUsername={setUsername} />
      }
    </div>
  );
};

ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'));
