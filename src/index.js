import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
const theme = createMuiTheme({
})
ReactDOM.render(
  (<MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
  ),
  document.getElementById('root'))
registerServiceWorker()
