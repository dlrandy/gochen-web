import * as React from 'react'
import * as style from  '../../styles/containers/home.css'

import  Navigation  from '../../components/Navigation';



export default class Home extends React.Component<any, void> {
    render() {
        const {children} = this.props
        return (
            <div>
            <div>logo</div>
            <Navigation />
            <div >
           / uk{children}!jtyuytukj4444kjk</div>
            </div>
        );
    }
}
