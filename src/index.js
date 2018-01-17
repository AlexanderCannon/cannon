import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
// import indigo from 'material-ui/colors/indigo';
const theme = createMuiTheme({
  // palette: {
  //   contrastThreshold: 3,
  //   tonalOffset: 0.2,
  //   primary: '#eef442',
  //   secondary: '#41a6f4',
  //   error: {
  //     main: '#f44141',
  //   },
  // },
})
ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'))
registerServiceWorker()
