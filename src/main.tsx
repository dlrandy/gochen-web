import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, IndexRoute,Route, Link, browserHistory } from 'react-router'
import { Hello } from './components/Hello';
import HomeO from './containers/Home'


var Home = React.createClass({
  render: function() {
    return (<h1>Home ggggppppppp</h1>)
  }
})





 
 export default class Root extends React.Component<any, any>{
   render(){
     const { history } = this.props;
     return (
 <Router history={history}>
    <Route path="/" component={HomeO}>
        <Route path="/users" component={Home} />
        <Route path="/widgets" component={Hello} />
    </Route>
  </Router>
     )
   }
 }


