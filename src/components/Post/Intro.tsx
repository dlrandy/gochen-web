import * as React from 'react'
import {Post} from './List'
interface IntroInterface{
   post: Post
}
import {Link} from 'react-router'
export default class Intro extends React.Component<IntroInterface, any> {
    render() {
        const post = this.props.post
        return (
            <li>
            <section>
               <header><h3>{post.title}</h3></header>
               <article>{post.description}</article>
               <footer>
               <ul>
                    <li>发布日期：oooo {post.postDate}</li>
                    <li>作者： {post.author_id}</li>
                    <li><Link to={{ pathname: '/posts/category/'+post.category_id, query: { filter: true } }}>类别： {post.category_id}</Link></li>
                    <li><Link to={'/posts/category/'+post.category_id+'/'+post.id}>阅读</Link></li>
               </ul>
               </footer> 
            </section>
            </li>

        )
    }
}