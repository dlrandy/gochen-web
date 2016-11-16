import * as React from 'react'
interface Params{
    postId: number;
}
interface PostComponent {
     postItem: Post;
     params: Params;
     location: Object;
}

export default class Post extends React.Component<PostComponent, any> {
    constructor(){
        super()
        this.state = {
            post: {}
        }
        this.getPost = this.getPost.bind(this);
    } 
    getPost(post_id: number): Promise<Response>{//<Post[]>
        return  fetch('/api/posts/'+post_id, { method: 'get'}).then((res)=>{
           return res;
        })
    }
    componentWillMount(){
        const { postId } = this.props.params;

        let response = this.getPost(postId).then(res => res.json()).then(json=>{
            console.log(json)
            this.setState({post: json});
        }).catch((err) =>{
            this.setState({post: {
                title: 'Error'
            }});
            alert('刷新试一下')
        });
        
    }
    render() {
        const {post} = this.state;
        return (
            <div>
    {post.title}
            </div>
        )
    }
}
