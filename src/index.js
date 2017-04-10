import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import 'font-awesome/css/font-awesome.css'

const MuiApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MuiApp />,
  document.getElementById('root')
);
