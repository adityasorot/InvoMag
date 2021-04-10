import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { myStore } from './store/store' 
import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

ReactDOM.render(
  
  <MuiThemeProvider theme={responsiveFontSizes(theme)}>
    <Provider store={myStore}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
/*
CRACKED BY ILLUMINATI
TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
 ReactDOM.render(
   <Provider store={store}>
     <MuiThemeProvider theme={theme}>
       <App />
     </MuiThemeProvider>
   </Provider>,
   document.getElementById('root')
 );
*/
serviceWorker.unregister();


