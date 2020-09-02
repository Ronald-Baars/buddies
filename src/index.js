import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="App">
    Hey Ronald
  </div>
);

ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'));
