import * as React from 'react'
import  'whatwg-fetch'
import Intro from './Intro'

export interface Post {
     title: string;
     description: string;
     content: string;
     postDate: Date;
     author_id: number;
     category_id: number;
     id: number;
}
interface Params{
    postId: number;
    categoryId: number;
}
interface Locaon{

}
interface RouterComponent {
     postItem: Post;
     params: Params;
     location: Location;
}

export default class List extends React.Component<RouterComponent, any> {
    constructor(){
        super()
        this.state = {
            list: []
        }
        this.getPosts = this.getPosts.bind(this);
         this.getPostsByCategory = this.getPostsByCategory.bind(this);
    } 
    getPosts(): Promise<Response>{//<Post[]>
        return  fetch('/api/posts/', { method: 'get'}).then((res)=>{
           return res;
        })
    }
    getPostsByCategory(categoryId: number) {
        return  fetch('/api/posts/categories/'+categoryId, { method: 'get'}).then((res)=>{
           return res;
        })
    }
    componentWillMount(){
        const {location, params} = this.props;
        console.log(location)
        let response = location.search == "" ? this.getPosts() : this.getPostsByCategory(params.categoryId);
        response.then(res => res.json()).then(json=>{
            console.log(json)
            this.setState({list: [...this.state.list, ...json]});
        }).catch((err) =>{
            this.setState({list: []});
            alert('刷新试一下')
        });
        
    }
    render() {
        let list = this.state.list
        const {children, location} = this.props;
        let target = <div>loading..</div>;
        if (list.length > 0){
           
            target = list.map((post, index)=> {
                 console.log(post)
                return <Intro post={post} key={index} />})
        } 

        return (
            <div >
            {target}
            <hr/>
            {children}
            </div>
        )
    }
}
