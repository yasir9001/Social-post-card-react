import React, { Component } from 'react'
import { Post } from '../post/Post';

export class MainScreen extends Component {
    constructor() {
        super()
        this.state = {
            postData: {
                createdBy: 'Yasir Hussain',
                avatar: 'https://picsum.photos/50/50?random=1',
                description: "I'm not feeling good today!",
                images: ['https://picsum.photos/500/300?random=2', 'https://picsum.photos/500/300?random=3', 'https://picsum.photos/500/300?random=4'],
                createdAt: Date.now(),
                likes: ['Karim', 'Ali', 'Khan', 'Baloch']
            }
        }
    }
    render() {
        return (
            <div style={{maxWidth:'500px', margin:'100px auto'}}>
                <Post data={this.state.postData} />
            </div>
        )
    }
}