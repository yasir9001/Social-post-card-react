import React, { Component } from 'react'
import FacebookEmoji from 'react-facebook-emoji';
import './Post.css'

export class Post extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props.data)
        let { avatar, createdBy, description, images, createdAt, likes } = this.props.data
        return (
            <div className="post-wrapper">

                <div className="post-head">
                    <div>
                        <img src={avatar} alt='img' />
                    </div>
                    <div>
                        <span>{createdBy}</span>
                        <span>{new Date(createdAt).toLocaleTimeString()}</span>
                    </div>
                </div>


                <div className="post-body">
                    <div className="text-description">
                        <span>{description}</span>
                    </div>

                    <div className="image-box">
                        <img src={images[0]} alt='img' />
                    </div>
                </div>

                <div className="post-footer">
                    <div>
                        <div className="post-footer-buttons">
                            <div className="post-like-button">
                                <div className="post-reacts-emojis">
                                    <FacebookEmoji type="like" size="sm" />
                                    <FacebookEmoji type="love" size="sm" />
                                    <FacebookEmoji type="wow" size="sm" />
                                    <FacebookEmoji type="yay" size="sm" />
                                    <FacebookEmoji type="angry" size="sm" />
                                    <FacebookEmoji type="haha" size="sm" />
                                    <FacebookEmoji type="sad" size="sm" />
                                </div>
                                <span><img src={require('./../../assets/thumbs-up.png')} /></span><span>Like</span></div>
                            <div><span><img src={require('./../../assets/blank-squared-bubble.png')} /></span><span>Comment</span></div>
                            <div><span><img src={require('./../../assets/forward.png')} /></span><span>Share</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}