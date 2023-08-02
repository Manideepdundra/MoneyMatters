import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import MoneyMatters from './MoneyMatters'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoneyMatters />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
