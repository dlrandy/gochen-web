import * as React from 'react'
import {Link} from 'react-router' 
export interface HelloProps {  }

export  default class Navigation extends React.Component<any, any>{
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/posts">posts</Link></li>
                    <li><Link to="/games">games</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
            </div>
        );
    }
}