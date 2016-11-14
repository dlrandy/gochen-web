import * as React from 'react'
import * as style from  '../../styles/containers/home.css'
export interface HomeProps {
    children: any
 }


export default class Home extends React.Component<HomeProps, void> {
    render() {
        const {children} = this.props
        return (
            <div>
            <h1>HOme
            </h1>
            <div >
           / uuuu  hhhhhh{children}!jtyuytukj4444kjk</div>
            </div>
        );
    }
}
