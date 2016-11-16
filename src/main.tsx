import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, IndexRoute,Route, Link, browserHistory } from 'react-router'
import { Hello } from './components/Hello'
import {List, Post } from './components/Post/index'
import Home from './containers/Home'




 
 export default class Root extends React.Component<any, any>{
   render(){
     const { history } = this.props;

     return (
      <Router history={history}>
       <Route path="/" component={Home} />
        <Route path="/posts"  >
          <IndexRoute  component={List} key={Date.now()}/>
          <Route path="category/:categoryId"  >
            <IndexRoute component={List} key={Date.now()}/>
            <Route path=":postId" component={Post} />
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


