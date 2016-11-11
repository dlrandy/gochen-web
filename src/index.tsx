import './styles/index.css'
import Root from './main'

import * as React from 'react'
import { Router, IndexRoute,Route, Link, browserHistory } from 'react-router'
import * as ReactDOM from 'react-dom'

ReactDOM.render(<Root history={browserHistory}/>, document.getElementById('root'))
 if (module.hot) {
  module.hot.accept();
} 