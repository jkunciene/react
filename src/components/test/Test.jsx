import React, {Component} from 'react';

class Test extends Component {
    state = {
        posts: [
            {
                id: 0,
                likes: 0,
                name: "Pirmas",
            },
            {
                id: 1,
                likes: 0,
                name: "Antras"
            }
        ]
    }

    addLike = (id) => {
        this.setState(prevState => ({
            posts: prevState.posts.map(post => {
                if(post.id !== id) {
                    return post;
                }

                post.likes++;
                return post;
            }),
        }))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <p>ID: {post.id}</p>
                        <p>Likes: {post.likes}</p>
                        <a href="#" onClick={() => this.addLike(post.id)}>Name: {post.name}</a>
                    </div>
                ))}
            </div>
        )
    }
}

export default Test;