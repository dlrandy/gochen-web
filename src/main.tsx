import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, IndexRoute,Route, Link, browserHistory } from 'react-router'
import { Hello } from './components/Hello';
import HomeO from './containers/Home'


var Home = React.createClass({
  render: function() {
    return (<h1>Home ggggppp[p[pppp</h1>)
  }
})





 
 export default class Root extends React.Component<any, any>{
   render(){
     const { history } = this.props;
     return (
      <Router history={history}>
       <Route path="/" component={HomeO} />
        <Route path="/posts" component={Home} >
          <Route path="category/:categoryId" component={Home} >
            <Route path=":postId" component={Home} ></Route>
          </Route>
        </Route>
        <Route path="/demos" component={Hello} />
        <Route path="/games" component={Hello} />
        <Route path="/musics" component={Hello} />
       <Route path="/about" component={Hello} /> 
    </Router>
     )
   }
 }


